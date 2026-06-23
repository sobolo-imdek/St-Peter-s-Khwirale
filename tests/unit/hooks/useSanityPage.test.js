/**
 * Unit tests for useSanityPage
 *
 * Tests the merge, cache read/write, staleness check, and error handling
 * without touching the network (sanityClient is mocked).
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';

vi.mock('../../../src/lib/sanity', () => ({
  sanityClient: { fetch: vi.fn() },
  urlFor: vi.fn(),
}));

vi.mock('../../../src/data/pageDefaults', () => ({
  pageDefaults: {
    about: {
      title: 'About | SPKSS',
      heading: 'About Us',
      subheading: 'Our Story',
      seoDescription: 'Learn about us',
      body: [],
    },
    home: {
      title: 'Home | SPKSS',
      heading: 'Welcome',
      subheading: '',
      seoDescription: 'Home page',
      body: [],
    },
  },
}));

import useSanityPage from '../../../src/hooks/useSanityPage';
import { sanityClient } from '../../../src/lib/sanity';

const SLUG = 'about';
const CACHE_KEY = `sanity-page:${SLUG}`;

describe('useSanityPage', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('starts with fallback defaults when there is no cache', () => {
    sanityClient.fetch.mockResolvedValue(null);
    const { result } = renderHook(() => useSanityPage(SLUG));
    expect(result.current.heading).toBe('About Us');
    expect(result.current.isLoading).toBe(true);
  });

  it('merges CMS data on top of fallback defaults', async () => {
    sanityClient.fetch.mockResolvedValue({
      _updatedAt: '2026-06-01T00:00:00Z',
      title: 'About | CMS',
      heading: 'Our History',
      subheading: 'Est. 1980',
      seoDescription: 'CMS description',
      body: [{ _type: 'block', children: [{ text: 'Hello' }] }],
    });
    const { result } = renderHook(() => useSanityPage(SLUG));
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.heading).toBe('Our History');
    expect(result.current.title).toBe('About | CMS');
    expect(result.current.seoDescription).toBe('CMS description');
  });

  it('keeps fallback heading when CMS returns null heading', async () => {
    sanityClient.fetch.mockResolvedValue({
      _updatedAt: '2026-06-01T00:00:00Z',
      title: null,
      heading: null,
      subheading: null,
      seoDescription: null,
      body: [],
    });
    const { result } = renderHook(() => useSanityPage(SLUG));
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.heading).toBe('About Us');
  });

  it('keeps fallback body when CMS returns an empty body array', async () => {
    const fallbackBody = [{ _type: 'block', children: [{ text: 'Fallback body' }] }];
    const { pageDefaults } = await import('../../../src/data/pageDefaults');
    pageDefaults.about.body = fallbackBody;

    sanityClient.fetch.mockResolvedValue({
      _updatedAt: '2026-06-01T00:00:00Z',
      title: 'Title',
      heading: 'Heading',
      subheading: '',
      seoDescription: '',
      body: [], // empty CMS body → must keep fallback
    });
    const { result } = renderHook(() => useSanityPage(SLUG));
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.body).toEqual(fallbackBody);
  });

  it('writes fetched page to localStorage', async () => {
    sanityClient.fetch.mockResolvedValue({
      _updatedAt: '2026-06-01T00:00:00Z',
      title: 'Cached Page',
      heading: 'Cached Heading',
      subheading: '',
      seoDescription: '',
      body: [],
    });
    const { result } = renderHook(() => useSanityPage(SLUG));
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    const stored = JSON.parse(localStorage.getItem(CACHE_KEY));
    expect(stored).not.toBeNull();
    expect(stored.heading).toBe('Cached Heading');
  });

  it('reads from localStorage on mount and skips loading state', () => {
    const cachedPage = {
      _updatedAt: '2026-06-01T00:00:00Z',
      title: 'Pre-cached',
      heading: 'Pre-cached Heading',
      subheading: '',
      seoDescription: '',
      body: [],
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(cachedPage));
    // Return same updatedAt so cache is considered fresh
    sanityClient.fetch.mockResolvedValue('2026-06-01T00:00:00Z');
    const { result } = renderHook(() => useSanityPage(SLUG));
    expect(result.current.heading).toBe('Pre-cached Heading');
    expect(result.current.isLoading).toBe(false);
  });

  it('sets error when Sanity returns null (page not found in CMS)', async () => {
    sanityClient.fetch.mockResolvedValue(null);
    const { result } = renderHook(() => useSanityPage(SLUG));
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.error).toBeInstanceOf(Error);
    expect(result.current.error.message).toMatch(/not found/i);
  });

  it('sets error and keeps fallback page on network failure', async () => {
    sanityClient.fetch.mockRejectedValue(new Error('Network down'));
    const { result } = renderHook(() => useSanityPage(SLUG));
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.error).toBeInstanceOf(Error);
    expect(result.current.heading).toBe('About Us'); // fallback preserved
  });

  it('re-fetches when slug prop changes', async () => {
    sanityClient.fetch
      .mockResolvedValueOnce({
        _updatedAt: '2026-06-01T00:00:00Z',
        title: 'About Page',
        heading: 'About Heading',
        subheading: '',
        seoDescription: '',
        body: [],
      })
      .mockResolvedValueOnce({
        _updatedAt: '2026-06-01T00:00:00Z',
        title: 'Home Page',
        heading: 'Welcome Heading',
        subheading: '',
        seoDescription: '',
        body: [],
      });

    const { result, rerender } = renderHook(({ slug }) => useSanityPage(slug), {
      initialProps: { slug: 'about' },
    });
    await waitFor(() => expect(result.current.heading).toBe('About Heading'));

    rerender({ slug: 'home' });
    await waitFor(() => expect(result.current.heading).toBe('Welcome Heading'));
    expect(sanityClient.fetch).toHaveBeenCalledTimes(2);
  });
});

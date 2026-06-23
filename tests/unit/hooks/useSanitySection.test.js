/**
 * Unit tests for useSanitySection
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';

vi.mock('../../../src/lib/sanity', () => ({
  sanityClient: { fetch: vi.fn() },
  urlFor: vi.fn(),
}));

vi.mock('../../../src/data/sectionDefaults', () => ({
  sectionDefaults: {
    'about:mission': { title: 'Our Mission', body: [{ _type: 'block', children: [{ text: 'Default mission body' }] }] },
    'home:welcome': { title: 'Welcome', body: [] },
  },
}));

import useSanitySection from '../../../src/hooks/useSanitySection';
import { sanityClient } from '../../../src/lib/sanity';

describe('useSanitySection', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('returns fallback section from sectionDefaults immediately', () => {
    sanityClient.fetch.mockResolvedValue(null);
    const { result } = renderHook(() => useSanitySection('about', 'mission'));
    expect(result.current.title).toBe('Our Mission');
  });

  it('merges CMS section title over fallback', async () => {
    sanityClient.fetch.mockResolvedValue({
      _updatedAt: '2026-06-01T00:00:00Z',
      title: 'CMS Mission Title',
      body: [{ _type: 'block', children: [{ text: 'CMS body' }] }],
    });
    const { result } = renderHook(() => useSanitySection('about', 'mission'));
    await waitFor(() => expect(result.current.title).toBe('CMS Mission Title'));
    expect(result.current.body[0].children[0].text).toBe('CMS body');
  });

  it('keeps fallback body when CMS returns empty body', async () => {
    sanityClient.fetch.mockResolvedValue({
      _updatedAt: '2026-06-01T00:00:00Z',
      title: 'New Title',
      body: [],
    });
    const { result } = renderHook(() => useSanitySection('about', 'mission'));
    await waitFor(() => expect(result.current.title).toBe('New Title'));
    // body must fall back since CMS returned []
    expect(result.current.body[0].children[0].text).toBe('Default mission body');
  });

  it('returns empty title/body for an unknown section key', () => {
    sanityClient.fetch.mockResolvedValue(null);
    const { result } = renderHook(() => useSanitySection('about', 'nonexistent'));
    expect(result.current.title).toBe('');
    expect(result.current.body).toEqual([]);
  });

  it('caches section in localStorage after successful fetch', async () => {
    sanityClient.fetch.mockResolvedValue({
      _updatedAt: '2026-06-01T00:00:00Z',
      title: 'Cached Section',
      body: [{ _type: 'block', children: [{ text: 'Cached body' }] }],
    });
    const { result } = renderHook(() => useSanitySection('about', 'mission'));
    await waitFor(() => expect(result.current.title).toBe('Cached Section'));
    const cached = JSON.parse(localStorage.getItem('sanity-section:about:mission'));
    expect(cached.title).toBe('Cached Section');
  });

  it('serves cached section on re-mount without waiting for fetch', () => {
    const cachedSection = { title: 'From Cache', body: [] };
    localStorage.setItem('sanity-section:about:mission', JSON.stringify(cachedSection));
    sanityClient.fetch.mockResolvedValue(null);
    const { result } = renderHook(() => useSanitySection('about', 'mission'));
    expect(result.current.title).toBe('From Cache');
  });

  it('falls back gracefully on network error', async () => {
    sanityClient.fetch.mockRejectedValue(new Error('Timeout'));
    const { result } = renderHook(() => useSanitySection('about', 'mission'));
    await waitFor(() => {
      // After error, should still return the fallback or cached value
      expect(result.current.title).toBeDefined();
    });
    expect(result.current.title).toBe('Our Mission');
  });
});

/**
 * Integration tests for useSanityPage hook
 *
 * Verifies that the hook correctly reads from cache, fetches fresh data,
 * merges CMS results with static defaults, and handles errors.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';

vi.mock('../../src/lib/sanity', () => ({
  sanityClient: { fetch: vi.fn() },
  urlFor: vi.fn(),
}));

vi.mock('../../src/data/pageDefaults', () => ({
  pageDefaults: {
    contact: {
      title: 'Contact | SPKSS',
      heading: 'Contact Us',
      subheading: 'We would love to hear from you',
      seoDescription: 'Get in touch with us.',
      body: [],
    },
  },
}));

import useSanityPage from '../../src/hooks/useSanityPage';
import { sanityClient } from '../../src/lib/sanity';

describe('useSanityPage — integration', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('returns the fallback defaults when Sanity has no matching page', async () => {
    sanityClient.fetch.mockResolvedValue(null);
    const { result } = renderHook(() => useSanityPage('contact'));
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.heading).toBe('Contact Us');
    expect(result.current.error).toBeInstanceOf(Error);
  });

  it('uses fresh CMS data over defaults', async () => {
    sanityClient.fetch.mockResolvedValue({
      _updatedAt: '2026-06-20T10:00:00Z',
      title: 'Contact | Updated',
      heading: 'Get In Touch',
      subheading: 'Call or email us',
      seoDescription: 'CMS description',
      body: [{ _type: 'block', children: [{ text: 'CMS body content' }] }],
    });
    const { result } = renderHook(() => useSanityPage('contact'));
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.heading).toBe('Get In Touch');
    expect(result.current.error).toBeNull();
  });

  it('stale-while-revalidate: serves cache then fetches fresh data when stamp differs', async () => {
    // Seed cache with old data
    const oldPage = { _updatedAt: '2026-01-01T00:00:00Z', heading: 'Old Heading', title: 'Old', subheading: '', seoDescription: '', body: [] };
    localStorage.setItem('sanity-page:contact', JSON.stringify(oldPage));

    // First call returns new updatedAt → trigger re-fetch; second call returns fresh page
    sanityClient.fetch
      .mockResolvedValueOnce('2026-06-20T10:00:00Z')   // updatedAt check
      .mockResolvedValueOnce({                           // fresh fetch
        _updatedAt: '2026-06-20T10:00:00Z',
        title: 'Contact | Fresh',
        heading: 'Fresh Heading',
        subheading: '',
        seoDescription: '',
        body: [],
      });

    const { result } = renderHook(() => useSanityPage('contact'));

    // Immediately served from cache
    expect(result.current.heading).toBe('Old Heading');

    // After revalidation completes
    await waitFor(() => expect(result.current.heading).toBe('Fresh Heading'));
  });

  it('handles network failure gracefully — keeps fallback heading', async () => {
    sanityClient.fetch.mockRejectedValue(new Error('Timeout'));
    const { result } = renderHook(() => useSanityPage('contact'));
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.heading).toBe('Contact Us');
    expect(result.current.error).toBeInstanceOf(Error);
  });
});

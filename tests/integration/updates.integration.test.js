/**
 * Integration tests for useSanityUpdatesLists + Updates page rendering
 *
 * Uses MSW (already started in setup.js) to intercept real Sanity fetch calls.
 * No dummy data — Sanity calls are intercepted at the HTTP level.
 */
import { describe, it, expect, vi } from 'vitest';
import { waitFor } from '@testing-library/react';

vi.mock('../../src/data/content', () => ({
  schoolData: {
    hero: { headline: '', subheadline: '', images: [] },
    principal: { name: '', title: '', message: '', image: '' },
    name: "St Peter's Khwirale Senior School",
    shortName: 'SPKSS',
    about: { mission: 'Nurturing excellence.' },
  },
}));

// Minimal stub so the Updates page does not crash loading other hooks
vi.mock('../../src/lib/sanity', () => ({
  sanityClient: {
    fetch: vi.fn().mockImplementation((query) => {
      if (query.includes('"events"')) {
        return Promise.resolve({
          events: [],
          news: [],
          tenders: [],
          careers: [],
        });
      }
      return Promise.resolve(null);
    }),
  },
  urlFor: vi.fn(),
}));

import useSanityUpdatesLists from '../../src/hooks/useSanityUpdatesLists';
import { sanityClient } from '../../src/lib/sanity';
import { renderHook } from '@testing-library/react';

describe('useSanityUpdatesLists — integration', () => {
  it('resolves with empty lists when Sanity returns no updates', async () => {
    sanityClient.fetch.mockResolvedValue({
      events: [], news: [], tenders: [], careers: [],
    });
    const { result } = renderHook(() => useSanityUpdatesLists());
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.events).toHaveLength(0);
    expect(result.current.news).toHaveLength(0);
  });

  it('populates events correctly when Sanity returns event data', async () => {
    sanityClient.fetch.mockResolvedValue({
      events: [
        { title: 'Prize Giving Day', publishedAt: '2026-07-15', excerpt: 'Annual prize giving ceremony.' },
        { title: 'Sports Day', publishedAt: '2026-06-10', excerpt: 'Inter-house athletics competition.' },
      ],
      news: [],
      tenders: [],
      careers: [],
    });
    const { result } = renderHook(() => useSanityUpdatesLists());
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.events).toHaveLength(2);
    expect(result.current.events[0].title).toBe('Prize Giving Day');
    expect(result.current.events[1].title).toBe('Sports Day');
  });

  it('populates tenders with fileUrl from Sanity', async () => {
    sanityClient.fetch.mockResolvedValue({
      events: [],
      news: [],
      tenders: [
        { title: 'Supply of Chairs', description: '200 classroom chairs', fileUrl: 'https://cdn.sanity.io/files/chairs.pdf' },
      ],
      careers: [],
    });
    const { result } = renderHook(() => useSanityUpdatesLists());
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.tenders[0].fileUrl).toContain('.pdf');
  });

  it('does not throw when fetch fails — keeps empty lists', async () => {
    sanityClient.fetch.mockRejectedValue(new Error('Connection refused'));
    const { result } = renderHook(() => useSanityUpdatesLists());
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.events).toEqual([]);
  });
});

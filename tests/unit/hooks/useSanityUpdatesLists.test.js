/**
 * Unit tests for useSanityUpdatesLists
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';

vi.mock('../../../src/lib/sanity', () => ({
  sanityClient: { fetch: vi.fn() },
  urlFor: vi.fn(),
}));

import useSanityUpdatesLists from '../../../src/hooks/useSanityUpdatesLists';
import { sanityClient } from '../../../src/lib/sanity';

describe('useSanityUpdatesLists', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('starts with all lists empty and isLoading true', () => {
    sanityClient.fetch.mockResolvedValue({ events: [], news: [], tenders: [], careers: [] });
    const { result } = renderHook(() => useSanityUpdatesLists());
    expect(result.current.isLoading).toBe(true);
    expect(result.current.events).toEqual([]);
    expect(result.current.news).toEqual([]);
    expect(result.current.tenders).toEqual([]);
    expect(result.current.careers).toEqual([]);
  });

  it('populates all lists from Sanity response', async () => {
    sanityClient.fetch.mockResolvedValue({
      events: [{ title: 'Sports Day', publishedAt: '2026-03-10', excerpt: 'Annual sports day.' }],
      news: [{ title: 'New Lab Opened', publishedAt: '2026-02-01', excerpt: 'Science lab inaugurated.', imageUrl: null }],
      tenders: [{ title: 'Desk Tender', description: 'Supply 200 desks', fileUrl: 'https://example.com/tender.pdf' }],
      careers: [{ title: 'Maths Teacher Vacancy', excerpt: 'We are hiring.' }],
    });
    const { result } = renderHook(() => useSanityUpdatesLists());
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.events).toHaveLength(1);
    expect(result.current.events[0].title).toBe('Sports Day');
    expect(result.current.news[0].title).toBe('New Lab Opened');
    expect(result.current.tenders[0].fileUrl).toBe('https://example.com/tender.pdf');
    expect(result.current.careers[0].title).toBe('Maths Teacher Vacancy');
  });

  it('keeps lists empty if Sanity returns empty arrays', async () => {
    sanityClient.fetch.mockResolvedValue({ events: [], news: [], tenders: [], careers: [] });
    const { result } = renderHook(() => useSanityUpdatesLists());
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.events).toEqual([]);
    expect(result.current.news).toEqual([]);
  });

  it('does not throw when Sanity returns partial data (missing keys)', async () => {
    // Only events returned — others are missing
    sanityClient.fetch.mockResolvedValue({ events: [{ title: 'Partial Event' }] });
    const { result } = renderHook(() => useSanityUpdatesLists());
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.events[0].title).toBe('Partial Event');
    // Missing keys should remain as initial empty arrays
    expect(result.current.news).toEqual([]);
    expect(result.current.tenders).toEqual([]);
    expect(result.current.careers).toEqual([]);
  });

  it('sets isLoading to false even when Sanity fetch throws', async () => {
    sanityClient.fetch.mockRejectedValue(new Error('Sanity is down'));
    const { result } = renderHook(() => useSanityUpdatesLists());
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    // Lists should remain as empty arrays — no crash
    expect(result.current.events).toEqual([]);
  });
});

/**
 * Unit tests for useSanityFees
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';

vi.mock('../../../src/lib/sanity', () => ({
  sanityClient: { fetch: vi.fn() },
  urlFor: vi.fn(),
}));

import useSanityFees from '../../../src/hooks/useSanityFees';
import { sanityClient } from '../../../src/lib/sanity';

const defaultFees = [
  { category: 'Tuition & Learning Materials', amount: 'KES 12,500' },
  { category: 'Administrative Levies', amount: 'KES 3,200' },
  { category: 'Activity & Co-curricular', amount: 'KES 1,500' },
  { category: 'Medical & Insurance', amount: 'KES 800' },
  { category: 'PTA Project Fund', amount: 'KES 2,000' },
];

describe('useSanityFees', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('starts with built-in default fee structure', () => {
    sanityClient.fetch.mockResolvedValue(null);
    const { result } = renderHook(() => useSanityFees());
    expect(result.current.fees).toEqual(defaultFees);
    expect(result.current.fees).toHaveLength(5);
  });

  it('replaces defaults with CMS fees when Sanity returns data', async () => {
    sanityClient.fetch.mockResolvedValue({
      fees: [
        { category: 'Term 1 Fee', amount: 'KES 15,000' },
        { category: 'Term 2 Fee', amount: 'KES 14,000' },
      ],
    });
    const { result } = renderHook(() => useSanityFees());
    await waitFor(() => expect(result.current.fees).toHaveLength(2));
    expect(result.current.fees[0].category).toBe('Term 1 Fee');
    expect(result.current.fees[1].amount).toBe('KES 14,000');
  });

  it('keeps default fees when Sanity returns null', async () => {
    sanityClient.fetch.mockResolvedValue(null);
    const { result } = renderHook(() => useSanityFees());
    await waitFor(async () => {
      await new Promise((r) => setTimeout(r, 50));
    });
    expect(result.current.fees).toEqual(defaultFees);
  });

  it('keeps default fees when Sanity returns an object with empty fees array', async () => {
    sanityClient.fetch.mockResolvedValue({ fees: [] });
    const { result } = renderHook(() => useSanityFees());
    // Empty array from Sanity should not override defaults
    await waitFor(async () => {
      await new Promise((r) => setTimeout(r, 50));
    });
    expect(result.current.fees).toEqual(defaultFees);
  });

  it('keeps default fees on network error', async () => {
    sanityClient.fetch.mockRejectedValue(new Error('Fetch error'));
    const { result } = renderHook(() => useSanityFees());
    await waitFor(async () => {
      await new Promise((r) => setTimeout(r, 50));
    });
    expect(result.current.fees).toEqual(defaultFees);
  });
});

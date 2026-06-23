/**
 * Unit tests for useSanityHeroSlides
 *
 * Strategy: vi.mock the sanityClient so we control what .fetch() resolves to.
 * MSW handles the network layer for integration tests; here we test the hook
 * logic directly (mapping, caching, fallback) without HTTP.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';

// ─── Mock the sanity client BEFORE importing the hook ───────────────────────
vi.mock('../../../src/lib/sanity', () => ({
  sanityClient: { fetch: vi.fn() },
  urlFor: vi.fn((source) => ({
    width: () => ({ auto: () => ({ url: () => `https://cdn.sanity.io/images/${source?._ref || 'test'}` }) }),
  })),
}));

// ─── Mock static content data ────────────────────────────────────────────────
vi.mock('../../../src/data/content', () => ({
  schoolData: {
    hero: {
      headline: 'Fallback Headline',
      subheadline: 'Fallback Subheadline',
      images: [{ src: '/fallback.jpg', alt: 'Fallback' }],
    },
    principal: { name: 'Unknown', title: '', message: '', image: '' },
    name: "St Peter's Khwirale Senior School",
    shortName: 'SPKSS',
    about: { mission: 'Default mission' },
  },
}));

import useSanityHeroSlides from '../../../src/hooks/useSanityHeroSlides';
import { sanityClient } from '../../../src/lib/sanity';

describe('useSanityHeroSlides', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('starts with fallback hero when no cache exists', () => {
    sanityClient.fetch.mockResolvedValue([]);
    const { result } = renderHook(() => useSanityHeroSlides());
    // Initial state before fetch resolves: fallback data, isLoading true
    expect(result.current.headline).toBe('Fallback Headline');
    expect(result.current.isLoading).toBe(true);
  });

  it('falls back to static data when Sanity returns an empty array', async () => {
    sanityClient.fetch.mockResolvedValue([]);
    const { result } = renderHook(() => useSanityHeroSlides());
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.headline).toBe('Fallback Headline');
    expect(result.current.slides).toEqual([{ src: '/fallback.jpg', alt: 'Fallback' }]);
  });

  it('maps CMS slides to { src, alt } pairs when Sanity returns slides with imageUrl', async () => {
    sanityClient.fetch.mockResolvedValue([
      { _id: '1', _updatedAt: '2026-01-01', headline: 'CMS Headline', subheadline: 'CMS Sub', imageUrl: 'https://example.com/img1.jpg', image: null },
      { _id: '2', _updatedAt: '2026-01-01', headline: null, subheadline: null, imageUrl: 'https://example.com/img2.jpg', image: null },
    ]);
    const { result } = renderHook(() => useSanityHeroSlides());
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.headline).toBe('CMS Headline');
    expect(result.current.slides).toHaveLength(2);
    expect(result.current.slides[0].src).toBe('https://example.com/img1.jpg');
  });

  it('uses headline from first slide, falls back to static if missing', async () => {
    sanityClient.fetch.mockResolvedValue([
      { _id: '1', _updatedAt: '2026-01-01', headline: null, subheadline: null, imageUrl: 'https://example.com/img.jpg', image: null },
    ]);
    const { result } = renderHook(() => useSanityHeroSlides());
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.headline).toBe('Fallback Headline');
  });

  it('caches the fetched hero in localStorage', async () => {
    sanityClient.fetch.mockResolvedValue([
      { _id: '1', _updatedAt: '2026-01-01', headline: 'Cached Hero', subheadline: 'Sub', imageUrl: 'https://example.com/img.jpg', image: null },
    ]);
    const { result } = renderHook(() => useSanityHeroSlides());
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    const cached = JSON.parse(localStorage.getItem('sanity-hero-slides'));
    expect(cached).not.toBeNull();
    expect(cached.headline).toBe('Cached Hero');
  });

  it('serves cached hero immediately without showing isLoading', () => {
    const cachedHero = { headline: 'Pre-cached', subheadline: 'Sub', slides: [{ src: '/a.jpg', alt: 'A' }] };
    localStorage.setItem('sanity-hero-slides', JSON.stringify(cachedHero));
    sanityClient.fetch.mockResolvedValue([]);
    const { result } = renderHook(() => useSanityHeroSlides());
    // Should be populated from cache immediately (synchronous)
    expect(result.current.headline).toBe('Pre-cached');
    expect(result.current.isLoading).toBe(false);
  });

  it('sets error state and keeps current hero when fetch fails', async () => {
    const networkError = new Error('Network Error');
    sanityClient.fetch.mockRejectedValue(networkError);
    const { result } = renderHook(() => useSanityHeroSlides());
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.error).toBe(networkError);
    // Hero data should still be the fallback, not undefined
    expect(result.current.headline).toBe('Fallback Headline');
  });

  it('filters out slides that have no resolvable image src', async () => {
    sanityClient.fetch.mockResolvedValue([
      { _id: '1', _updatedAt: '2026-01-01', headline: 'Test', subheadline: '', imageUrl: null, image: null },
      { _id: '2', _updatedAt: '2026-01-01', headline: null, subheadline: null, imageUrl: 'https://example.com/valid.jpg', image: null },
    ]);
    const { result } = renderHook(() => useSanityHeroSlides());
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    // Slide 1 has no src so it is filtered; only slide 2 survives
    expect(result.current.slides).toHaveLength(1);
    expect(result.current.slides[0].src).toBe('https://example.com/valid.jpg');
  });
});

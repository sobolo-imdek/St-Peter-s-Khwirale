/**
 * Unit tests for useSanityPrincipal
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';

vi.mock('../../../src/lib/sanity', () => ({
  sanityClient: { fetch: vi.fn() },
  urlFor: vi.fn(),
}));

vi.mock('../../../src/data/content', () => ({
  schoolData: {
    hero: { headline: '', subheadline: '', images: [] },
    principal: {
      name: 'Default Principal',
      title: 'Principal',
      message: 'Default message',
      image: '/default-principal.jpg',
    },
    name: "St Peter's Khwirale Senior School",
    shortName: 'SPKSS',
    about: { mission: 'Default mission' },
  },
}));

import useSanityPrincipal from '../../../src/hooks/useSanityPrincipal';
import { sanityClient } from '../../../src/lib/sanity';

describe('useSanityPrincipal', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('starts with static schoolData principal', () => {
    sanityClient.fetch.mockResolvedValue(null);
    const { result } = renderHook(() => useSanityPrincipal());
    expect(result.current.principal.name).toBe('Default Principal');
    expect(result.current.loading).toBe(true);
  });

  it('merges CMS principal over static defaults', async () => {
    sanityClient.fetch.mockResolvedValue({
      name: 'Dr. Jane Doe',
      title: 'Head Teacher',
      message: 'Welcome to our school.',
      imageUrl: 'https://cdn.sanity.io/img/principal.jpg',
    });
    const { result } = renderHook(() => useSanityPrincipal());
    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.principal.name).toBe('Dr. Jane Doe');
    expect(result.current.principal.title).toBe('Head Teacher');
    expect(result.current.principal.image).toBe('https://cdn.sanity.io/img/principal.jpg');
  });

  it('falls back to static name when CMS returns null name', async () => {
    sanityClient.fetch.mockResolvedValue({
      name: null,
      title: null,
      message: null,
      imageUrl: null,
    });
    const { result } = renderHook(() => useSanityPrincipal());
    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.principal.name).toBe('Default Principal');
  });

  it('caches merged principal in localStorage', async () => {
    sanityClient.fetch.mockResolvedValue({
      name: 'Cached Principal',
      title: 'Director',
      message: 'Welcome.',
      imageUrl: 'https://cdn.sanity.io/img/p.jpg',
    });
    const { result } = renderHook(() => useSanityPrincipal());
    await waitFor(() => expect(result.current.loading).toBe(false));
    const cached = JSON.parse(localStorage.getItem('sanity_principal'));
    expect(cached.name).toBe('Cached Principal');
  });

  it('reads from localStorage cache on mount', () => {
    localStorage.setItem('sanity_principal', JSON.stringify({
      name: 'Cached Person', title: 'Head', message: 'Hi', image: '/p.jpg',
    }));
    sanityClient.fetch.mockResolvedValue(null);
    const { result } = renderHook(() => useSanityPrincipal());
    expect(result.current.principal.name).toBe('Cached Person');
  });

  it('sets loading false on network error and keeps static defaults', async () => {
    sanityClient.fetch.mockRejectedValue(new Error('API error'));
    const { result } = renderHook(() => useSanityPrincipal());
    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.principal.name).toBe('Default Principal');
  });

  it('sets loading false when Sanity returns null (no principal document)', async () => {
    sanityClient.fetch.mockResolvedValue(null);
    const { result } = renderHook(() => useSanityPrincipal());
    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.principal.name).toBe('Default Principal');
  });
});

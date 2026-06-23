/**
 * Unit tests for the SEO component
 *
 * Uses HelmetProvider wrapper since SEO.jsx relies on react-helmet-async.
 */
import { describe, it, expect, vi } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from '../../../src/components/SEO';

vi.mock('../../../src/data/content', () => ({
  schoolData: {
    name: "St Peter's Khwirale Senior School",
    shortName: 'SPKSS',
    about: { mission: 'Nurturing excellence in every student.' },
  },
}));

function renderSEO(props = {}) {
  return render(
    <HelmetProvider>
      <SEO {...props} />
    </HelmetProvider>
  );
}

describe('SEO component', () => {
  it('renders the default school title when no title prop is passed', async () => {
    renderSEO();
    await waitFor(() => {
      expect(document.title).toBe("St Peter's Khwirale Senior School");
    });
  });

  it('renders a compound title "{title} | SPKSS" when title prop is provided', async () => {
    renderSEO({ title: 'About Us' });
    await waitFor(() => {
      expect(document.title).toBe('About Us | SPKSS');
    });
  });

  it('sets meta description to school mission when no description prop is passed', async () => {
    renderSEO();
    await waitFor(() => {
      const meta = document.querySelector('meta[name="description"]');
      expect(meta?.getAttribute('content')).toBe('Nurturing excellence in every student.');
    });
  });

  it('uses provided description prop for meta description', async () => {
    renderSEO({ description: 'Custom page description.' });
    await waitFor(() => {
      const meta = document.querySelector('meta[name="description"]');
      expect(meta?.getAttribute('content')).toBe('Custom page description.');
    });
  });

  it('sets og:title meta tag', async () => {
    renderSEO({ title: 'Gallery' });
    await waitFor(() => {
      const ogTitle = document.querySelector('meta[property="og:title"]');
      expect(ogTitle?.getAttribute('content')).toContain('Gallery');
    });
  });

  it('sets og:description meta tag', async () => {
    renderSEO({ description: 'View our gallery.' });
    await waitFor(() => {
      const ogDesc = document.querySelector('meta[property="og:description"]');
      expect(ogDesc?.getAttribute('content')).toBe('View our gallery.');
    });
  });

  it('sets twitter:card to summary_large_image', async () => {
    renderSEO();
    await waitFor(() => {
      const twitterCard = document.querySelector('meta[name="twitter:card"]');
      expect(twitterCard?.getAttribute('content')).toBe('summary_large_image');
    });
  });

  it('sets og:type to website by default', async () => {
    renderSEO();
    await waitFor(() => {
      const ogType = document.querySelector('meta[property="og:type"]');
      expect(ogType?.getAttribute('content')).toBe('website');
    });
  });

  it('sets og:type to a custom value when type prop is provided', async () => {
    renderSEO({ type: 'article' });
    await waitFor(() => {
      const ogType = document.querySelector('meta[property="og:type"]');
      expect(ogType?.getAttribute('content')).toBe('article');
    });
  });

  it('uses a custom image when image prop is provided', async () => {
    renderSEO({ image: 'https://example.com/my-image.jpg' });
    await waitFor(() => {
      const ogImage = document.querySelector('meta[property="og:image"]');
      expect(ogImage?.getAttribute('content')).toBe('https://example.com/my-image.jpg');
    });
  });

  it('falls back to default image when no image prop is provided', async () => {
    renderSEO();
    await waitFor(() => {
      const ogImage = document.querySelector('meta[property="og:image"]');
      expect(ogImage?.getAttribute('content')).toBeTruthy();
    });
  });
});

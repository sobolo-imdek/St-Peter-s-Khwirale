/**
 * Unit tests for HeroCarousel component
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import HeroCarousel from '../../../src/components/HeroCarousel';

const images = [
  { src: '/img1.jpg', alt: 'Slide One' },
  { src: '/img2.jpg', alt: 'Slide Two' },
  { src: '/img3.jpg', alt: 'Slide Three' },
];

describe('HeroCarousel', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders nothing when images array is empty', () => {
    const { container } = render(<HeroCarousel images={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it('renders only the active slide image', () => {
    render(<HeroCarousel images={images} autoSlide={false} />);
    const imgs = screen.getAllByRole('img');
    expect(imgs).toHaveLength(1);
    expect(imgs[0]).toHaveAttribute('alt', 'Slide One');
    expect(imgs[0]).toHaveAttribute('src', '/img1.jpg');
  });

  it('renders dot indicators for each slide', () => {
    render(<HeroCarousel images={images} autoSlide={false} />);
    const dotButtons = screen.getAllByRole('button', { name: /go to slide/i });
    expect(dotButtons).toHaveLength(3);
  });

  it('renders Previous Slide and Next Slide buttons', () => {
    render(<HeroCarousel images={images} autoSlide={false} />);
    expect(screen.getByRole('button', { name: /previous slide/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /next slide/i })).toBeInTheDocument();
  });

  it('active image loads eagerly with high fetch priority', () => {
    render(<HeroCarousel images={images} autoSlide={false} />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('loading', 'eager');
    expect(img).toHaveAttribute('fetchpriority', 'high');
  });

  it('advances to the next slide when Next button is clicked', () => {
    render(<HeroCarousel images={images} autoSlide={false} />);
    fireEvent.click(screen.getByRole('button', { name: /next slide/i }));
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', '/img2.jpg');
    expect(img).toHaveAttribute('alt', 'Slide Two');
  });

  it('goes to the previous slide when Previous button is clicked', () => {
    render(<HeroCarousel images={images} autoSlide={false} />);
    fireEvent.click(screen.getByRole('button', { name: /next slide/i }));
    fireEvent.click(screen.getByRole('button', { name: /previous slide/i }));
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', '/img1.jpg');
  });

  it('wraps around from last slide back to first on Next click', () => {
    render(<HeroCarousel images={images} autoSlide={false} />);
    const next = screen.getByRole('button', { name: /next slide/i });
    fireEvent.click(next);
    fireEvent.click(next);
    fireEvent.click(next);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', '/img1.jpg');
  });

  it('wraps around from first slide to last on Previous click', () => {
    render(<HeroCarousel images={images} autoSlide={false} />);
    fireEvent.click(screen.getByRole('button', { name: /previous slide/i }));
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', '/img3.jpg');
  });

  it('jumps directly to a slide when a dot indicator is clicked', () => {
    render(<HeroCarousel images={images} autoSlide={false} />);
    fireEvent.click(screen.getByRole('button', { name: /go to slide 3/i }));
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', '/img3.jpg');
  });

  it('auto-advances slides on the configured interval', () => {
    render(<HeroCarousel images={images} autoSlide autoSlideInterval={3000} />);
    expect(screen.getByRole('img')).toHaveAttribute('src', '/img1.jpg');

    act(() => vi.advanceTimersByTime(3000));
    expect(screen.getByRole('img')).toHaveAttribute('src', '/img2.jpg');

    act(() => vi.advanceTimersByTime(3000));
    expect(screen.getByRole('img')).toHaveAttribute('src', '/img3.jpg');
  });

  it('does not auto-advance when autoSlide is false', () => {
    render(<HeroCarousel images={images} autoSlide={false} autoSlideInterval={1000} />);
    act(() => vi.advanceTimersByTime(5000));
    expect(screen.getByRole('img')).toHaveAttribute('src', '/img1.jpg');
  });

  it('does not auto-advance when only one image is provided', () => {
    render(<HeroCarousel images={[images[0]]} autoSlide autoSlideInterval={1000} />);
    act(() => vi.advanceTimersByTime(3000));
    expect(screen.getByRole('img')).toHaveAttribute('src', '/img1.jpg');
  });

  it('accepts plain string image sources', () => {
    render(<HeroCarousel images={['/simple.jpg', '/simple2.jpg']} autoSlide={false} />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', '/simple.jpg');
    expect(img).toHaveAttribute('alt', 'Hero 1');
  });
});

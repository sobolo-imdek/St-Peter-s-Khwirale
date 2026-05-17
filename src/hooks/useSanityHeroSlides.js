import { useEffect, useState } from "react";
import { sanityClient, urlFor } from "../lib/sanity";
import { schoolData } from "../data/content";

const fallbackHero = {
  headline: schoolData.hero.headline,
  subheadline: schoolData.hero.subheadline,
  slides: schoolData.hero.images,
};

const heroSlidesQuery = `*[_type == "heroSlide" && isActive != false] | order(order asc, _updatedAt desc){
  _id,
  _updatedAt,
  headline,
  subheadline,
  imageUrl,
  image
}`;

function getSlideImage(slide) {
  if (slide.image?.asset) {
    return urlFor(slide.image).width(1800).auto("format").url();
  }

  return slide.imageUrl;
}

function mapSlides(cmsSlides) {
  const slides = cmsSlides
    .map((slide, index) => ({
      src: getSlideImage(slide),
      alt: slide.image?.alt || `St Peter's Khwirale hero slide ${index + 1}`,
    }))
    .filter((slide) => slide.src);

  if (slides.length === 0) return fallbackHero;

  const primarySlide = cmsSlides[0] || {};

  return {
    headline: primarySlide.headline || fallbackHero.headline,
    subheadline: primarySlide.subheadline || fallbackHero.subheadline,
    slides,
  };
}

function readCachedHero() {
  if (typeof window === "undefined") return null;

  try {
    const value = window.localStorage.getItem("sanity-hero-slides");
    return value ? JSON.parse(value) : null;
  } catch {
    return null;
  }
}

function writeCachedHero(hero) {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem("sanity-hero-slides", JSON.stringify(hero));
  } catch {
    // A storage issue should not block the homepage.
  }
}

export default function useSanityHeroSlides() {
  const [state, setState] = useState(() => {
    const cachedHero = readCachedHero();

    return {
      hero: cachedHero || fallbackHero,
      isLoading: !cachedHero,
      error: null,
    };
  });

  useEffect(() => {
    let cancelled = false;

    sanityClient
      .fetch(heroSlidesQuery)
      .then((cmsSlides) => {
        if (cancelled) return;

        const hero = Array.isArray(cmsSlides) && cmsSlides.length > 0
          ? mapSlides(cmsSlides)
          : fallbackHero;

        writeCachedHero(hero);
        setState({ hero, isLoading: false, error: null });
      })
      .catch((error) => {
        if (!cancelled) {
          setState((current) => ({
            hero: current.hero || fallbackHero,
            isLoading: false,
            error,
          }));
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return {
    ...state.hero,
    isLoading: state.isLoading,
    error: state.error,
  };
}

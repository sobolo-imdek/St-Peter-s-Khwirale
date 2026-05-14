import { useEffect, useMemo, useState } from "react";
import { sanityClient } from "../lib/sanity";
import { pageDefaults } from "../data/pageDefaults";

const pageQuery = `*[_type == "page" && slug.current == $slug] | order(_updatedAt desc)[0]{
  _updatedAt,
  title,
  seoDescription,
  body
}`;

const pageUpdatedAtQuery = `*[_type == "page" && slug.current == $slug] | order(_updatedAt desc)[0]._updatedAt`;

const hasPortableText = (body) => Array.isArray(body) && body.length > 0;

function getCacheKey(slug) {
  return `sanity-page:${slug}`;
}

function readCachedPage(slug) {
  if (typeof window === "undefined") return null;

  try {
    const value = window.localStorage.getItem(getCacheKey(slug));
    return value ? JSON.parse(value) : null;
  } catch {
    return null;
  }
}

function writeCachedPage(slug, page) {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(getCacheKey(slug), JSON.stringify(page));
  } catch {
    // A full localStorage should not prevent the page from rendering.
  }
}

function mergePage(fallback, cmsPage) {
  if (!cmsPage) return fallback;

  return {
    ...fallback,
    ...cmsPage,
    title: cmsPage.title || fallback.title,
    seoDescription: cmsPage.seoDescription || fallback.seoDescription,
    body: hasPortableText(cmsPage.body) ? cmsPage.body : fallback.body,
  };
}

export default function useSanityPage(slug) {
  const fallback = useMemo(() => pageDefaults[slug] || {}, [slug]);
  const [state, setState] = useState(() => {
    const cachedPage = readCachedPage(slug);

    return {
      page: cachedPage || fallback,
      isLoading: !cachedPage,
      error: null,
      isFromCache: Boolean(cachedPage),
    };
  });

  useEffect(() => {
    let cancelled = false;
    const cachedPage = readCachedPage(slug);

    const loadPage = () =>
      sanityClient.fetch(pageQuery, { slug }).then((cmsPage) => {
        if (cancelled) return;

        const nextPage = mergePage(fallback, cmsPage);

        if (cmsPage) {
          writeCachedPage(slug, nextPage);
        }

        setState({
          page: nextPage,
          isLoading: false,
          error: cmsPage ? null : new Error(`Page "${slug}" was not found in Sanity.`),
          isFromCache: false,
        });
      });

    if (cachedPage) {
      sanityClient
        .fetch(pageUpdatedAtQuery, { slug })
        .then((updatedAt) => {
          if (cancelled) return;

          if (!updatedAt || updatedAt === cachedPage._updatedAt) {
            return;
          }

          setState((current) => ({
            ...current,
            isLoading: true,
          }));

          return loadPage();
        })
        .catch((error) => {
          if (!cancelled) {
            setState((current) => ({
              ...current,
              isLoading: false,
              error,
            }));
          }
        });
    } else {
      loadPage().catch((error) => {
        if (!cancelled) {
          setState({
            page: fallback,
            isLoading: false,
            error,
            isFromCache: false,
          });
        }
      });
    }

    return () => {
      cancelled = true;
    };
  }, [fallback, slug]);

  return {
    ...state.page,
    isLoading: state.isLoading,
    error: state.error,
    isFromCache: state.isFromCache,
  };
}

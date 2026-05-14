import { useEffect, useMemo, useState } from "react";
import { sanityClient } from "../lib/sanity";
import { pageDefaults } from "../data/pageDefaults";

const pageQuery = `*[_type == "page" && slug.current == $slug] | order(_updatedAt desc)[0]{
  _updatedAt,
  title,
  seoDescription,
  body
}`;

const hasPortableText = (body) => Array.isArray(body) && body.length > 0;

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
  const [state, setState] = useState({
    page: fallback,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;

    sanityClient
      .fetch(pageQuery, { slug })
      .then((cmsPage) => {
        if (cancelled) return;

        const nextPage = mergePage(fallback, cmsPage);
        setState({
          page: nextPage,
          isLoading: false,
          error: cmsPage ? null : new Error(`Page "${slug}" was not found in Sanity.`),
        });
      })
      .catch((error) => {
        if (!cancelled) {
          setState({
            page: fallback,
            isLoading: false,
            error,
          });
        }
      });

    return () => {
      cancelled = true;
    };
  }, [fallback, slug]);

  return {
    ...state.page,
    isLoading: state.isLoading,
    error: state.error,
  };
}

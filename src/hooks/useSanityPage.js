import { useEffect, useMemo, useState } from "react";
import { sanityClient } from "../lib/sanity";
import { pageDefaults } from "../data/pageDefaults";

const pageQuery = `*[_type == "page" && slug.current == $slug] | order(_updatedAt desc)[0]{
  title,
  seoDescription,
  body
}`;

const hasPortableText = (body) => Array.isArray(body) && body.length > 0;

export default function useSanityPage(slug) {
  const fallback = useMemo(() => pageDefaults[slug] || {}, [slug]);
  const [page, setPage] = useState(fallback);

  useEffect(() => {
    let cancelled = false;

    sanityClient
      .fetch(pageQuery, { slug })
      .then((cmsPage) => {
        if (cancelled || !cmsPage) return;

        setPage({
          ...fallback,
          ...cmsPage,
          title: cmsPage.title || fallback.title,
          seoDescription: cmsPage.seoDescription || fallback.seoDescription,
          body: hasPortableText(cmsPage.body) ? cmsPage.body : fallback.body,
        });
      })
      .catch(() => {
        if (!cancelled) setPage(fallback);
      });

    return () => {
      cancelled = true;
    };
  }, [fallback, slug]);

  return page;
}

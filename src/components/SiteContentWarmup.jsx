import { useEffect } from "react";
import { sanityClient } from "../lib/sanity";

const pagesQuery = `*[_type == "page"]{
  _updatedAt,
  title,
  seoDescription,
  body,
  "slug": slug.current
}`;

const sectionsQuery = `*[_type == "pageSection"]{
  _updatedAt,
  title,
  body,
  pageSlug,
  sectionKey
}`;

function store(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Warmup is an optimization only.
  }
}

export default function SiteContentWarmup() {
  useEffect(() => {
    sanityClient
      .fetch(pagesQuery)
      .then((pages) => {
        pages.forEach((page) => {
          if (page.slug) store(`sanity-page:${page.slug}`, page);
        });
      })
      .catch(() => {});

    sanityClient
      .fetch(sectionsQuery)
      .then((sections) => {
        sections.forEach((section) => {
          if (section.pageSlug && section.sectionKey) {
            store(`sanity-section:${section.pageSlug}:${section.sectionKey}`, section);
          }
        });
      })
      .catch(() => {});
  }, []);

  return null;
}

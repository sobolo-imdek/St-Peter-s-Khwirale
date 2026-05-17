import { useEffect, useMemo, useState } from "react";
import { sanityClient } from "../lib/sanity";
import { sectionDefaults } from "../data/sectionDefaults";

const sectionQuery = `*[_type == "pageSection" && pageSlug == $pageSlug && sectionKey == $sectionKey] | order(_updatedAt desc)[0]{
  _updatedAt,
  title,
  body
}`;

const hasPortableText = (body) => Array.isArray(body) && body.length > 0;

function getCacheKey(pageSlug, sectionKey) {
  return `sanity-section:${pageSlug}:${sectionKey}`;
}

function readCachedSection(pageSlug, sectionKey) {
  if (typeof window === "undefined") return null;

  try {
    const value = window.localStorage.getItem(getCacheKey(pageSlug, sectionKey));
    return value ? JSON.parse(value) : null;
  } catch {
    return null;
  }
}

function writeCachedSection(pageSlug, sectionKey, section) {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(getCacheKey(pageSlug, sectionKey), JSON.stringify(section));
  } catch {
    // Cache failures should not block rendering.
  }
}

function mergeSection(fallback, cmsSection) {
  if (!cmsSection) return fallback;

  return {
    ...fallback,
    ...cmsSection,
    title: cmsSection.title || fallback.title,
    body: hasPortableText(cmsSection.body) ? cmsSection.body : fallback.body,
  };
}

export default function useSanitySection(pageSlug, sectionKey) {
  const fallback = useMemo(
    () => sectionDefaults[`${pageSlug}:${sectionKey}`] || { title: "", body: [] },
    [pageSlug, sectionKey]
  );
  const [section, setSection] = useState(() => readCachedSection(pageSlug, sectionKey) || fallback);

  useEffect(() => {
    let cancelled = false;

    sanityClient
      .fetch(sectionQuery, { pageSlug, sectionKey })
      .then((cmsSection) => {
        if (cancelled) return;

        const nextSection = mergeSection(fallback, cmsSection);

        if (cmsSection) {
          writeCachedSection(pageSlug, sectionKey, nextSection);
        }

        setSection(nextSection);
      })
      .catch(() => {
        if (!readCachedSection(pageSlug, sectionKey) && !cancelled) {
          setSection(fallback);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [fallback, pageSlug, sectionKey]);

  return section;
}

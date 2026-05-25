import { createClient } from "@sanity/client";

const token = process.env.SANITY_AUTH_TOKEN;

if (!token) {
  console.error("Missing SANITY_AUTH_TOKEN. Create a write token in Sanity and set it before running this script.");
  process.exit(1);
}

const client = createClient({
  projectId: "o9prhsvp",
  dataset: "production",
  apiVersion: "2026-05-13",
  useCdn: false,
  token,
});

const targetSectionBySlug = {
  about: "overview",
  academics: "curriculum",
  cbe: "pathways",
  updates: "events",
  contact: "contact",
  gallery: "gallery",
};

const pages = await client.fetch(`*[_type == "page" && slug.current != "home" && defined(body) && count(body) > 0]{
  _id,
  title,
  body,
  "slug": slug.current
}`);

for (const page of pages) {
  const sectionKey = targetSectionBySlug[page.slug];

  if (!sectionKey) {
    console.warn(`Skipping page "${page.slug}" because it has no migration target section.`);
    continue;
  }

  const sectionId = `page-section-${page.slug}-${sectionKey}`;

  await client
    .transaction()
    .createIfNotExists({
      _id: sectionId,
      _type: "pageSection",
      title: page.title,
      pageSlug: page.slug,
      sectionKey,
      body: page.body,
    })
    .patch(sectionId, (patch) =>
      patch.set({
        title: page.title,
        pageSlug: page.slug,
        sectionKey,
        body: page.body,
      })
    )
    .patch(page._id, (patch) => patch.unset(["body"]))
    .commit();

  console.log(`Moved ${page.slug}.body to ${page.slug}:${sectionKey}`);
}

console.log(`Done. Migrated ${pages.length} page document(s).`);

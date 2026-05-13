import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "o9prhsvp",
  dataset: "production",
  apiVersion: "2026-05-13",
  useCdn: false,
});

const pages = await client.fetch(
  `*[_type == "page"]{
    _id,
    title,
    "slug": slug.current,
    _updatedAt
  } | order(slug asc, _updatedAt desc)`
);

console.log(JSON.stringify(pages, null, 2));

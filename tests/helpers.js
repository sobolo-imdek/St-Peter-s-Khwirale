export const routes = [
  { path: "/", heading: /st peter|khwirale|senior school/i },
  { path: "/about", heading: /about|overview|history/i },
  { path: "/academics", heading: /academic|curriculum|departments/i },
  { path: "/cbe", heading: /cbe|competency|pathways/i },
  { path: "/updates", heading: /updates|events|news/i },
  { path: "/contact", heading: /contact|get in touch|send a message/i },
  { path: "/gallery", heading: /gallery|school life|photos/i },
];

export async function mockSanityApi(page) {
  await page.route("https://*.sanity.io/**", async (route) => {
    const url = new URL(route.request().url());
    const query = url.searchParams.get("query") || "";

    let result = null;

    if (query.includes('"events"')) {
      result = {
        events: [],
        news: [],
        tenders: [],
        careers: [],
      };
    } else if (
      query.includes('_type == "page"') &&
      !query.includes("$slug") &&
      !query.endsWith("._updatedAt")
    ) {
      result = [];
    } else if (
      query.includes('_type == "pageSection"') &&
      !query.includes("$sectionKey")
    ) {
      result = [];
    } else if (query.includes('_type == "heroSlide"')) {
      result = [];
    }

    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ result }),
    });
  });
}

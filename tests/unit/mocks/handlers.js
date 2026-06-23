import { http, HttpResponse } from 'msw';

const SANITY_URL = 'https://o9prhsvp.api.sanity.io';
const SANITY_CDN = 'https://o9prhsvp.apicdn.sanity.io';

/**
 * Default handlers — return real-shaped but empty data so components
 * fall back to their built-in static defaults.  Individual tests can
 * call server.use(...) to override specific endpoints.
 */
export const handlers = [
  // Catch all Sanity GROQ queries
  http.get(`${SANITY_URL}/v*/:dataset/data/query/:dataset2`, ({ request }) => {
    const url = new URL(request.url);
    const query = url.searchParams.get('query') || '';
    return buildSanityResponse(query);
  }),

  http.get(`${SANITY_CDN}/v*/:dataset/data/query/:dataset2`, ({ request }) => {
    const url = new URL(request.url);
    const query = url.searchParams.get('query') || '';
    return buildSanityResponse(query);
  }),

  // Broad wildcard fallback for any Sanity domain
  http.get('https://*.api.sanity.io/*', ({ request }) => {
    const url = new URL(request.url);
    const query = url.searchParams.get('query') || '';
    return buildSanityResponse(query);
  }),

  http.get('https://*.apicdn.sanity.io/*', ({ request }) => {
    const url = new URL(request.url);
    const query = url.searchParams.get('query') || '';
    return buildSanityResponse(query);
  }),
];

function buildSanityResponse(query) {
  let result = null;

  if (query.includes('"events"')) {
    result = { events: [], news: [], tenders: [], careers: [] };
  } else if (query.includes('heroSlide')) {
    result = [];
  } else if (query.includes('"principal"') || query.includes("_type == \"principal\"")) {
    result = null;
  } else if (query.includes('feeStructure')) {
    result = null;
  } else if (query.includes('pageSection')) {
    result = null;
  } else if (query.includes('_type == "page"')) {
    result = null;
  }

  return HttpResponse.json({ result, ms: 1, query });
}

/* global __ENV */
import http from 'k6/http';
import { check, sleep } from 'k6';

// Read target URL from environment or default to localhost
const BASE_URL = __ENV.BASE_URL || 'http://localhost:4173';

export const options = {
  stages: [
    { duration: '30s', target: 20 }, // Ramp-up to 20 users over 30 seconds
    { duration: '1m', target: 20 },  // Stay at 20 users for 1 minute
    { duration: '30s', target: 0 },  // Ramp-down to 0 users
  ],
  thresholds: {
    // 95% of requests must complete below 500ms
    http_req_duration: ['p(95)<500'],
    // Error rate must be less than 1%
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  // Array of key pages to test
  const endpoints = [
    '/',
    '/about',
    '/academics',
    '/updates',
    '/contact',
  ];

  // Pick a random endpoint for the virtual user to visit
  const endpoint = endpoints[Math.floor(Math.random() * endpoints.length)];
  
  const res = http.get(`${BASE_URL}${endpoint}`);

  // Validate the response
  check(res, {
    'status is 200': (r) => r.status === 200,
    'page has loaded': (r) => r.body && r.body.length > 0,
  });

  // Wait 1 to 3 seconds before next request (simulating user read time)
  sleep(Math.random() * 2 + 1);
}

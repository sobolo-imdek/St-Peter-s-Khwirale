/* global __ENV */
import http from 'k6/http';
import { check, sleep } from 'k6';

const BASE_URL = __ENV.BASE_URL || 'http://localhost:4173';

export const options = {
  stages: [
    { duration: '10s', target: 10 },  // Normal traffic
    { duration: '1m', target: 10 },
    { duration: '10s', target: 500 }, // SPIKE! 500 users in 10 seconds
    { duration: '3m', target: 500 },  // Hold the spike
    { duration: '10s', target: 10 },  // Drop back to normal
    { duration: '3m', target: 10 },   // Normal traffic recovery
    { duration: '10s', target: 0 },
  ],
};

export default function () {
  const endpoints = ['/', '/updates']; // Usually spikes hit the homepage or news
  const endpoint = endpoints[Math.floor(Math.random() * endpoints.length)];
  
  const res = http.get(`${BASE_URL}${endpoint}`);

  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(1);
}

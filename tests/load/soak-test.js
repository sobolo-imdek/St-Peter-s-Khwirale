/* global __ENV */
import http from 'k6/http';
import { check, sleep } from 'k6';

const BASE_URL = __ENV.BASE_URL || 'http://localhost:4173';

export const options = {
  stages: [
    { duration: '2m', target: 50 },  // Ramp up to 50 users
    { duration: '1h', target: 50 },  // Stay at 50 users for 1 entire hour
    { duration: '2m', target: 0 },   // Ramp down to 0 users
  ],
};

export default function () {
  const endpoints = ['/', '/updates', '/academics', '/contact'];
  const endpoint = endpoints[Math.floor(Math.random() * endpoints.length)];
  
  const res = http.get(`${BASE_URL}${endpoint}`);

  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(Math.random() * 3 + 1);
}

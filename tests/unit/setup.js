import '@testing-library/jest-dom';
import { afterEach, afterAll, beforeAll, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import { server } from './mocks/server.js';

// Start MSW server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }));

// Reset any request handlers added during tests
afterEach(() => {
  server.resetHandlers();
  cleanup();
  // Clear localStorage between tests
  localStorage.clear();
});

// Stop the server when all tests are done
afterAll(() => server.close());

// Silence console.error noise from expected failures in tests
vi.spyOn(console, 'error').mockImplementation((msg) => {
  if (
    typeof msg === 'string' &&
    (msg.includes('Warning:') || msg.includes('Error fetching') || msg.includes('Error parsing'))
  )
    return;
  console.warn('[console.error suppressed in test]', msg);
});

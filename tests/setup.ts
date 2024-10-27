import React from 'react';
import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

// This is needed for the tests to work, without importing React in every test file
globalThis.React = React;

// NOTE: This is not working yet
vi.mock('zustand');

// Cleanup after each test
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

import { isEmptyArray } from '../../src/utils/arrayHelpers';
import { describe, it, expect } from 'vitest';

describe('utils', () => {
  it('returns true for empty array', () => {
    expect(isEmptyArray([])).toBe(true);
  });

  it('returns false for non-empty array', () => {
    expect(isEmptyArray([1, 2, 3])).toBe(false);
  });
});

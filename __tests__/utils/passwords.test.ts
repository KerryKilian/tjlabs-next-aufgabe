import { describe, it, expect } from '@jest/globals';
import { generatePassword } from '@/utils/password';

describe('generatePassword', () => {
  it('should return a string of length 6', () => {
    const pw = generatePassword();
    expect(typeof pw).toBe('string');
    expect(pw).toHaveLength(6);
  });

  it('should only contain digits', () => {
    const pw = generatePassword();
    expect(pw).toMatch(/^[0-9]{6}$/);
  });

  it('should have all unique digits', () => {
    const pw = generatePassword();
    const unique = new Set(pw.split(''));
    expect(unique.size).toBe(6);
  });

  it('should be random on multiple calls', () => {
    const results = new Set();
    for (let i = 0; i < 20; i++) {
      results.add(generatePassword());
    }
    expect(results.size).toBeGreaterThan(1);
  });
});

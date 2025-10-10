import test from 'node:test';
import assert from 'node:assert/strict';
import { isValidEmail, sanitizeEmail } from '../src/app/utils/email-validation.js';

test('sanitizeEmail trims whitespace and lowercases safely', () => {
  const result = sanitizeEmail('  Alice.Example@Example.COM  ');
  assert.equal(result, 'alice.example@example.com');
});

test('sanitizeEmail handles non-string input gracefully', () => {
  assert.equal(sanitizeEmail(null), '');
  assert.equal(sanitizeEmail(undefined), '');
});

test('isValidEmail accepts common valid addresses', () => {
  assert.equal(isValidEmail('user+category@example.co.uk'), true);
  assert.equal(isValidEmail('USER@EXAMPLE.COM'), true);
});

test('isValidEmail rejects malformed addresses', () => {
  assert.equal(isValidEmail('not-an-email'), false);
  assert.equal(isValidEmail('user@@example.com'), false);
  assert.equal(isValidEmail('user@example'), false);
  assert.equal(isValidEmail('user@-example.com'), false);
});

test('isValidEmail enforces maximum length', () => {
  const local = 'a'.repeat(64);
  const domain = `${'b'.repeat(63)}.${'c'.repeat(63)}.${'d'.repeat(63)}.${'e'.repeat(60)}`;
  const longEmail = `${local}@${domain}`;
  assert.equal(longEmail.length > 254, true);
  assert.equal(isValidEmail(longEmail), false);
});

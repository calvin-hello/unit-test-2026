const palindromeChecker = require('./palindrome');

test('should return true for a palindrome', () => {
  expect(palindromeChecker('racecar')).toBe(true);
});

test('should return false for non-palindrome', () => {
  expect(palindromeChecker('hello')).toBe(false);
});

test('should ignore spaces', () => {
  expect(palindromeChecker('nurses run')).toBe(true);
});
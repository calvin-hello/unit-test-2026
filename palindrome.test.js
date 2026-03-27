const {palindromeChecker} = require("./palindrome")

test('should return true for a palindrome', () => {
  expect(isPalindrome('racecar')).toBe(true);
});

test('should return false for non-palindrome', () => {
  expect(isPalindrome('hello')).toBe(false);
});

test('should ignore spaces', () => {
  expect(isPalindrome('nurses run')).toBe(true);
});

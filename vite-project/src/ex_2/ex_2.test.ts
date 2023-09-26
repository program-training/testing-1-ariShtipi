import { isPalindrome } from "./ex_2";

describe("isPalindrome", () => {
  test("valid palindrome", () => {
    // Arrange
    const str = "aba";
    // Act
    const result = isPalindrome(str);
    // Assert
    expect(result).toBeTruthy();
  });

  test("invalid palindrome", () => {
    // Arrange
    const str = "hello";
    // Act and Assert
    expect(() => isPalindrome(str)).toThrowError("Input is not a palindrome");
  });
});

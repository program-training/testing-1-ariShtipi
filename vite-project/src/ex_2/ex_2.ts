export function isPalindrome(inputString: string) {
  const reversedString = inputString.split("").reverse().join("");
  if (inputString !== reversedString) {
    throw new Error("Input is not a palindrome");
  }
  return inputString === reversedString;
}

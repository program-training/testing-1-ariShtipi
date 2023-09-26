import { isFibonacciArray, nextFibonacciNumber } from "./ex_7";

describe("isFibonacciArray", () => {
  test("valid Fibonacci sequence", () => {
    // Arrange
    const fibonacciArray = [0, 1, 1, 2, 3, 5, 8];
    // Act
    const result = isFibonacciArray(fibonacciArray);
    // Assert
    expect(result).toBe(true);
  });

  test("invalid Fibonacci sequence", () => {
    // Arrange
    const nonFibonacciArray = [0, 1, 1, 2, 12];
    // Act and Assert
    expect(() => isFibonacciArray(nonFibonacciArray)).toThrowError(
      "Input array  it's not a Fibonacci sequence."
    );
  });

  test("input array with less than 3 numbers", () => {
    // Arrange
    const shortArray = [0, 1];
    // Act and Assert
    expect(() => isFibonacciArray(shortArray)).toThrowError(
      "Input array must have at least 3 numbers to check if it's a Fibonacci sequence."
    );
  });
});

describe("nextFibonacciNumber", () => {
  test("valid Fibonacci sequence", () => {
    // Arrange
    const fibonacciArray = [0, 1, 1, 2, 3, 5, 8];
    // Act
    const result = nextFibonacciNumber(fibonacciArray);
    // Assert
    expect(result).toBe(13);
    expect(fibonacciArray).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  test("invalid Fibonacci sequence", () => {
    // Arrange
    const nonFibonacciArray = [1, 2, 4, 8, 16];
    // Act and Assert
    expect(() => nextFibonacciNumber(nonFibonacciArray)).toThrowError(
      "Input array  it's not a Fibonacci sequence."
    );
  });

  test("input array with less than 3 numbers", () => {
    // Arrange
    const shortArray = [0, 1];
    // Act and Assert
    expect(() => nextFibonacciNumber(shortArray)).toThrowError(
      "Input array must have at least 3 numbers to check if it's a Fibonacci sequence."
    );
  });
});

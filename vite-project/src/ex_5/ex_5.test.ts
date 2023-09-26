import { sumArray } from "./ex_5";

describe("sum array", () => {
  test("sum of positive numbers", () => {
    // Arrange
    const arr = [1, 2, 3];
    // Act
    const result = sumArray(arr);
    // Assert
    expect(result).toEqual(6);
  });

  test("check if number 2 is in the array", () => {
    // Arrange
    const arr = [1, 2, 3];
    const numberToCheck = 2;

    // Act
    const included = arr.includes(numberToCheck);

    // Assert
    expect(included).toBe(true);
  });

  test("check if sum is greater than 5", () => {
    // Arrange
    const arr = [1, 2, 3];

    // Act
    const result = sumArray(arr);

    // Assert
    expect(result).toBeGreaterThan(5);
  });
});

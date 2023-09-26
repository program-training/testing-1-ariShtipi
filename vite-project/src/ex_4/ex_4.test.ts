import { sqrt } from "./ex_4";

describe("sqrt number", () => {
  test("calculate the square root of a positive number", () => {
    // Arrange
    const number = 25;
    // Act
    const result = sqrt(number);
    // Assert
    expect(result).toBe(5);
  });

  test("calculate the square root of a negative number", () => {
    // Arrange
    const number = -2;
    // Act and Assert
    expect(() => sqrt(number)).toThrowError(
      "Cannot calculate the square root of a negative number"
    );
  });
});

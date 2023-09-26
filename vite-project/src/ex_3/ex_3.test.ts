import { sortArray } from "./ex_3";

describe("sort", () => {
  test("sorted array", () => {
    // Arrange
    const arr = [3, 2, 1];
    // Act
    const result = sortArray(arr);
    // Assert
    expect(result).toEqual([1, 2, 3]);
  });
});

export function sqrt(num: number): number {
    if (num < 0) {
      throw new Error("Cannot calculate the square root of a negative number.");
    }
    return Math.sqrt(num);
  }
  
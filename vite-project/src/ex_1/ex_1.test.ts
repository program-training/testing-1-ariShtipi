import { stringLength } from "./ex_1";

describe("the string length", () => {
  test("length", () => {

    const str = "ari";

    const result = stringLength(str);

    expect(result).toBe(3);
  });
});

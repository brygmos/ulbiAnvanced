import { classNames } from "./classNames";

describe("classNames", () => {
  test("test", () => {
    expect(classNames("abc", {}, [])).toBe("abc");
  });
});

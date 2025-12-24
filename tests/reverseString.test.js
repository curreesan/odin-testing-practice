import reverseString from "../src/reverseString";

test("reverses a string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("handles empty string", () => {
  expect(reverseString("")).toBe("");
});

test("handles single character", () => {
  expect(reverseString("a")).toBe("a");
});

test("handles punctuation and spaces", () => {
  expect(reverseString("hello world!")).toBe("!dlrow olleh");
});

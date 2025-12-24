import capitalize from "../src/capitalize.js";

test("capitalizes the first character of a string", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("handles empty string", () => {
  expect(capitalize("")).toBe("");
});

test("handles already capitalized", () => {
  expect(capitalize("World")).toBe("World");
});

test("handles non-alphabetic first char", () => {
  expect(capitalize("123abc")).toBe("123abc");
});

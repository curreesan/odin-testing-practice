import caesarCipher from "../src/caesarCipher";

test("shifts lowercase letters", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("preserves case", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("handles punctuation and spaces", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("wraps around alphabet", () => {
  expect(caesarCipher("z", 1)).toBe("a");
  expect(caesarCipher("Z", 1)).toBe("A");
});

test("handles negative shift", () => {
  expect(caesarCipher("abc", -1)).toBe("zab");
});

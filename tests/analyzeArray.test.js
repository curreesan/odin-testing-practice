import analyzeArray from "../src/analyzeArray";

test("analyzes array correctly", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("handles single element", () => {
  expect(analyzeArray([5])).toEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 1,
  });
});

test("handles empty array", () => {
  expect(analyzeArray([])).toEqual({
    average: NaN, // or handle as 0/error if preferred
    min: Infinity,
    max: -Infinity,
    length: 0,
  });
});

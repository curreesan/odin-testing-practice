export default function analyzeArray(arr) {
  if (arr.length === 0) {
    return { average: NaN, min: Infinity, max: -Infinity, length: 0 };
  }
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return {
    average: sum / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}

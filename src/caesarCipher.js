function isAlphabet(char) {
  return /[a-zA-Z]/.test(char);
}

function shiftChar(char, shift) {
  const base = char >= "a" ? "a".charCodeAt(0) : "A".charCodeAt(0);
  return String.fromCharCode(
    ((char.charCodeAt(0) - base + shift + 26) % 26) + base
  );
}

export default function caesarCipher(str, shift) {
  return str
    .split("")
    .map((char) => (isAlphabet(char) ? shiftChar(char, shift) : char))
    .join("");
}

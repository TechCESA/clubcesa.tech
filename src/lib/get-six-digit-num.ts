export function getSixDigitNumber() {
  return (Math.floor(Math.random() * 900000) + 100000).toString();
}

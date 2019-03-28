function baseconvert (number, base) {
  return number.toString(base);
}
function isPrime(number) {
  for (var i = 2; i < number / 2; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}
function round(number) {
  return Math.round(number);
}
function tangente (a, b) {
  return Math.atan2(a, b);
}
function arearound (r) {
  return (r * r) Math.PI;
}

function pitagoras (a, b) {
  return Math.sqrt(a * a + b * b);
}

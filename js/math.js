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

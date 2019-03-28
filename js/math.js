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
function  convert(grades) {
  return (grades/180) * Math.PI
}
function solveSecondEquation(a, b, c) {
  var discre = b * b - 4 * a * c;
  if (discre == 0) {
    return {x : -b / 2 * a};
  } else if (discre < 0)  {
    return {x : "Sol compleja"};
  } else {
    return {x1: (-b + Math.sqrt(discre))/(2 * a), x2: (-b - Math.sqrt(discre))/(2 * a)}
  }
}
function otracosamas () {
  
}

function FizzBuzz() {

}

FizzBuzz.prototype.print = function(n) {
  for (i = 1; i <= n; i++) {
    console.log(this.play(i));
  }
}

FizzBuzz.prototype.play = function(n) {
  if (this.isDivisibleBy(15, n)) {
    return "FizzBuzz";
  }
  else if (this.isDivisibleBy(3, n)) {
    return "Fizz";
  }
  else if (this.isDivisibleBy(5, n)) {
    return "Buzz";
  }
  else {
    return n
  }
}

FizzBuzz.prototype.isDivisibleBy = function(divisor, number) {
  return number % divisor === 0;
}

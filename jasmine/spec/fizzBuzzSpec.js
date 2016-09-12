describe("FizzBuzz", function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it("should return 'Fizz' if the number is divisible by 3 only", function() {
    expect(fizzBuzz.play(3)).toEqual("Fizz");
    expect(fizzBuzz.play(9)).toEqual("Fizz");
  });

  it("should return 'Buzz' if the number is divisible by 5 only", function() {
    expect(fizzBuzz.play(20)).toEqual("Buzz");
    expect(fizzBuzz.play(40)).toEqual("Buzz");
  });

  it("should return 'FizzBuzz' if the number is divisible by 3 and 5", function() {
    expect(fizzBuzz.play(15)).toEqual("FizzBuzz");
    expect(fizzBuzz.play(45)).toEqual("FizzBuzz");
  });

  it("should return the number itself if the number is not divisible by 3 or 5", function() {
    expect(fizzBuzz.play(7)).toEqual(7);
    expect(fizzBuzz.play(19)).toEqual(19);
  });
});

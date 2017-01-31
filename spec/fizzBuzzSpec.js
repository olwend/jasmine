describe("fizzBuzz", function() {

    var fizzBuzz;


    beforeEach(function() {
        fizzBuzz = new FizzBuzz();
    });

    describe('fizz when number is factor of 3', function() {
        it('fizzes for 3', function() {
            expect(fizzBuzz.play(12)).toEqual('fizz');
        });
    });

    describe('buzz when number is factor of 5', function() {
        it('fizzes for 5', function() {
            expect(fizzBuzz.play(35)).toEqual('buzz');
        });
    });

    describe('fizzbuzz when number is a factor of 3 and 5', function(){
        it('fizzbuzzes for 3 and 5', function() {
            expect(fizzBuzz.play(60)).toEqual('fizzbuzz');
        });
    });

    describe('fizzbuzz when number is not a factor of 3 and 5', function(){
        it('displays number', function() {
            expect(fizzBuzz.play(83)).toEqual(83);
        });
    });

    describe('fizzbuzz when number is a decimal', function(){
        it('fizzbuzzes for 3 and 5', function() {
            expect(fizzBuzz.play(9.9)).toEqual(9.9);
        });
    });

});

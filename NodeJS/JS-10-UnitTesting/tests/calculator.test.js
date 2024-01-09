const calculator = require('../modules/calculator.js');

//Primer test SUMA
test('La suma de dos numero y el valor resultante', () =>{
    expect(calculator.sum(10, 20)).toBe(30);
});

//Segundo test RESTA
test('La resta de dos numero y el valor resultante', () =>{
    expect(calculator.substract(10, 20)).toBe(-10);
});

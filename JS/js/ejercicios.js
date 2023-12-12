/*
ejercicios 12 Diciembr
*/

//1. Convert Minutes into Seconds.
/*
let min = prompt("Ingresar los minutos que deseas convertir a segundos");
function toSec(min){
    return min*60;
}
let resultado = toSec(min);
console.log(`${min} minutos equivalen a ${resultado} segundos`);
*/

//2. Return the Next Number from the Integer Passed.
let numero = prompt("Ingresa un numero entero");
var num2=1;
function nexNum(numero, num2){
    return numero+num2;
}
let resultnexNum =nexNum(numero);
console.log(resultnexNum);

//3. Area of a Triangle.
/*
Write a function that takes the base and height of a triangle and return its area.

*Examples*

    triArea(3, 2) ➞ 3
    triArea(7, 4) ➞ 14
    triArea(10, 10) ➞ 50

*/

/*
**4. Convert Age to Days.**

Create a function that takes the age in years and returns the age in days.

*Examples*

    calcAge(65) ➞ 23725
    calcAge(0) ➞ 0
    calcAge(20) ➞ 7300
*/

/**
 * **5. Power Calculator.**

Create a function that takes voltage and current and returns the calculated power.

*Examples*

    circuitPower(230, 10) ➞ 2300
    circuitPower(110, 3) ➞ 330
    circuitPower(480, 20) ➞ 9600
 */
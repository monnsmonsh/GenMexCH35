/*
Funciones. Son bloques de codigo con instrucciones que se pueden reutiliza 
las veces que sean necesarios.
algunas funciones reciben parametros y otras no reciben paramentros
*/

//funcion que permite saludar
function saludar(){
    console.log("Hola desde una funcion");
}
//ejecutar la funcion con el nombre de la funcion y los parametros
saludar();

//Hoisting. Caracteristica de una funcion que nos permite invocarla desde antes de su inicializacion, es decir se puede invocar antes del bloque de codigo o despues
// se invoca en la linea 12 y en la linea 19
function saludar(){
    console.log("HOLA invocando la funcion con hoisting");
}
saludar();

//Funciones que retornan algo. Para que una funcion retorne algo (un string, una operacion, una variable, etc..), necesitamos indicarle al codigo de la funcion que vamos a retornar mediante la palabra return
function greeting(){
    return "Hola desde una funccion que retorna";
}
console.log(greeting());

//funcion que retorna y recibe parametros
function sumar(x, y){
    return x + y;

}
let resultado = sumar(255, 254);
console.log(`El resultado de sumar x + y es ${resultado}`);

//Calcular el cuadro de un numer
function calCuadrado(numero){
    return numero * numero;
}
let resultCuadrado =calCuadrado(5);
console.log(resultCuadrado);

//Funciones flecha (Arrow funcion). Es una manera de declarar una funcion por declaracion, sintetizando codigo y haciendolo mas legible.
//funcion para calcular el cubo de un numero
const calCubo =(number) =>{
    return number * number * number
}
let resultCubo = calCubo(3)
console.log(resultCubo);

//Funciones anonimas. Son un tipo de funciones que se declara sin nombre de funcion y se alojan en el interior de una variable. Se hace referencia a ellas cada que vez que la utilicemos.
//Las funciones anonimas no permiten el hosting (no se puede invocar antes de inicializarlas)
const mensaje = function(){
    return "Este es un msj dedde una funcion anonima";
}
console.log(mensaje());

//Callbacks. Es pasar una función B por parámetro a una función A, de modo que la función A pueda ejecutar esa función de forma genérica desde su código.
//Funcion B
const funccionB = function (){
    console.log ("Ejecuanto funcion B");
}
//Funcion A que mandara a llamar a la funcion B
const funccionA = function (callback){
    callback();
}
funccionA(funccionB);
//async



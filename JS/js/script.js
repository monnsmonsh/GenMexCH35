//
//Mensaje de una linea
//

/*Comentarios
 */

//alert("hola mundo");
//console.log("esta es un mensaje")


/*var nombre = prompt("Ingresa tu nombre");
alert("HOLA, " + nombre + "Biemvenido a CH35");
*/

/*
var numero1 = parseInt(prompt("Ingresa un numero"));
var numero2 = parseInt(prompt("Ingresa otro numero"));

console.log("suma:"+(numero1+numero2));
console.log("resta:"+(numero1-numero2));
console.log("multiplicacion:"+(numero1*numero2));
console.log("divicion:"+(numero13/numero2));
*/

/*
var nombre = prompt("Ingresa tu nombre");
var edad = parseInt(prompt("Cual es tu edad"));

if (edad>40) {
    alert("HOLA, " + nombre + " Ya tas viejo");
    } else if(edad>30) {
    alert("HOLA, " + nombre + " Eres un chavo ruco >.<");
    } else if(edad>=18) {
        alert("HOLA, " + nombre + " ya eres adulto 3:)");
    }else if(edad<18){
        alert("HOLA, " + nombre + " eres un chavo");
    }
*/




/*
--------------------------------------------------------
08- DICIEMBRE
--------------------------------------------------------


//tipos de datos y variables
/*var, let, const la diferencia es el alcance
var tiene un alcance global
let tiene un alcnace local
const se mantiene sin ningun cambio*/

// string: cadena de texto (lleva comillas)
// number: numero
// noolena: true/false
// null : nulo
// undefinied : no esta asigando o definido

/*
Todas nuestras variables deben ser declaradas con nombres especificos y 
claros, sin espacion, no deben iniciar con numeros*/

/*
let nombre = "Daniel";
let invitadxsExtras = 2;
let esMayorEdad = true;
let edad = 24;
let invExpecial =null;
let hrSalida = undefined;

document.write(nombre);*/

/*Encasillamiento o tipado
no es util oara mantenimineto del codigo
*/

/*
let numero = 15;
let texto = "hola";

//con encasillamiento

let numeroEncasillado=number = 5;
let textoEncasillado= String = "Hola";
*/

/*
//typeof palabra reservada para saber que tipo de dato tenemos

console.log(typeof(nombre));

let funcionNumber =console.log(typeof Number(nombre));
metodoPaserInt = console.log(typeof parseInt(nombre));
metodoPaserFloat = console.log(typeof paserFloat(nombre));

//parsseInt y parseFloat son funciones que se utlilizan para convertir cadenas de texto en numero
*/


//conversion de number a string
/*
console.log(typeof String(edad));
console.log(typeof edad.toString());
*/

/*
let numero = Number (esMayorEdad);
console.log(typeof(numero));*/

/*
let texto =String(esMayorEdad);
console.log(typeof(texto));
console.log(typeof esMayorEdad.toString());

let negacion =!esMayorEdad;
console.log(negacion);*/



//
//--------------------------------------
//concatenar basicamente es unir string
//---------------------------------------
/*
let saludo = "hola Mundo ";
let frase = "el mundo we XD";
texto =saludo + frase;

//document.write(texto);
console.log(texto);
*/


//
//--------------------------------------
//tipos de datos
//---------------------------------------

/*
> - String (cadenas de texto)
> - number (numericos)
> - Booleans (true or false)
> - Null (nulos)
> - Undefined (indefinidos)
> - objects (objetos)
> - objects (arrays)
*/

//console.log(); nos perpite visualizar en consola del navegador
//console.warn(); muestra mensaje de alvertencia
//console.error(); Muestra un mensaje de erro
//console.table();

let firstName;
firstName = "Monse";
let lastName = 'Cortez'

console.log(firstName + " " + lastName);
console.log("Mi nombre es "+firstName+" y mi apellido es "+lastName)

// ECMAScript 6 (ES6). Interpolacion de cadenas
/*
> - backticks `` (AltGr + 96)
> - para variables ${}
> - Texto para string
*/

let age =37;
console.log(`Mi nombre es ${firstName}, 
    mi apellido es ${lastName},
    y tengo ${age} años`);

//console.warm
console.warn(`Precaucion, no es buena practica sin ;`);
//console.error
console.error(`Status 404: FAILED`);

/* 
-Array. Se traduce como matriz o arreglo. Es un tipo de dato que pertenece a JS, en el cual se almacena una colección de elementos de manera ordenada.
- Los arrays se pueden manipular mediante métodos específicos.
- Los elementos de una array se contabilizan como índices empezando por índice 0, por lo cual, el primer elemento del array posee el índice 0.
- Un arratu posse n cantidad de elementos.
- se declaran como variables, seguido del signo igual y corchetes. dentro de cada corchete vive un elemento con un tipo de dato.
*/

let arreglo1 =[]; //array vacio
console.log(`Array vacion${arreglo1}`);

//los elementos de b array se separan mediante comas
let arreglo2 =["Volkswagen", "BMW", "Mazda"]; //array vacio
console.log(arreglo2);
//longitud e indice son diferentes, la longitud (leght) es el numero de elementos y el indice corresponde a cada elemento a partir del 0.
console.log(typeof(arreglo2));

let salMX = [15000, 12000, 18000, 6000, 28800];//output: object
console.log(salMX.length);//output: 5
console.log(salMX);

/*
Objetos. Los objetos son tipos de datos en JS, con una estructura definida que nos permite almacenar informacion mediante llaves (claves) y valores.
Su sintaxis es la siguiente
    const objeto = {
        clave: valor (dato),
        clave2 valor2 (dato2)
    }
Los objetos pueden almacenar diferentes tipos de valores.
*/

const employee = {
    firstName: "Monse",
    lastName:"Cortez",
    age:"28",
    country: "Mexico"
}

console.log(employee);
//Mostrando mi aray como table
console.table(arreglo2);
//monstrando mi objeto como table
console.table(employee);



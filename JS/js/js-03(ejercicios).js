// Ejercicios para esta sesion

/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */

let age=18;
if (age >= 18){
    console.log("Ya puedes Votar");
}else{
    console.log("No Puedes Votar");
}

/** Ejercicio 2
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */



let numD=56;
if (numD%7==0 && numD%8==0){
    console.log(`Tu numero ${numD} es divicible entre 7 y 8`);
}else if (numD%8==0){
    console.log(`Tu numero ${numD} es divicible entre 8`);
}else if(numD%7==0){
    console.log(`Tu numero ${numD} es divicible entre 7`);
}else{
    console.log(`Tu numero ${numD} es no es divicible entre 7 y 8`);
}

/** Ejercicio 3
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */
let numDiv=56;
if(numD%9==0 ){
    console.log("Verdadero");
}else if(numD%4==0 ){
    console.log("Verdadero");
}else{
    console.log("Falso");
}




/** Ejercicio 4
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */
let movie = "accion";
switch(movie){
    case "accion":
        console.log(`La recomendacion para peliculas del genero ${movie} es Logan`);
        break
    case "drama":
        console.log(`La recomendacion para peliculas del genero ${movie} Mr. no body`);
        break;
    case "comedia":
        console.log(`La recomendacion para peliculas del genero ${movie} Dead Pool`);
        break;
    case "romance":
        console.log(`La recomendacion para peliculas del genero ${movie} Antes que te olvide`);
        break;
    case "suspenso":
        console.log(`La recomendacion para peliculas del genero ${movie} Requiem for a dream`);
        break;
    case "terror":
        console.log(`La recomendacion para peliculas del genero ${movie} no respires`);
        break;
    default:
        console.log("No tenemos recomendacion con ese genero");
        break;
}

/** Ejercicio 5
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 * Utilizar if/else
 */
let seleccion=1;
if (seleccion = 1){
    console.log("1.-Retirar dinero");
}else if(seleccion = 2){
    console.log("2.-Transferencia");
}else if(seleccion = 3){
    console.log("3.-Deposito");
}else if(seleccion = 4){
    console.log("4. Pago de servicios");
}else{
    console.log("Error 404");
}




/** Ejercicio 6
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 * Consideracion: estructura switch
 * 
 */
let pesosMx = 300;
let moneda = "dolar";
switch(moneda){
    case "dolar":
        convercion = pesosMx * 8.41
        console.log(`La cantidad de $${pesosMx}mx a ${moneda} es de: ${convercion} yen`);
        break
    case "euro":
        convercion = pesosMx * 0.054
        console.log(`La cantidad de $${pesosMx}mx a ${moneda} es de: ${convercion} euro`);
        break;
    case "libra":
        convercion = pesosMx * 0.046
        console.log(`La cantidad de $${pesosMx}mx a ${moneda} es de: ${convercion} libra`);
        break;
    case "franco":
        convercion = pesosMx * 0.051
        console.log(`La cantidad de $${pesosMx}mx a ${moneda} es de: ${convercion} franco`);
        break;
    default:
        console.log("Solo aceptamos convercion a Dolar, Euro, Libra, Franco");
        break;

}


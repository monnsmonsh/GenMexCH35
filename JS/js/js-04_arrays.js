/*
----Arrays---
Es una coleccion o agrupacion de elemntos en una misma variable, cada uno de llos por la posicion que ocupa el array.
Los array se utilizam para almacenar y organizar datos de manera eficiente
*/

// Crear un array
const num =[1, 2, 3, 4, 5];
//array
const comida =["tacos", "carne", "pan", "jugo"];

console.log(comida);

//aray mixto
const mix =[
    "pluma",
    8,
    true,
    {nombre:"yo"}
];
console.log(mix);


//array vacio
const list =[];
console.warn(list);

//Agrgar elementos al vacio
list[0] = "leche";
list[1] = "Pollo";
list[2] = "sandia";
console.log(list);

//Otros
const frutas = new Array("Manzana","Naranja","Sandia","Fresas","mandarina");
console.log(frutas);
// longitud de un array
console.log(frutas.length);
//acceder a elementos
console.log(frutas[3]);//Fresas
console.log(frutas[5]);// undefined

// Modifcar elmento del array
const tienda =[
    "Jamon",
    "queso", 
    "tortila",
    "chorizo",
    "leche",
    "Yogurt"];
console.log(tienda);
tienda[1] ="queso asadero";
console.log(tienda);

//* Estados Jalisco, Yucatan, Oaxaca, Guanajuato, Michoacan
const estados =[
    "Michoacan",
    "Yucatan",
    "Veracruz",
    "Queretaro",
    "Guanajuato",
    "CDMX"];

const foodE =[
    "Tortas",
    "Tlayuda",
    "enchiladas",
    "panuchos",
    "Tacos¿?",
    "Dogos"];

const menu = [estados, foodE];
//primer num e numero del array el segundo num la posicion
console.log(menu[0][4],menu[1][4]);
console.log(`En el estado de ${menu[0][4]} se come ${menu[1][4]}`);


//
/// Metodos array
/**
    push
    shift
    unshift
 */

console.log("Metodos de Array")
const ch35=["dany", "maara", "gaby", "fer","mar"];
console.warn(ch35);
//pop Eliminar
let popch35 = ch35.pop()
console.log(popch35);//elimina el ultimo dato
console.log(ch35);
//push () Agregar
let pushch35 = ch35.push("Mony");
console.log(ch35);
//shift () quitar primer elemento
let shiftch35 =ch35.shift();
console.warn(shiftch35);
console.log(ch35);
//unshift devuleve el elemento al principio
let unshiftch35 =ch35.unshift("Dany");
console.warn(unshiftch35);
console.log(ch35);
//reverse()cambia el sentido del array
let reversech35 =ch35.reverse();
console.warn(reversech35);
console.log(ch35);

/*
Investigar
-------
    sort
    forEach
    slice
    splice
    indexOf
*/


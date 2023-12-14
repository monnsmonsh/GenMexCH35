/*Comentarios
 */
/*
let harina = "Harina";
let leche = "leche";
let mantequilla = "mantequilla";
let vainilla = "vainilla";
let huevo = "huevo";
let nutella = true;


let functionNumer = console.log (typeof Number(harina));
nutella = Number (nutella);
console.log(typeof(nutella));

hotcakes = "los ingredientes para la receta son: " + harina+", "+ leche+", "+ mantequilla+", "+vainilla;
//console.log(hotcakes);
document.write(hotcakes);

let texto = String(nutella);

*/


document.write("<h1>Receta para preparar Hotcakes</h1>");

let harina = "2";
let mlDeLeche = 250;
let huevos = 2;
let cucharadasMantequilla = 2;
let nutella = true;

// De número a cadena
let cantidadHarina = 200;
let cantidadHarinaStr = String(cantidadHarina);
document.write("Cantidad de harina: " + cantidadHarinaStr + " gramos" + "<br>");

// De cadena a número
let cantidadAzucarStr = "50";
let cantidadAzucar = Number(cantidadAzucarStr);
document.write("Cantidad de azúcar: " + cantidadAzucar + " gramos" + "<br>");

// De boolean a string
let tieneHuevos = true;
let tieneHuevosStr = String(tieneHuevos);
document.write("¿Tiene huevos? " + tieneHuevosStr + "<br>");

// De string a boolean
let tieneLecheStr = "true";
let tieneLeche = Boolean(tieneLecheStr);
document.write("¿Tiene leche? " + tieneLeche + "<br>");

// De número a boolean
let temperaturaSarten = 180;
let temperaturaSartenBool = Boolean(temperaturaSarten);
document.write("¿La sartén está caliente? " + temperaturaSartenBool + "<br>");

// De boolean a number
let requiereAceite = false;
let requiereAceiteNum = Number(requiereAceite);
document.write("¿Requiere aceite? " + requiereAceiteNum + "<br>");

var instrucciones = [
    "1. En un tazón grande, mezcla la harina, el azúcar, el polvo de hornear",
    "2. Agrega el huevo, la leche y la mantequilla.",
    "3. Mezcla bien hasta obtener una masa suave.",
    "4. Calienta un sartén a fuego medio.",
    "5. Vierte un poco de masa en la sartén caliente para formar cada hotcake",
    "6. Cocina hasta que aparezcan burbujas en la superficie, luego voltea",
    "7. Repite este proceso hasta que cocines todos los hotcakes.",
    "8. Sirve caliente con tu jarabe o frutas favoritas.",
];

document.write("<h2>Instrucciones:</h2>");
for (var j = 0; j < instrucciones.length; j++) {
    document.write(instrucciones[j] + "<br>");
}
//Operadores
/*

Es u signo que espedifica que debe efectuar una determinada operacion

-> Operadores aritmeticos (+, -, *, /, %, ++, --)
-> Operador de asignacion (=)
-> Operadores logicos (&&, ||, !)
-> Operadores de compracion (==, ===, !=, !==, <, >, >=, <=)
-> Operadores de cadena (toLowerCase, toUpperCase, trim, toString, concat, +)

OPERADORES ARITMETICOS

(+): Suma, se utiliza para sumar dos numeros
(-): resta, se utiliza para restar un numero de otro
(*): multiplicacion, Se utiliza para multiplicar dos numeros
(/): division, se utiliza para dividir un numero entre otro
(%): residuo, Se utiliza para obtener el resto de una division
(++): incremento, aumenta de uno en un la cantidad o el numer
(--): decremento, disminuye de uno en uno la catidad o el numero

*/

let numero1 = 10;
let numero2 = 8;

suma = numero1 + numero2;
resta = numero1 - numero2;
multiplicacion = numero1 * numero2;
division = numero1 / numero2;
suma = numero1 + numero2;
residuo = numero1 % numero2;
incremento = numero1;
incremento ++;
decremento = numero2;
decremento --;

console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);
console.log(residuo);
console.log(incremento);
console.log(decremento);


let precioReal = 1000;
let porceDesc = 20;

let cantDesc = (precioReal*porceDesc)/1000;
let preDesc = precioReal - cantDesc;

console.log("Precio Real: $"+precioReal);
console.log("Porcentaje de descuento" + porceDesc +"%");
console.log("Cantidad de descuento: $"+ cantDesc);
console.log("Precio con descuento: $"+preDesc);

/*
    Operadores de asignacion
    (=) Este operador no compara, lo que hace es asignar
*/
/*let frutas = manzana;*/

//Operadores de compracion
/*(==) Igualdad comprar si nuestros valores son iguales
*/
let num3 = 10;
let txtNum ="10";

console.log(num3 === txtNum);

/*(===): Igualdad estricta, comparar si los valores son iguales y el tipo de dato */

/*(!=): desigualdad o distinto
*/

let preCaja =1499;
let preMax = 1500;
if(preCaja !== preMax){
    console.log("El precio del producto no es igual al precio maximo");
}else{
    console.log("El precio del producto es igual al precio maximo permitido");
}

let num5 = 10;
let num6 = "10"
if (num5 != Number(num6)){
    console.log("Son Diferentes");
}else{
    console.log("los valores son iguales");
}


/*
    (!===) Desigualdad escrita o distinto este operador verifica si dos valores no son iguales, pero a diferencia de (!=) en este caso ambos valores deben tener el mismo tipo y valor
*/
let numX = 41;
let numY = "10"
if (numX !== Number(numY)){
    console.log("Los valores son diferentes");
}else{
    console.log("los valores son iguales");
}
/*
En igualdad: ==, y desigualdad: !=
En igualdad estricta: ===, y desigualdad estricta: !==
(Es como sustituir el primer "=" por un "!")
*/

//(>): mayor que basicamente nos idican un valor
let ptfinal=85;
let ptReq = 102;
console.log(ptfinal>ptReq);

let ageN=20;
let ageLim = 30;
console.log(ageN<ageLim);

let ageNe =18;
let ageRe = 18;
console.log(ageNe>=ageRe);

let temp = 8;
let temMax = 21;
console.log(temp < temMax);


//operadores logicos
//(&&) AND se utlizan cuando dos condiciones deben cumplirse

let ageM = 18;
let tieneIDE = true;
if(ageM >= 18 && tieneIDE){
    console.log("pasale mi rey");
} else{
    confirm.log("tas morro");
}

/* (||) or se utiliza cuando se debe cumpir una condicion u  otra
*/
let userP =false;
let descuento = true;
if(userP || descuento){
    console.log("calificar para descueto");
}else{
    console.log("no aplica");
}

// (!) NOT se utiliza para negar el valor de una condicion
let diaFree =false;
if(!diaFree){
    console.log("Se trabaja");
}else{
    console.log("Descanso");
}

//operadores de cadena
//toLowerCase hace el cambio de nuestro string a minusculas
let msjUser = "Bienvenido";
let camMins=  msjUser.toLowerCase();
console.log(camMins);

//toUpperCase hace el cambio de nuestro
let saludo = "Casi es viernes, casi navida";
let camMasm = saludo.toUpperCase();
console.log(camMasm);
 
//trim quita los espacios al incio y al final
let aviso = "   HO L  A   S  "
let sinEsp = aviso.trim();
console.log(sinEsp);

//toString convierte un tipo de dato number en string
let numTxt = 31;
let cadenas = numTxt.toString();
console.log(cadenas);

//concat
let nameN ="monse";
let lnameN = "sanchez";
let fullname = nameN.concat(" ",lnameN);
console.log(fullname);



/*
 Expreciones
 */
/**
    Actividad fer 4:30
 */
//Ingredientes
/*
let harina = "2";
let mlDeLeche = 250;
let huevos = 2;
let cucharadasMantequilla = 2;
let nutella = true;
*/
let harina = true;
let milk = 250;
let cudMant = 2;
let lecheDeslactosada = false;
let lecheDeAlmendra = true;
let nutella = false;
/*
if (lecheDeslactosada || lecheDeAlmendra) {console.log("se puede hacer hotcakes");}
else{console.log("no se puede así");}
*/
function valMilk(){
    if (true); 
    if (milk =250);
    if (cudMant >=2);
    if (lecheDeslactosada || lecheDeAlmendra);
    if(!nutella){
        return "Tienes todo listo para tus hotckers sin nutella";
    }else{
        return "Tienes todo listo para tus hotckers con nutela";
    }
    
    
}
console.log(valMilk());

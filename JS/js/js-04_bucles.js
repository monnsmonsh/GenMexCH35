console.log(`
    -----------
    ->Ahora ablamos de blques
    ------------------------`);
/* 
*===== BUCLES =====
* Iteración. Proceso de repetir una secuencia de instrucciones o acciones en un programa. Es decir, ejecutar un bloque de código muchas veces, basado en una condición o una colección de elementos.

* -- Operadores de incremento (++) y operadores de decremento (--)
*${} se utiliza en el contexto de plantillas de cadena (template literals). Las plantillas de cadena son una forma más conveniente y legible de concatenar cadenas y expresiones en comparación con las cadenas tradicionales con el operador +.
* Los operadores ++ y -- son conocidos como operadores de incremento y decremento respectivamente. 
*- El operador ++ se utiliza para aumentar el valor de una variable en uno.
*- El operador -- se utiliza para disminuir el valor de una variable en uno.
* (i)  : comúnmente utilizada como variable en bucles, es simplemente una convención de nomenclatura y puede ser cualquier nombre válido de variable que elijas. La "i" a menudo se utiliza como abreviatura de "índice" en el contexto de bucles, especialmente en situaciones donde se está iterando sobre índices de arrays o en situaciones similares.
*/

/*
---------------
    CICLO FOR
----------------
*/
for (let boleto = 1; boleto <= 3; boleto++){
    console.log(`Boleto #${boleto}`)
}

let reliquia =1;
for(reliquia; reliquia <=5; reliquia++){
    console.warn(`reliquia ${reliquia}`)
}

let cuentRegresiva = 3;
for(cuentRegresiva; cuentRegresiva >=0; cuentRegresiva--){
    console.log(`Cuenta regresiva ${cuentRegresiva}`);
}

const classM = [
    "Johan",
    "Ania",
    "Jonson",
    "harry"];
for(let i=0; i<classM.length; i++){
    console.warn(classM[i]);
}

/**** Variaciones del ciclo for
-- for...of nos permite recorrer el objeto (array) y devuelve el valor
-- for...in nos permite recorrer el objeto (array) y devuelve su posición (indices)
*/

let fruits = [
    "Manzana",
    "Naranja",
    "Sandia",
    "Fresas",
    "mandarina"];
for(fruit of fruits){
    console.log(fruit);
}

//sumar numero 1 al 20
let suma =0;
for(let i = 1; i<=20; i++){
    suma=suma+i;
    //suma +=i;
}
console.log(suma)

//Tabla del 5
const tabla = 5;
for (let i=1; i<=10; i++){
    let result = tabla * i;
    console.log(`${tabla} x ${i} = ${result}`)
}

/*
- > CICLO WHILE
*/

let prod = 5;
while(prod > 0){
    console.log(prod + " productos Vendidos");
    prod--;
}

//imprimir numeros
let num1 = 0;
while(num1<10){
    num1 ++
    console.log("El numero es: "+num1);
}



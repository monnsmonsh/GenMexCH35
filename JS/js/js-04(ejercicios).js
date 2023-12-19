console.log(`
    -----------
    ->Ejercicios arrays
    ------------------------`);




/*
*Ejercicios
*Ejercicio de Arrays:
Descripción:
Supongamos que tienes una lista de temperaturas diarias en grados Celsius para una semana. Tienes que convertir estas temperaturas a grados Fahrenheit y mostrar los resultados.
* Temperaturas diarias en grados Celsius para una semana
const temperaturasCelsius = [22, 25, 19, 30, 27, 21, 18];
*Instrucciones:

Crea una función llamada celsiusToFahrenheit que tome una temperatura en grados Celsius y la convierta a grados Fahrenheit usando la fórmula: F = C * (9/5) + 32.
Utiliza un bucle para recorrer el array temperaturasCelsius, llama a la función celsiusToFahrenheit para cada temperatura y almacena los resultados en un nuevo array llamado temperaturasFahrenheit.
Muestra ambos arrays (temperaturasCelsius y temperaturasFahrenheit) en la consola.
*/
console.warn(`
    -> Ejercicio 1`);
const temperaturasCelsius = [22, 25, 19, 30, 27, 21, 18];
for (let i=1; i<7; i++){
    let result = temperaturasCelsius[i] * (9/5) + 32.
    console.log(`${temperaturasCelsius[i]} °c ${i} a °f ${result}`);
}



/*
*Ejercicios de Bucles:
*Descripción:
Escribe un programa que sume los primeros 10 números naturales (1 al 10) e imprima el resultado.

*Instrucciones:

Utiliza un bucle (for o while) para sumar los números del 1 al 10.
Imprime el resultado de la suma en la consola.
Sugerencia:
Puedes usar una variable llamada suma para acumular la suma mientras recorres los números.
*/

console.warn(`
    -> Ejercicio 2`);
let numNS =0;
for(let i = 1; i<=10; i++){

    numNS +=i;
}
console.log(numNS)

function sumaNum() {
    let acumulador = 0;
    for (let i = 1; i <= 10; i++) {
    acumulador += i;
    }
    return `La suma de los enteros del 1 al 10 es ${acumulador}`;
}
console. log(sumaNum()) ;


/*
*Ejercicio : Números Primos
Escribe un programa que determine si un número ingresado por el usuario es primo o no. Un número primo es aquel que solo es divisible por 1 y por sí mismo. Puedes utilizar un bucle for para verificar si el número tiene algún divisor además de 1 y él mismo.*/

console.warn(`
    -> Ejercicio 3`);

const esPrimo = numero => {
    // Casos especiales
    if (numero == 0 || numero == 1 || numero == 4) return false;
    for (let x = 2; x < numero / 2; x++) {
        if (numero % x == 0) return false;
    }
    // Si no se pudo dividir por ninguno de los de arriba, sí es primo
    return true;
}

const numProbar = [1, 2, 3, 5, 6, 7, 8, 9];
numProbar.forEach(numero => {
    console.log("¿%d es primo? %s", numero, esPrimo(numero));
});


/*
*Ejercicio : Secuencia de Fibonacci
Escribe un programa que genere los primeros 10 términos de la secuencia de Fibonacci. La secuencia de Fibonacci comienza con 0 y 1, y cada término subsiguiente es la suma de los dos anteriores (0, 1, 1, 2, 3, 5, 8, 13, 21, ...).

Estos ejercicios implican un poco más de lógica y son ideales para practicar conceptos más avanzados. ¡Espero que disfrutes resolviéndolos!*/



let fibo1=1;
let fibo2=1;

//System.out.print(fibo1 + " ");
for(i=2;i<=numero;i++){
    console.log(`${fibo1} + ${fibo2}`)
    fibo2 = fibo1 + fibo2;
    fibo1 = fibo2 - fibo1;
}
//System.out.println();
console.log() ;


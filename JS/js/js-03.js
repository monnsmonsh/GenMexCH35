console.log("Hola CH35");
/*
    Control de flujo y estructura de control
*
    Las estructuras de control son un componente y fundamental dentro de la programacion, entre algunas de las facilidades y ventajas que nos proporcionan para escribir y depurar codigo, podemos mencionar las siguientes:
    - Tomar decisiones basadas en condiciones especificas, esto produce un codigo tanto dinamico como adaptable
    - Repetir acciones (estructuras de bucle) para iterar operaciones o procesar datos de una forma eficiente sin caer en la redaccion de codigo innecesario y repetitivo
    - Facilitar el control de flujo de una operacion, brindandonos la oportunidad de ser especificos en indicar qe instrucciones ejecutar y en que orden
    - Optimizan el rendimiento de nuestro codigo, ya que evita oportunamente ejecutar instrucciones en caso de que no se necesite
    - Facilitar tanto la escritura de codigo como la claridad de este

    Las estructuras de control que vamos a ver durante las sesiones de JS son las siguientes
        - Estructura if-else
        - Estructura switch
        - Estructuras de bucles (for, do, do while)
   
    Para esta sesion, nos centraremos solo en las primeras 2 señaladas en la lista
*/

/*
    Declaracion de sentencia if-else

    Palabra reservada if para comenzar la declaracion, se coloca un parentesis () donde se debe colocar una exprecion logica (true|false), se abre y cierran llaves {} para indicar que sentencia va a ejecutar si la condicion se cumple (true)

    Despues de la llave {} declarada para el bloque de ejecucion if, colocamos la palabra reservada else, para este ejemplo no es necesario colocar mas expresiones dentro de un ()

    Simplemente colocamos otras llaves {} para indicar el bloque de codigo que tiene quer ser ejecuntando en caso de que la condicion no se cumpla (false).
*/

let n = 15;
if (n > 20){
    console.log(true);
}else{
    console.log(false);
}
/*
if-else-if
 * 
 * Se trata de la misma sentencia if-else declarada anteriormente
 * Lo que vamos a hacer diferente es, en este caso, anidar varias veces
 * esta misma sentencia, lo que nos permitira tomar decisiones
 * mas complejas
 * 
 * Usaremos la contatenación.
 * Concatenar es una elegante palabra de la programación que significa: "unir". Para unir cadenas en JavaScript el símbolo de más (+), el mismo operador que usamos para sumar números, pero en este contexto hace algo diferente.
 * 
 * Hay que tener cuidado y no realizar demasiadas anidaciones, ya que va a resultar
 * en codigo poco legible y confuso
*/

// If anidados
let edad=28;
if (edad < 18){
    console.log("eres menor de edad")
}else if(edad >=18 && edad <65){
    console.log("Eres un adulto");
}else{
    console.log("eres un adulto mayor de edad");
}

/*
    Setencia swicht
    La sentencia swicht es otro tipo de estructura de control de flujo que, nuevamente se encuentra en diversos lenguajes de programacion.

    Es bastante parecida a la sentencia if-else, pero diferente comportamiento, ya que no se basa en una bifurcacion (participacion de caminos), sino que se seccionan en multiples casos (case) que, dependiendo de la esprexion que cumpla con un caso espesifico, sera la secuencia que se va a ejecutar, dentro de la declaracion.
    
    -Declaracion:
    Se empieza por colocar la palabra reservada switch, seguido de esto, colocamos parantesis () donde debemos colocar el valor que va a indicar que sentencia/caso a ejecutar.

    Falta indicar el blque de codigo que  se limita a esta sentencia, como lo haciamos en la sentencia if  o con las funciones.

    Dentro de este bloque de codigo, falta colocar los casos para cada valor que se desee, establecer segun sea el valor indicado dentro de el parentesis ().

    Cada uno de estos casos se separa de la siguiente manera:
        case valor : instrucción a ejecutar si el valor empata con este caso.

    Despues, para indicar que la ejecución de las sentencias debe cortarse cuando se cumpla, se coloca la instruccion break. 

    Cuando terminemos de establecer los casos que necesitemos declara, dentro de nuestra sentencia, debemos colocar un valor por defecto, default.

    Esta ultima sentencia nos permite establecer un valor por defecto, si es que este valor colocaldo no empata con ningun otro dentro de la sentencia o en ninguno de los casos.
    
    * default : mensaje no disponible.
*/

let dia = "martes";
switch(dia){
    case "lunes":
        console.log("Odio los lunes");
        break
    case "martes":
        console.log("ya es martes");
        break;
    case "miercoles":
        console.log("Toca sobre");
        break;
    case "jueves":
        console.log("Casi viernes");
        break;
    case "viernes":
        console.log("Pero a que costo");
        break;
    case "sabado":
        console.log("a mimir");
        break;
    case "domingo":
        console.log("a mimir x2");
        break;
    default:
        console.log("dia desconocido");
        break;

}

let Rango = "oro";
switch(dia){
    case "bronce":
        console.log("ya ni jueges");
        break
    case "plata":
        console.log("mankisimo");
        break;
    case "oro":
        console.log("manco");
        break;
    case "platino":
        console.log("Se te va quitando lo manco");
        break;
    case "diamante":
        console.log("ahi la llevas");
        break;
    case "Maestro":
        console.log("excelente");
        break;
    case "GranMaestro":
        console.log("Ya puedes ir a enfrentarte a los pro");
        break;
    default:
        console.log("desistala el juego manco");
        break;

}

/*
- > Operador ternario
- > Exprecion condicional if-else mas simple y legible 
- > Principalmente se unsa para simplificar condiciones de una sola expresion.
- > Tambien puede anidar sentencias if-else-if, sin embargo, no es recomendado porque el codigo se puede volver confunso y poco legible.
- > Su declaracion es la siguiente:
    -> Palabra reservada var, let o const:
    -> Se le asigna un nombre como si se trata de una variable, operador de aignacion "=", seguido de este operador, hay que colocar una expresion logica, esta va dentro de un parentesis (), depues hay que colocar un carater ? que indica el camino a seguir, dependiendo de si, se cumple (o no) la exprecion. 
    -> Para separar el resultado true de false debemos agrgar un caracter de: , del lado izauierdo se coloca la sentencia a ejecuttar.
    ->Si se cumple la condicion del lado derecho se coloca la sentencia ejecutar.
*/

// Ejemplo de operador ternario
let veridicacion = n > 5 ? "si es mayor" : "no es mayor"
console.log(veridicacion);

/**
    Cuando usar if-else u cuando switch?
    if-else : Cuando necesitemos tomar decisiones bajo condiciones mas flexibles.
    Switch: cuando tengamos un conjuto fijo de valores para comparar un expresion.

 */








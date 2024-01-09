//creando funcion para determinar si un numero es par o impar
//Necesitamos exportar esta funcion para que pueda ser utlizada en cualquier parte del proyecto, solamente llamndo al script. Para ello tenemos que agregar las palabras reservadas 'export default'

//NOTA*** no puede ser funcion flecha, sino funcion por declaracion, por commonjs

export default function detParImpar(numero){
    (numero%2 === 0)? console.log(`El numero ${numero} es par`) : console.log(`EL numero ${numero} es impar`);
}



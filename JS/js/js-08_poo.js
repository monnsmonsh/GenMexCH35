/*Paradigma de programacion

    Programacion inperactiva: Se basa en instrucciones detalladas ejecutando un flujo o una secuencia determinada

    Programacion basada en eventos: Se basa en la gestion y respuesta de eventos

    Programacion orientada a objetos: Toma cierta informacion o estructura del mundo real (obj) para poder explicar ciertas cosas, como sus caracteristicas (propiedades o atributos) y sus comportamientos o acciones (metodos)
*/

//Clases: Plantillas para crear obj. Nos ayudan a def un tipo de obj y crear instancias

class persona{
    name = "";
    lastname = "";
    age = 0;
    email = "";
    phone = "";

//objs

// El constructor es una funcion especial, cuya finalidad es la de contruir o instaciar obj
//para incializar un objeto es necesario defirnir un constructor que tomara los atributos
// clases = molde obj = gomita constructor = atributos = inredientes metodos = comportamineto

    constructor (name, lastname, age, email, phone){
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.email = email;
        this.phone = phone;
    }


    comer(){
        console.log("Comida es comida");
    }//

    bailar(){
        console.log("Perreo intenso");
    }

    mostrarInfo(){
        console.log(`Nombre ${this.name}`);
        console.log(`Apellido: ${this.lastname}`);
        console.log(`Edad: ${this.age}`);
        console.log(`e-mail: ${this.email}`);
        console.log(`tel: ${this.phone}`);
    }
    leer(){
        console.log("Leyendo un libro");
    }
}

let usuario1 = new persona ("Ximena", "Muñoz", 20, "ximonkey@hotmail.es", 3318712350); //Instanciar objeto
let usuario2 = new persona ("Diana", "Laura", 21, "DianaLau@hotmail.es", 5532684523);
let usuario3 = new persona ("Emiliano", "Madrigal", 21, "Emiliano99@hotmail.es", 3365698525);
let usuario4 = new persona ("Ana", "Fernández", 22, "Ana_Fernandez@hotmail.es", 5524523625);
let usuario5 = new persona ("Fernanda", "Carmona", 23, "Carmona98@hotmail.es", 5866326236);
let usuario6 = new persona ("Uriel", "Cardoso", 25, "UrielCardo@hotmail.es", 3352685966);

console.log(usuario1);// imprimir objeto completo
console.log(usuario4.email);// imprimir un atributo
console.log(`El email de ${usuario2.name} es ${usuario2.email}`);

usuario1.mostrarInfo(); //Invocar el método.
usuario1.comer();
usuario1.leer();


//Pilares de la programacion orientada a objetos

/*
    Herencia
    Polimorfismo
    Encapsulamiento
    Abstracion
*/

//herencia nos permite heredar a clases inferiores para poder optimizar el porgrama

class arrendador extends persona{//subclase
    capacidad = 0;
    costo = 0;
    nombreLugar = "";

    constructor(name, lastname, age, email, phone, capacidad, costo, nombreLugar){
        super(name, lastname, age, email, phone);
        this.capacidad = capacidad;
        this.costo = costo;
        this.nombreLugar = nombreLugar;

    }

    mostrarInfo(){
        console.log("Capacidad", this.capacidad);
        console.log("Costo:", this.costo);
        console.log("Nombre del Lugar", this.nombreLugar);
    }
    
}

/*class arrendarGto extends arrendador{
}*/

//instancear
let arrendador1 = new arrendador("Rocio","Hernandez", 29, "rocio29@gmail.com", 5421788956, 100, 5000, "La hacienda");

console.log(arrendador1);
console.log(arrendador1.costo)
arrendador1.mostrarInfo();

/*
//Otro Ejemplo
class Animal {
    sonido() {
      console.log('Hace un sonido genérico');
    }
  }
  
  class Perro extends Animal {
    sonido() {
      console.log('Guau guau');
    }
  }
  
  class Gato extends Animal {
    sonido() {
      console.log('Miau');
    }
  }
  
  const perro = new Perro();
  const gato = new Gato();
  
  perro.sonido();  
  gato.sonido();

  perro.sonido(); //el mismo método sonido(), para perro muestra "guau guau"
  gato.sonido(); //el mismo método sonido(), para gato muestra "miau"
*/

/*
  Polimorfismo: tener objeto de diferentes tipos que pueden ser manipulados en comun
*/

class product{
    
    marca = "";
    precio = 0;

    constructor(marca, precio){
        this.marca = marca;
        this.precio = precio;
    }

    mostrarDescripcion(){
        console.log(`Nombre: ${this.marca}`);
        console.log(`Precio: ${this.precio}`);
        //console.log("Marca:",this.marca);
        //console.log("Precio: $", this.precio);
    }
}
//instancear
let product1 = new product("Riverpoll", 52);
let product2 = new product("Gushi", 56);
product1.mostrarDescripcion(); //Invocar el método.

//
//Encapsulamineto ocultar la implementacion de obj y solo mostrar

class Usuario{
    #contraseña;
    
    constructor(userName, correo , contraseña){
        this.userName = userName;
        this.correo = correo;
        this.#contraseña = contraseña;

    }
    verificarContraseña(contraseña){
        return this.#contraseña === contraseña;
    }
}



//abstracion no es nada mas que traer obj del mundo real y poder aplicarlos a la programacion mediante clases, contrusctores y obj

//Los obj de tipo JSON en un formato de intercambio de datos ligero, accesible, estruturado, manipulable (DOM) y que nos brindan una mejor comunicacion entre el lciente y el servidor. Esto gracias a que son mas flexibles y generalmente se ejecutan con fetch


let objetoJson = {
    "nombre": "Juanin",
    "apellido": "Juan Harry",
    "edad": 31,
    "email": "juanin@gnail.com",
    "telefono": "5574980693",

}

console.log(objetoJson);

let objetoLiteral = {
    nombre: "Juanin",
    apellido: "Juan Harry",
    edad: 31,
    email: "juanin@gnail.com",
    telefono: "5574980693",

}

console.log(objetoLiteral);


//Princios Solid

//
/*
    1->Principio de responsabilidad unica (Single Responsability Principle SRP)
    Una clase de tener asignanda una tarea o responsabilidad especifica especifica y esta no deberia de cambiar

    2->Principio abierto/cerrado (open/closed principle OCP)
    Una clase puede estar abierta a extenciones y agregar uevas funciones, pero sin generar cambios en la misma

    3->Principio de sustitucion de Liskov (Liskov Suntitution Principle LSP)
    Una clase hijo puede sustituir obj de una clase padre

    4->Principio de segregacion de interfaces (Interface Segregation Principle ISP)
    Delimitar los metodos que necesito y dejar fuera los innecerarios

    5.->Principio de inversion de dependencias (Dependency Inversion Principle DIP)

*/

/*
    Programar que conste de una clase alumno que tenga atributos nombre y calificacion. Definir los metodos para inicializar sus atributos (constructor), imprimirlos y mostrar un mensaje con el resultado de si la calificacion es aprobatoria o no
    
    ->Atributos
    Nombre
    Calificacion

    metodos
    imprimirCalificacion
    evaluacion

    la calificacion aprobatoria es de 6
    if para evaluar la calificacion
*/

////
console.log(`
    -----------
    ->Ejercicios resulto forma 1`);
class alumno{
    name2 = "";
    lastname2 = "";
    cal = 0;

    constructor (name2, lastname2, cal){
        this.name2 = name2;
        this.lastname2 = lastname2;
        this.cal = cal;
    }
    
    mostrarInfoAlum(){
        if(this.cal >= 6){
            console.log(`Nombre ${this.name2}`);
            console.log(`Apellido: ${this.lastname2}`);
            console.log(`Aprobaste con calificacion de: ${this.cal}`);
        }else{
            console.log(`Nombre ${this.name2}`);
            console.log(`Apellido: ${this.lastname2}`);
            console.log(`Roprobaste con calificacion de: ${this.cal}`);
        }
    }

}
let aluumno1 = new alumno ("Ximena", "Muñoz", 10 );
let aluumno2 = new alumno ("Diego", "Gonzales", 5 );
aluumno1.mostrarInfoAlum(); //Invocar el método.
aluumno2.mostrarInfoAlum(); //Invocar el método.

/////////////////////////////////////
////
console.log(`
    -----------
    ->Ejercicios resulto forma 2`);
class Alumno {
    nombre = "";
    calificacion = 0;

    constructor(nombre, calificacion) {
        this.nombre = nombre;
        this.calificacion = calificacion;
    }

    imprimirCalificacion() {

        console.log(`${this.nombre} tiene una calificación de ${this.calificacion}`);

    }

    evaluacion() {
        if (this.calificacion >= 6) {
            console.log(`${this.nombre} ha aprobado.`);
        } else {
            console.log(`${this.nombre} no ha aprobado.`);
        }
    }
}

const alumno1 = new Alumno("Ximena", 5);
const alumno2 = new Alumno("Diego", 10);
alumno1.imprimirCalificacion();
alumno1.evaluacion();
alumno2.imprimirCalificacion();
alumno2.evaluacion();
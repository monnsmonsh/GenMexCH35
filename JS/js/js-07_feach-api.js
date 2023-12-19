//Programacion sincronico
/*
function two(){
    console.log("dos");
}
function one(){
    console.log("uno");
    two();
    console.log("tres");
}

one();
console.log("********************************");
*/



//porgramacion asincrona
/*setTimeout que  recibe una funcion anomina y estabecle un tiempo (en milisefundos 1000ms = 1s)de ejecucion para cumplir con la condicion asicronismo
*/
/*
const twoAsync = () => {
    setTimeout( () =>{
        console.log("dos Async");
    },5000);
    
}

const oneAsync = () => {
    setTimeout(function(){
        console.log("uno Async");
    },2000)
    twoAsync();
    console.log("tres Async");
}

oneAsync();
*/



/*
    Trabajando con promesas mediante Fetch API
*/
const url = "https://jsonplaceholder.typicode.com/users";
fetch(url)
    //Si se cumple la promesa,vamos a traer los datos de la API y se convertiran en tipo json para poder mostrarlos en consola
    .then(data => data.json())
    .then(data =>{
        console.log(data);//mostrando en consola todos los user de la API
        console.log(data[0].name);//mostrando en consola el user con indice 0
    })
    .catch(error => console.error("!Ups¡, algo malio mal",error));



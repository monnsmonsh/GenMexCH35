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

//-> Usando fetch para mostrar en navegador
const botonInfo = document.querySelector("#btn-mensaje");
const info = document. querySelector("#mensaje");


//varible para guardar informacion que va traer desde la API debe de ser de tipo null
let post =null;

//Consumiendo API con fetch (promesas)
botonInfo.addEventListener("click", () =>{
    fetch("https://jsonplaceholder.typicode.com/users/4")
        .then(response => response.json())
        .then(response =>{
            post = response;//Guardo los datos de response en la variable tipo null, para que modicar el dato.
            //Mandamos a llamar la variable desde la funcion (pero, esa no la hemos, hay que hacerla)
            mostraDatos(post);
        })
        .catch(error => console.error("¡Problemas!", error));
});
//Funcion que me permita manipular la variable de tipo null
//Quiero traer name, user, email, numberphone de la API
const mostraDatos = (post) => {
    //Creando nodos (elmentos) mediante DOM Manipulation
    const name = document.createElement("h2");
    const userName = document.createElement("h3");
    const email = document.createElement("p");
    const phone = document.createElement("p");

    //Ponerlos en el HTML (innerHTML)
    name.innerHTML = post.name;
    userName.innerHTML = post.username;
    email.innerHTML = post.email
    phone.innerHTML = post.phone;

    //hacer que aparezcan en el navegador
    info.appendChild(name);
    info.appendChild(userName);
    info.appendChild(email);
    info.appendChild(phone);
}




//-> Usando fetch para mostrar en navegador (Mostrar PRODCUTOS)
const botonProductos = document.querySelector("#btn-store");
const tienda = document.querySelector("#store");
let productos = null;
//Consumiendo API con fetch (promesas)
botonInfo.addEventListener("click", () =>{
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(response =>{
            productos = response;
            //Funcion por definir
            mostrarProductos(productos)
        })
        .catch(error => console.error("¡CUIDADO!", error));
});

//Funcion prar crear, agregar y mostrar elementos desde el DOM
const mostrarProductos = (productos)=>{
    //mando a llamar title,price,description, category, img desde la API
    productos.map((productos) => {//El método map toma el array (objeto en JS) y crea nuevos arreglos que se pueden manipular de manera individual. Así, evitamos el uso de un ciclo forEach
        const imagen = document.createElement("img");
        const titulo = document.createElement("h2");
        const precio = document.createElement("h3");
        const descripcion = document.createElement("p");
        const categoria = document.createElement("p");
        const separador =document.createElement ("hr");
        
        //Enviar a HTML (innerHTML)
        imagen.src = productos.image;
        imagen.width = 200;
        titulo.innerHTML = productos.title;
        precio.innerHTML = productos.price
        descripcion.innerHTML = productos.description;
        categoria.innerHTML =productos.category;

        //mostrar en nav en padre
        tienda.appendChild(imagen);
        tienda.appendChild(titulo);
        tienda.appendChild(precio);
        tienda.appendChild(descripcion);
        tienda.appendChild(categoria);
        tienda.appendChild(separador);
    })
}

//metodo POST utilizando fetch. Permite crear recursos en la API
fetch("https://jsonplaceholder.typicode.com/posts",{
    //indicar que es un metodo de tipo POST
    method: "POST",
    //creo el body de mi nuevo obj, siguiendo Key de la API existente
    body: JSON.stringify({
        userId:1986,
        title:"Sueñan los androides con ovejas electricas?",
        body: "author: Philipe k. Dick"
    }),
    headers:{
        "Content-type": "application/json; charset=UTF-8"
    }
    

})
    
.then(response => response.json())
.then(response =>{
    console.log(response)
} )

/* >>>>>>>>> Programacion asincrona (promise) <<<<<<*/
//funcion flecha de ti´po asunc-await
//indico que es una funcion asincrona con la palabra reservda async antes de los parametros
const getUser = async () =>{
    //Para que se cumpla la promesa, no utiliza then, sino que usamos try. para errores, se sigue utilizando catch
    try{
        //Retardo para que se ejecute de manera asincrona. Se crea una nueva promesa que recibe un setTimeout
        await new Promise(resolve => setTimeout(resolve, 3000));

        //Promesa a ejecutar
        const url = "https://jsonplaceholder.typicode.com/users/4";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

    }catch(error){
        console.log("Error XD".error);
    }
}
//invocanr funccion,
getUser();

/* LocalStorage */
//Nos permite CRUD objetos de JavaScript de manera local
//crear un obj de js con sus keys y valores
const user =[
    {
        id: 1,
        name: "Monse",
        lastName: "Cortez",
        email: "monse@lol.com",
        posicion: "top/mid"
    },
    {
        id: 2,
        name: "Manolo",
        lastName: "Hernandez",
        email: "manolo@lol.com",
        posicion: "top/mid"
    },
    {
        id: 2,
        name: "Rick",
        lastName: "Juarez",
        email: "rick@lol.com",
        posicion: "top/jungle"
    },
]


//converir obj creado a notacion JSON y alacenarlo en LOCAL
localStorage.setItem("usuario", JSON.stringify(user));

//
const users = JSON.parse(localStorage.getItem("usuario"));
console.log(users);
console.log(user[1].name, user[1].posicion);
console.log(`${user[1].name}, con posicion de ${user[1].posicion} laner`);


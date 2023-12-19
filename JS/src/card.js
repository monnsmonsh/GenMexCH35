/**
 * Para manipular la informacion de un usuario necesito crear un perfil mediante un obj de js
 */

const user ={
    username:'Monse',
    age:28,
    email:'monse@monse.com',
    favfilms:['Mr Nobody ', 'Interestelar ', 'The dark night ']

}

//crear una funcion que me permita ingresar el obj del perfil en el nodo padre
const creatUser = (user) =>{
    document.getElementById("username").textContent = user.username;
    document.getElementById("age").textContent = user.age;
    document.getElementById("email").textContent = user.email;
    //Monstrando elemento de lista en forma de lista
    /* Para mostra el array en forma de lista
    */
    const ul = document.getElementById("fav-films");
    user.favfilms.forEach(film =>{
        const li = document.createElement("li");
        li.textContent = film;
        ul.appendChild(li);
    });

    //mod estilo de la ul para quitar viñietas
    ul.style.listStyleType ="none";
    ul.style.padding ="0";

    //mostrando elementos en forma de fila
    //document.getElementById("fav-films").textContent = user.favfilms;
}

//invocando la funcion
creatUser(user);

const inputName = document.getElementById("name");
const userName = document.getElementById("username");
const inputEmail = document.getElementById("email-input");
const userEmail = document.getElementById("email");
const profileBtn = document.getElementById("btn-main");


profileBtn.addEventListener("click", () =>{
 userName.textContent = inputName.value;
 userEmail.textContent = inputEmail.value;
})


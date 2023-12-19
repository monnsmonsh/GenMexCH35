const botonRandom = document.getElementById("btn");
const botonReset = document.getElementById("reset");
const colorFondo = document.body.style.backgroundColor;

// vamos a declarar un afuncion que genera un numero random tomadno parametro number
const random = (number) =>{
    return Math.floor(Math.random() * (number +1));
}

//Crear eventos de Click que al presionar un boton pase algo
botonRandom.addEventListener("click", () =>{
    const randomColor =`rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    
    document.body.style.backgroundColor = randomColor;
});
// -->Boton de reset
botonReset.addEventListener("click", () => {
    document.body.style.background = colorFondo;
});




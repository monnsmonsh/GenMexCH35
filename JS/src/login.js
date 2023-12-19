const emailInput = document.getElementById("email");
const submitButton = document.getElementById("btn-submit");
//Regex: expreciones regulares. Determinan patrones que se deben cumplir
const emailREGEX = /^[\w.+\-]+@gmail\.com$/;

//Desabilitar el boton
submitButton.disabled = true;

/*
Evento para input, el cual evaluara el patron de exprecion regular y en caso de cumpor con el patron, habilitara el buton y podemos ser redirigidos a la pagina index.html
-> se obtine el valor actual del campo email (input) usando e.target.value y se almacena una variable (text).
-> Se evalue la REGEX
*/
emailInput.addEventListener("input", (e) =>{
    const text = e.target.value;
    if (emailREGEX.test(text) == true){
        submitButton.disabled = false;
    }
});




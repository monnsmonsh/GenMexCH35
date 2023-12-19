/*
    Manipulacion del DOM
    ->leer y traer nodos del arbol del DOM
    document.getElementById(trae elelemtos por Id)
    document.getElementByClassName(trae elementos por Clase)
    document.getElementByTagName(trae elementos por etiqueta)


*/

//getElementById
const titulo = document.getElementById("title1");
console.log(titulo);
console.log(titulo.innerText);//tree strung(texto que vive dentro del ID)

//getEkementsByClassName
const titulos = document.getElementsByClassName("title");
console.log(titulos);
console.log(titulos.length);//devuelve la longitud de elementos de la clase
console.log(typeof titulos);//muestra objeto porque es una coleccion de arrays


//getElementsByTagName
const tituloH3 = document.getElementsByTagName("h3");
console.log(tituloH3);
console.log(tituloH3[0].innerText);

/*
    Metodos par lamar elementos selectores de CSS
    se usas para procesp mas especificos y la sintaxis es querySelector
    -> document.querySelector("selector"); //#, ., <>
    -> document.querySelectorAll(). Selecion los elemento que se especificquen

    Siempre van a traer el primer elementop con el selector indicado

*/

//querySelector
const query = document.querySelector("#title4");
console.log(query.innerText);

const queryClass = document.querySelector(".title");
console.log(queryClass);

//querySelectorALL
const queryClassAll = document.querySelectorAll(".title");
console.log(queryClassAll);


//Manipular elemento de DOM (Styles) con JS
titulo.style.textAlign = "Center";
titulo.style.color= "#5058F2";

//Manipular el texto de un elemento
const titulo2 = document.querySelector("#title2");
titulo2.innerText = "Seccion de Manipulacion de DOM. CH35";
titulo2.style.color = "#F23D2D";


/*
    Metodos para crear y agregar elemetnos DOM. Este proceso se divide en dos "crear el nodo y agregar el ndo".
        -> crear nodos.
            *documet.crearElement("element")--> Crear elemetno a partir de etiquetas.
            *documento.createTextoNode("text") --> creat texto dentro de las etiquetas

*/
const nodo1 = document.createElement("h4");
const imgNodo = document.createElement("img");


/*¨
    ->Agregar nodos
        * parentElement.appenChild(const);
        * parentElement.appen(const);
        * parentElement.insertBefore(const)
        * parentElement.insertAdjacentElement(const)
    Utilizamos mayormente appenChild
*/
//Obtengo el elemento padre por tag, class o id
const parentElement = document.getElementById("dif");
//Crear el texto que vivira en el ndo
const textNodo1 = document.createTextNode("Imagen agregada en el DOM");
//inserta nodos en el elemento padre
nodo1.appendChild(textNodo1);
//inserta nodos en el elemento padre
parentElement.appendChild(nodo1);
parentElement.style.fontFamily = "'karla', sans-serif";
parentElement.style.color ="#BA6005";
//Agregar img
parentElement.appendChild(imgNodo);
imgNodo.src = "./src/assets/nanami.png";
imgNodo.alt = "nanami";
imgNodo.width = "300";

/* Otra forma de leer y mofdificar nodos
    document.outerHTML(leer)
    node.innerHTML (escribir sobre el nodo)
*/
const elementOuter = titulo2.outerHTML;
console.log(elementOuter);
titulo2.innerHTML = "Manipulacion de DOM";





// Escribe tu código aquí.
// construimos la función para bigWords
function bigWords(inputString, stringArray) {
    return stringArray.filter(word => word.length > inputString.length);
}

// Contruimos la funcion printArray
function printArray(stringArray) {
    //imprimimos en el html
    const listContainer = document.getElementById('wordList');
    
    // Limpiar el contenido actual en caso de llamadas anteriores
    listContainer.innerHTML = '';

    stringArray.forEach(word => {
        const listItem = document.createElement('li');
        listItem.textContent = word;
        listContainer.appendChild(listItem);
    });
}

// Definimos el array de con las palabras
const wordsArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio', 'desafio', 'javascript', 'entrevista', 'codigo'];

// manbdamos llamar la función bigWords
const resultArray = bigWords('bocina', wordsArray);
console.log(resultArray);

//imprimimos
printArray(resultArray);
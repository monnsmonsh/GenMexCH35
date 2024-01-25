// Tenemos un li de productos

const productos = [
    {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
    {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
    {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
    {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
    {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
];

const listProduct = document.getElementById("listProductos");
const inputFiltro = document.getElementById("filtro-input");

// Función para mostrar productos mediant el dom
function mostrarProductos(productosAMostrar) {
    listProduct.innerHTML = ""; // Limpiamos  la lista

    productosAMostrar.forEach(producto => {
        const dProduct = document.createElement("div");
        dProduct.classList.add("producto");

        const pTitulo = document.createElement("p");
        pTitulo.classList.add("titulo");
        pTitulo.textContent = producto.nombre;

        const imagen = document.createElement("img");
        imagen.setAttribute('src', producto.img);

        dProduct.appendChild(pTitulo);
        dProduct.appendChild(imagen);

        listProduct.appendChild(dProduct);
    });
}

// Función para filtrar nuestros productos
function filtrarProductos() {
    const textoFiltro = inputFiltro.value.toLowerCase();
    const productosFiltrados = filtrado(productos, textoFiltro);
    mostrarProductos(productosFiltrados);
}

// Función de filtrado
function filtrado(productos, texto) {
    return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}

// Mostrar todos los productos al cargar la página
mostrarProductos(productos);


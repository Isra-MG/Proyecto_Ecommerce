const contenedorProductos = document.getElementById("contenedorProductos")
const contenedorContadorCarrito = document.getElementById("contenedorContadorCarrito");
const contador = document.createElement("p");

const carritodeCompras = [];

const paquetes = [
    { id: 1, nombre: "Paquete 1", imagen: "../imagenes/e-commerce.jpg", precio: 6000, cantidad: 1},
    { id: 2, nombre: "Paquete 2", imagen: "../imagenes/galeria1.jpg", precio: 9000, cantidad: 1},
    { id: 3, nombre: "Paquete 3", imagen: "../imagenes/web_portal_d.jpg", precio: 8000, cantidad: 1},
    { id: 4, nombre: "Paquete 4", imagen: "../imagenes/galeria2.jpg", precio: 10000, cantidad: 1},
    { id: 5, nombre: "Paquete 5", imagen: "../imagenes/galeria3.jpg", precio: 7000, cantidad: 1},
    { id: 6, nombre: "Paquete 6", imagen: "../imagenes/galeria4.jpg", precio: 5000, cantidad: 1},
    { id: 7, nombre: "Paquete 7", imagen: "../imagenes/galeria5.jpg", precio: 2500, cantidad: 1},
    { id: 8, nombre: "Paquete 8", imagen: "../imagenes/galeria5.jpg", precio: 3000, cantidad: 1},    
]

paquetes.forEach((item) => {
    const div = document.createElement("div")
    div.innerHTML += 
    `
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="${item.imagen}" alt=${item.nombre}>
            </div>
            <div class="flip-card-back">
                <h3 class="tituloCard">${item.nombre}</h3>
                <p>Precio: $ ${item.precio} MXN</p>
                <button id="Paquete ${item.id}">Agregar al Carrito</button>
            </div>
        </div>
    </div>    
    `
    contenedorProductos.appendChild(div)
    const botonAdd = document.getElementById(`Paquete ${item.id}`);
    botonAdd.addEventListener("click",()=> {agregarAlCarrito(item.id,carritodeCompras)})
})

const agregarAlCarrito = (productoSeleccionado, carrito) => {
    const productoElegido = paquetes.find(paquetes => paquetes.id === productoSeleccionado);
    carrito.push (productoElegido);

}

const agregarcontadorCarrito = ()=> {
    if(carritodeCompras.length !==0){
        contador.textContent = carritodeCompras.length;
        contador.classList.add("contadorCarrito");
        contenedorContadorCarrito.appendChild(contador);
    }
}

const mostrarCarrito = () => {
    carritoOffCanvas.innerHTML ="";
    carritodeCompras.forEach(producto => )
}


const eliminarProducto = (productoClickeado) => {
    const productoEliminado = carritodeCompras.find(paquetes => paquetes.id ===productoClickeado)
    const index = carritodeCompras.indexOf(productoEliminado);
    carritodeCompras.splice(index,1);
    agregarcontadorCarrito();
    mostrarCarrito();
}

const 
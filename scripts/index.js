const contenedorProductos = document.getElementById("contenedorProductos");
const contadorCarrito = document.getElementById ("contadorCarrito"); 
const contenedorContadorCarrito = document.getElementById("contenedorContadorCarrito");
const carritoOffcanvas = document.getElementById("carritoOffcanvas");
const precioTotalCarrito = document.getElementById ("precioTotalCarrito");
const terminarCompra = document.getElementById ("terminarCompra");
const contador = document.createElement("p");


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

const carritodeCompras = [];

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
    botonAdd.addEventListener("click",()=> {
        agregarAlCarrito(item.id,carritodeCompras);
        agregarContadorCarrito();
        mostrarCarrito();
    })
})

const agregarAlCarrito = (productoSeleccionado, carrito)=> {
    const productoExiste = carritodeCompras.some (paquetes => paquetes.id === productoSeleccionado);
    const productoElegido = paquetes.find (paquetes => paquetes.id === productoSeleccionado);
    if (productoExiste) {
        let precioInicial = productoElegido.precio;
        productoElegido.cantidad++;
        productoElegido.nuevoPrecio = productoElegido.cantidad * precioInicial;
    } else {
        carrito.push (productoElegido);
        console.log ("Agregado con exito");
        console.log (carrito);
    }
}

const agregarContadorCarrito = ()=> {
    if (carritodeCompras.length !== 0) {
        contenedorContadorCarrito.appendChild(contador);
        contador.textContent = carritodeCompras.length;
        contador.classList.add("contadorCarrito");
    } else {
        contador.textContent ="";
        contador.classList.remove ("contadorCarrito");
    }
}

const mostrarCarrito = ()=>{
    carritoOffcanvas.innerHTML="";
    carritodeCompras.forEach (producto => {
        tr = document.createElement ("tr");
        tr.classList.add("tablaProductos");
        tr.innerHTML += 
        `
            <td>
                <img src="${producto.imagen}" alt="${producto.nombre}">
            </td>
            <td class="infoProducto">${producto.nombre}</td>
            <td class="infoProducto">${producto.cantidad}</td>
            <td class="infoProducto">${producto.precio}</td>
            <td class="infoProducto eliminarProducto">
                <iconify-icon icon="material-symbols:delete-outline" class="deleteIconify" id="eliminar${producto.id}"></iconify-icon>
            </td>
        `

        carritoOffcanvas.appendChild(tr)

        const botonEliminar = document.getElementById(`eliminar${producto.id}`);
        botonEliminar.addEventListener("click", ()=> {
            eliminarProducto(producto.id)
        })
    })
    const totalCarrito = carritodeCompras.reduce ((acumulador,producto) => acumulador + producto.precio,0);
    precioTotalCarrito.innerText =`Precio total: $${totalCarrito}`;
}



const eliminarProducto = (productoClickeado) => {
    const productoEliminado = carritodeCompras.find(paquetes => paquetes.id ===productoClickeado);
    const index = carritodeCompras.indexOf(productoEliminado);
    carritodeCompras.splice (index,1);
    agregarContadorCarrito();
    mostrarCarrito();
}

const vaciarCarrito = ()=> {
    carritoDeCompras.innerHTML =[];
    carritoOffcanvas.innerHTML =[];
    contador.textContent ="";
    contador.classList.remove ("contadorCarrito");
}

terminarCompra.addEventListener ("click", ()=> {
    vaciarCarrito();
})


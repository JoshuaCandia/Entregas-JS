/*
* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Objetos <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
*/
let producto1Obj = new Producto(1,"Matafuego de 5kg ABC",15500,"/images/matafuego.jpg");

let producto2Obj = new Producto(2, "Chaleco", 2500, "/images/chalecos.png");

let producto3Obj = new Producto(3, "Balizas", 3000, "/images/balizas.jpg");

let producto4Obj = new Producto(4, "Paquete", 20000, "/images/paquete.jpg");

let producto5Obj = new Producto(5,"Matafuego x6 lts AK",32350,"/images/acetato.jpg");

let producto6Obj = new Producto(6,"Matafuego x5kg Co2",54000, "/images/co2.png");

let producto7Obj = new Producto(7,"Botiquin de Madera N°25",12500,"/images/botiquin.jpg");

let producto8Obj = new Producto(8,"Carteleria Variada", 1000,"/images/carteles.png");

let producto9Obj = new Producto(9,"Sifon + Garrafa ",23000,"/images/sifon.png");

/*---------------------------------------------------------------------------------*/
//Arrays
let productos = [
  producto1Obj,
  producto2Obj,
  producto3Obj,
  producto4Obj,
  producto5Obj,
  producto6Obj,
  producto7Obj,
  producto8Obj,
  producto9Obj,
];

let listaCarrito = [];

/*
* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Variables Globales <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
*/

const suma = (a, b) => a + b;
const division = (a, b) => a / b;
const iva = (x) => x * 0.21;


/*
* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Funciones <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
*/

/*---------------------------------------------------------------------------------*/
//Funcion objetos nuevos

function Producto(id, nombreCompleto, precio, imagen) {
  this.id = id;
  this.nombre = nombreCompleto;
  this.precio = precio;
  this.imagen = imagen;
}




/*---------------------------------------------------------------------------------*/
//Funcion de Busqueda

function menuBuscador() {
  let criterio = prompt("Introduzca el criterio de busqueda:");

  let resultadoBusqueda = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(criterio)
  );
  if (resultadoBusqueda.length > 0) {
    return opcionDeCompra(resultadoBusqueda);
  } else {
    return opcionDeCompra(productos);
  }
}



/*---------------------------------------------------------------------------------*/
//Storage Funcion
 

function guardarCarritoEnElStorage(productosEnElCarrito) {
  localStorage.setItem("productos", JSON.stringify(productosEnElCarrito));
}

function obtenerCarritoDelStorage() {
  let getProducts = localStorage.getItem("carritoDeProductos");
  if (getProducts != null) {
    listadoCarrito = JSON.parse(getProducts);
  }
}

/*---------------------------------------------------------------------------------*/
//Setear Botones


function setearBotones() {
  let elementosComprar = document.getElementsByClassName("botonProducto");

  for (let index = 0; index < elementosComprar.length; index++) {
    const element = elementosComprar[index];
    let boton = document.createElement("button");
    boton.innerText = "Comprar ahora";
    boton.onclick = () => {
      Swal.fire("Comprado", "Muchas Gracias!", "success");
    };
    let buttonAddCart = document.createElement("button");
    buttonAddCart.innerText = "Agregar al Carrito";
    buttonAddCart.onclick = () => {
      listaCarrito.push(productos[index]);
      guardarCarritoEnElStorage(listaCarrito);
    };

    boton.setAttribute("class", "boton");
    buttonAddCart.setAttribute("class", "boton");

    element.appendChild(boton);
    element.appendChild(buttonAddCart);
  }
}

/*---------------------------------------------------------------------------------*/
//Function Buscar Productos

function buscarProductos(textoBusqueda) {
  return productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(textoBusqueda)
  );
}



/*
* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Exports <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
*/

export {
  productos,
  buscarProductos,
  setearBotones,
  guardarCarritoEnElStorage,
  obtenerCarritoDelStorage,
};
/*---------------------------------------------------------------------------------*/

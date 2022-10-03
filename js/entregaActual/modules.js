/*---------------------------------------------------------------------------------*/
//Objetos

let producto1Obj = new Producto(
  1,
  "Matafuego de 5kg ABC",
  15500,
  "/images/matafuego.jpg"
);

let producto2Obj = new Producto(2, "Chaleco", 2500, "/images/chalecos.png");

let producto3Obj = new Producto(3, "Balizas", 3000, "/images/balizas.jpg");

let producto4Obj = new Producto(4, "Paquete", 20000, "/images/paquete.jpg");

let producto5Obj = new Producto(
  5,
  "Matafuego x6 lts AK",
  32350,
  "/images/acetato.jpg"
);

let producto6Obj = new Producto(
  6,
  "Matafuego x5kg Co2",
  54000,
  "/images/co2.png"
);

let producto7Obj = new Producto(
  7,
  "Botiquin de Madera N°25",
  12500,
  "/images/botiquin.jpg"
);

let producto8Obj = new Producto(
  8,
  "Carteleria Variada",
  1000,
  "/images/carteles.png"
);

let producto9Obj = new Producto(
  9,
  "Sifon + Garrafa ",
  23000,
  "/images/sifon.png"
);

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

/*---------------------------------------------------------------------------------*/
//Variables Globales

const suma = (a, b) => a + b;
const division = (a, b) => a / b;
const iva = (x) => x * 0.21;

/*---------------------------------------------------------------------------------*/
//Funcion objetos nuevos

function Producto(id, nombreCompleto, precio, imagen) {
  this.id = id;
  this.nombre = nombreCompleto;
  this.precio = precio;
  this.imagen = imagen;
}

/*---------------------------------------------------------------------------------*/
//Funcion menu Inicial

function menuInicial() {
  let eleccion = parseInt(
    prompt("Elige una opcion: \n1-Buscar Productos\n0-Salir")
  );

  while (eleccion == 1) {
    return menuBuscador();
  }
  if (eleccion > 0 || eleccion < 1) return 0;
}
/*---------------------------------------------------------------------------------*/
//Funcion mostar Catalogo
/*
let Catalogo = document.getElementById("divCatalogo")
let botonCatalogo = document.getElementById("botonCatalogo");

botonCatalogo.onclick = () => {
  mostrarCatalogo();
  let divOcultar = document.getElementById("divBotonOcultar")

  let botonOcultar = document.createElement("button")
  
  botonOcultar.innerText= ("Ocultar Catalogo")

  botonOcultar.onclick = () =>{
    Catalogo.innerHTML = ``
  }

  botonOcultar.append(divOcultar)
};
*/


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
//Funcion de compra

function opcionDeCompra(listaProductos) {
  let condicionCompra = true;
  let opcion = 0;

  if (listaProductos == productos) {
    alert("No existen productos con ese criterio de busqueda.");
  }

  let mensaje = "Elige una opción de compra\n";

  for (let index = 0; index < listaProductos.length; index++) {
    let producto = listaProductos[index];
    mensaje += index + 1 + " - " + producto.nombre + "\n";
  }

  mensaje += "0 - Salir del Menu de compra";

  while (condicionCompra) {
    opcion = parseInt(prompt(mensaje));

    condicionCompra = !(!isNaN(opcion) && opcion > -1 && opcion < 6);

    if (condicionCompra) {
      alert("La opcion seleccionada es incorrecta");
    }
  }

  let producto = listaProductos[opcion - 1];

  return producto.id;
}
/*---------------------------------------------------------------------------------*/
//Funcion de cuotas

function calculoPago(producto, formaPago) {
  if (formaPago == 1) {
    let nroCuotas = parseInt(prompt("Ingresa la cantidad de cuotas: "));

    let total = suma(producto.precio, iva(producto.precio));
    let precioCuota = parseInt(division(total, nroCuotas));

    alert(
      "Usted pagará " +
        nroCuotas +
        " cuotas de : $" +
        precioCuota +
        "\n El precio Final es de: " +
        parseInt(total) +
        "$" +
        "\nGracias por su compra!!"
    );
  } else if (formaPago == 2) {
    alert(
      "Usted compro:\n " +
        producto.nombre +
        " por = $" +
        producto.precio +
        "\n Gracias por su compra =) "
    );
  }
}

/*---------------------------------------------------------------------------------*/
//Funcion Opciones de Pago

function opcionesDePago(producto) {
  alert("El precio del " + producto.nombre + " es : $" + producto.precio);

  let choice = prompt(
    "Desea comprar el " +
      producto.nombre +
      " en cuotas o al contado ?(Pagando al contado se le descuenta el IVA)\nSi desea:\n -Cuotas = 1\n -Contado = 2,\n -Salir del menu = 3"
  );

  return choice;
}

/*---------------------------------------------------------------------------------*/

/*
 * Storage Funcion
 */

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

/*---------------------------------------------------------------------------------*/
//Exports

export {
  productos,
  menuInicial,
  opcionDeCompra,
  calculoPago,
  opcionesDePago,
  buscarProductos,
  setearBotones,
  guardarCarritoEnElStorage,
  obtenerCarritoDelStorage,
};
/*---------------------------------------------------------------------------------*/

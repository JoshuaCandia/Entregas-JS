//Variables Globales

const suma = (a, b) => a + b;
const division = (a, b) => a / b;
const iva = (x) => x * 0.21;
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

function buscarProductos(textoBusqueda) {
  return productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(textoBusqueda)
  );
}

//Objetos

let producto1Obj = {
  id: 1,
  nombre: "Matafuego",
  precio: 15500,
  imagen: "/images/matafuego.jpg"
};

let producto2Obj = {
  id: 2,
  nombre: "Chaleco",
  precio: 2500,
  imagen: "/images/chalecos.png",
};

let producto3Obj = {
  id: 3,
  nombre: "Balizas",
  precio: 3000,
  imagen: "/images/balizas.jpg"
};

let producto4Obj = {
  id: 4,
  nombre: "Paquete",
  precio: 20000,
  imagen: "/images/paquete.jpg"
};

//Arrays
let productos = [producto1Obj, producto2Obj, producto3Obj, producto4Obj];

//Exports

export {
  menuInicial,
  opcionDeCompra,
  calculoPago,
  opcionesDePago,
  productos,
  buscarProductos,
};

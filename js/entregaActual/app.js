import {
  productos,
  buscarProductos,
  setearBotones,
  obtenerCarritoDelStorage,
  
} from "./modules.js";

/*---------------------------------------------------------------------------------*/

let buscador = document.getElementById("buscador");

let botonBuscador = document.getElementById("botonBuscador");

/*------------------------------------App------------------------------------------*/
/*
 * Storage llamada
 */
obtenerCarritoDelStorage();
/*---------------------------------------------------------------------------------*/

//Buscador de Productos

botonBuscador.onclick = () => {
  let listado = document.getElementById("listado");

  let resultados = buscarProductos(buscador.value);

  if (resultados.length > 0) {
    let productos = "<div class='productos'>";

    resultados.forEach((resultado) => {
      productos += "<div class='producto'><ul class =`ul__producto`>";
      productos +=
        "<img class='imagen__producto' src=" + resultado.imagen + " >";
      productos += "<li>Nombre: " + resultado.nombre + "</li>";
      productos += "<li>Precio: $" + resultado.precio + "</li>";
      productos += "<li class='botonProducto'></li>";
      productos += "</ul></div>";
    });

    productos += "</div>";
    listado.innerHTML = productos;

    setearBotones();
  } else {
    listado.innerHTML =
      "<p>No existen productos con el criterio de busqueda</p>";
  }
};

/*---------------------------------------------------------------------------------*/

//Catalogo Oculto
/*---------------------------------------------------------------------------------*/
//Funcion Mostrar Catalogo

function mostrarCatalogo() {
  document.getElementById("divCatalogo").style.display = "grid";
  document.getElementById("botonOcultar").style.display = "block";
  botonCatalogo.style.display = "none";
}

//Funcion Ocultar Catalogo

function ocultarCatalogo() {
  document.getElementById("divCatalogo").style.display = "none";
  document.getElementById("botonOcultar").style.display = "none";
  botonCatalogo.style.display = "block";
}

/*---------------------------------------------------------------------------------*/

let botonCatalogo = document.getElementById("botonCatalogo");

let botonOcultar = document.getElementById("botonOcultar");

botonCatalogo.onclick = () => {
  mostrarCatalogo();
};

botonOcultar.onclick = () => {
  ocultarCatalogo();
};

let divCatalogo = document.getElementById("divCatalogo");

productos.forEach((producto) => {
  let card = document.createElement("div");
  card.className = "cardCatalogo"

  card.innerHTML = `<div class ="divCatalogo" id="${producto.id}">
    <img class ="imgCatalogo" src="${producto.imagen}">
    <h3 class ="nombreCatalogo">${producto.nombre}</h3>
    <h4 class ="precioCatalogo">Precio: ${producto.precio}$</h4>
  </div>`;

  divCatalogo.appendChild(card);
});

/*---------------------------------------------------------------------------------*/

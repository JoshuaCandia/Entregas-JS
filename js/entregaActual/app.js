import { buscarProductos, setearBotones } from "./modules.js";

/*---------------------------------------------------------------------------------*/

let buscador = document.getElementById("buscador");

let botonBuscador = document.getElementById("botonBuscador");

/*------------------------------------App------------------------------------------*/

obtenerCarritoDelStorage()
/*---------------------------------------------------------------------------------*/

botonBuscador.onclick = () => {
  let listado = document.getElementById("listado");

  let resultados = buscarProductos(buscador.value);

  if (resultados.length > 0) {
    let productos = "<div class='productos'>";

    resultados.forEach((resultado) => {
      productos += "<div class='producto'><ul>";
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

let elementosAñadirAlCarrito = document.getElementsByClassName(
  "botonAñadirAlCarrito"
);

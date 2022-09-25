import { buscarProductos } from "./modules.js";



/*---------------------------------------------------------------------------------*/

let buscador = document.getElementById("buscador");

let botonBuscador = document.getElementById("botonBuscador");


/*---------------------------------------------------------------------------------*/




/*----------------------------------------*--App----------------------------------------------------*/

botonBuscador.onclick = () => {
  let listado = document.getElementById("listado");

  let resultados = buscarProductos(buscador.value);

  if (resultados.length > 0) {
    let productos = "<div class='productos'>";

    resultados.forEach((resultado) => {
      productos += "<div class='producto'><ul>";
      productos += "<img class='imagen__producto' src=" + resultado.imagen + " >"
      productos += "<li>Nombre: " + resultado.nombre + "</li>";
      productos += "<li>Precio: $" + resultado.precio + "</li>";
      productos += "<li class='botonComprar'></li>";
      productos += "</ul></div>";
    });

    productos += "</div>";
    listado.innerHTML = productos;

    let elementosComprar = document.getElementsByClassName("botonComprar");

    for (let index = 0; index < elementosComprar.length; index++) {
      const element = elementosComprar[index];

      let boton = document.createElement("button");
      boton.innerText = "Comprar";
      boton.onclick = () => {
        Swal.fire(
          'Comprado',
          'Muchas Gracias!',
          'success'
        )
      };

      element.appendChild(boton);
    }
  } else {
    listado.innerHTML =
      "<p>No existen productos con el criterio de busqueda</p>";
  }
};



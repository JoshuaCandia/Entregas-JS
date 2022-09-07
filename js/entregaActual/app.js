import {opcionDeCompra,calculoPago,opcionesDePago,condicion} from "./modules.js";


while (condicion) {
  let producto = opcionDeCompra();

  if (producto != null) {
    let formaPago = opcionesDePago(producto);

    calculoPago(producto, formaPago);
    condicion = false;
  } else {
    condicion = false;
  }
}


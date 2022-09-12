import {
  opcionDeCompra,
  calculoPago,
  opcionesDePago,
  menuInicial,
} from "./modules.js";
import { productos } from "./modules.js";

let condicion = true;
while (condicion) {
  let opcionProducto = menuInicial();

  if (opcionProducto == 0) {
    break;
  }

  let a = productos.find(function (producto) {
    return producto.id == opcionProducto;
  });

  let producto = productos.find((producto) => producto.id == opcionProducto);
  let formaPago = opcionesDePago(producto);
  calculoPago(producto, formaPago);
  break;
}

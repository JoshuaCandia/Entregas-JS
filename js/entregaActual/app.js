import {opcionDeCompra,calculoPago,opcionesDePago,opcion} from "./modules.js";
import {producto1Obj,producto2Obj,producto3Obj,producto4Obj} from "./modules.js"

let condicion = true;
while (condicion) {
  let producto = opcionDeCompra();

  if (  producto == producto1Obj || producto == producto2Obj || producto == producto3Obj || producto == producto4Obj  ) {
    let formaPago = opcionesDePago(producto);

    calculoPago(producto, formaPago);
    break;
  } else if(producto == 5){
    break
  }else{
    alert("No ingreso una opcion valida")
    continue
  }
}


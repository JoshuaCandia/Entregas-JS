import {opcionDeCompra,calculoPago,opcionesDePago, condicion,opcion} from "./modules.js";


while (condicion) {
  let producto = opcionDeCompra();

  if (  opcion == 1 || opcion == 2 || opcion == 3 || opcion == 4  ) {
    let formaPago = opcionesDePago(producto);

    calculoPago(producto, formaPago);
    break;
  } else if(opcion ==5){
    break
  }else{
    alert("No ingreso una opcion valida")
    continue
  }
}


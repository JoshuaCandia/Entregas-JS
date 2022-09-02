const suma = (a, b) => a + b;

const division = (a, b) => a / b;

const iva = (x) => x * 0.21;

const producto1 = 15500;

const producto2 = 2500;

const producto3 = 3000;

const producto4 = 20000;

let condicion = true;
let producto = '';
let precio = 0;

while (condicion) {
  let compra = opcionDeCompra();

  if (compra != 5) {
    let formaPago = opcionesDePago(producto, precio);

    calculoPago(formaPago);
    condicion = false;
  } else {
    condicion = false;
  }
}

function opcionDeCompra() {
  let opcion = parseInt(
    prompt(
      'Elige una opción de compra\n 1-Matafuego de 5kg ABC\n 2-Chaleco reflectivo\n 3-Balizas Reglamentarias\n 4-Comprar paquete entero\n 5-Salir del Menu de compra'
    )
  );

  switch (opcion) {
    case 1:
      producto = 'Matafuego de 5kg ABC';
      precio = producto1;
      break;

    case 2:
      producto = 'Chaleco reflectivo';
      precio = producto2;
      break;

    case 3:
      producto = 'Balizas Reglamentarias';
      precio = producto3;
      break;

    case 4:
      producto = 'Paquete entero';
      precio = producto4;

      break;

    case 5:
      break;

    default:
      alert('No ingreso una opcion valida');

      break;
  }

  return opcion;
}

function calculoPago(formaPago) {
  if (formaPago == 1) {
    let nroCuotas = parseInt(prompt('Ingresa la cantidad de cuotas: '));

    let total = suma(precio, iva(precio))
    let precioCuota = parseInt(division((total), nroCuotas));

    alert(
      'Usted pagará ' + nroCuotas + ' cuotas de : $' +
        precioCuota +
        '\n El precio Final es de: ' +
        parseInt(total) +
        '$' +
        '\nGracias por su compra!!'
    );
  } else if (formaPago == 2) {
    alert(
      'Usted compro:\n ' + producto + ' por = $' + precio + '\n Gracias por su compra =) '
    );
  }
}

function opcionesDePago(producto, precio) {
  alert('El precio del ' + producto + ' es : $' + precio);

  let choice = prompt(
    'Desea comprar el ' +
      producto +
      ' en cuotas o al contado ?(Pagando al contado se le descuenta el IVA)\nSi desea:\n -Cuotas = 1\n -Contado = 2,\n -Salir del menu = 3'
  );

  return choice;
}

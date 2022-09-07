const suma = (a, b) => a + b;

const division = (a, b) => a / b;

const iva = (x) => x * 0.21;

let condicion = true;

let opcion = 0

let producto1Obj = {
  nombre: 'Matafuego',
  precio: 15500,
  accion: (mensaje) => alert(mensaje)
}

let producto2Obj = {
  nombre: 'Chaleco',
  precio: 2500,
  accion: (mensaje) => console.log(mensaje)
}

let producto3Obj = {
  nombre: 'Balizas',
  precio: 3000,
  accion: (mensaje) => alert(mensaje)
}

let producto4Obj = {
  nombre: 'Paquete',
  precio: 20000,
  accion: (mensaje) => alert(mensaje)
}

let productos = [producto1Obj, producto2Obj, producto3Obj, producto4Obj];





function opcionDeCompra() {
     opcion = parseInt(
      prompt(
        'Elige una opción de compra\n 1-Matafuego de 5kg ABC\n 2-Chaleco reflectivo\n 3-Balizas Reglamentarias\n 4-Comprar paquete entero\n 5-Salir del Menu de compra'
      )
    );
  
    let index = opcion - 1;
  
    if(index > productos.length){
      return null;
    }else{
      return productos[index];
    }
  }
  
  
  
  
  function calculoPago(producto, formaPago) {
    if (formaPago == 1) {
      let nroCuotas = parseInt(prompt('Ingresa la cantidad de cuotas: '));
  
      let total = suma(producto.precio, iva(producto.precio))
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
        'Usted compro:\n ' + producto.nombre + ' por = $' + producto.precio + '\n Gracias por su compra =) '
      );
    }
  }
  
  
  
  
  
  function opcionesDePago(producto) {
    alert('El precio del ' + producto.nombre + ' es : $' + producto.precio);
  
    let choice = prompt(
      'Desea comprar el ' +
        producto.nombre  +
        ' en cuotas o al contado ?(Pagando al contado se le descuenta el IVA)\nSi desea:\n -Cuotas = 1\n -Contado = 2,\n -Salir del menu = 3'
    );
  
    return choice;
  }
  

  export {opcionDeCompra,calculoPago,opcionesDePago,condicion,opcion} 
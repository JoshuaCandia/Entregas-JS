/*
? Clase Arrays
*/

/*---------------------------------------------------------------------------------*/

/*
Todo Declaracion de Array Vacio
*/

const arrayVacio = [];
console.log(arrayVacio);
console.log("---------------------------------------------");

/*---------------------------------------------------------------------------------*/

/*
Todo Array con numeros
*/

const arrayNumeros = [1, 2, 3, 4, 5, 6];
console.log(arrayNumeros);
console.log("---------------------------------------------");

/*---------------------------------------------------------------------------------*/

/*
Todo Array variado, tambien puede tener funciones
*/

const suma = (a, b) => a + b;

const arrayVariado = [true, false, 1, "Elemento", suma(50, 32)];
console.log(arrayVariado);
console.log("---------------------------------------------");

/*---------------------------------------------------------------------------------*/

/*
Todo Declaracion de funcion Constructora
*/

function Persona(nombreCompleto, edad, ciudad) {
  this.nombre = nombreCompleto;
  this.edad = edad;
  this.ciudad = ciudad;
}
console.log("---------------------------------------------");

/*---------------------------------------------------------------------------------*/

/*
Todo Array con Objetos
*/

const obj1 = new Persona("Joshua Candia", 23, "General Pacheco");
const obj2 = new Persona("Joshua Candia", 23, "General Pacheco");
const obj3 = new Persona("Joshua Candia", 23, "General Pacheco");

const ArrayObjetos = [obj1, obj2, obj3];
console.log(ArrayObjetos);
console.log("---------------------------------------------");

/*---------------------------------------------------------------------------------*/

/*
Todo Array con Arrays
*/

const arrayConArray = [arrayVacio, arrayVariado, ArrayObjetos, arrayNumeros];
console.log(arrayConArray);

/*---------------------------------------------------------------------------------*/
//Acceso al Array
console.log(arrayNumeros[0]);
console.log(arrayVariado[5]); //Undefined porque no hay valor en la posicion 5
console.log("---------------------------------------------");

/*---------------------------------------------------------------------------------*/

/*
Todo Recorrido del Array
*/

const arrayRecorrida = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let index = 0; index < 5; index++) {
  console.log(arrayRecorrida[index]);
}
console.log("--" + "\n---" + "\n----" + "\n-----");

/*
Todo Metodo Lenght
*/

for (let index = 0; index < arrayRecorrida.length; index++) {
  const element = arrayRecorrida[index];
  console.log(element);
}

/*---------------------------------------------------------------------------------*/

/*
Todo Metodo Push
*/

const arrayPush = [1, 2, 3];
arrayPush.push("Push añado elementos al final del array");
console.log(arrayPush);
console.log("---------------------------------------------");

/*---------------------------------------------------------------------------------*/

/*
TodoMetodo unshift
*/

const arrayUnshift = [1, 2, 3];
arrayUnshift.unshift("unshift Agrego elementos al principio del array", 42);
console.log(arrayUnshift);
console.log("---------------------------------------------");

/*---------------------------------------------------------------------------------*/

/*
Todo Metodo pop
*/

const arrayPop = ["Pop elimina el ultimo elemento", 1];
arrayPop.pop();
console.log(arrayPop);
console.log("---------------------------------------------");

/*---------------------------------------------------------------------------------*/

/*
Todo Metodo shift
*/

const arrayShift = [1, "Shift Elimina el primer elemento"];
arrayShift.shift();
console.log(arrayShift);
console.log("---------------------------------------------");

/*---------------------------------------------------------------------------------*/

/*
Todo Metodo Splice
*/

const arraySplice = [
  1,
  2,
  3,
  4,
  "Splice pide la posicion a borrar y" + "cuantas borrar desde ahi",
  1,
  2,
  3,
];
console.log(arraySplice);
arraySplice.splice(0, 2);
console.log(arraySplice);
console.log("---------------------------------------------");

/*---------------------------------------------------------------------------------*/

/*
Todo Metodo Join
*/

const arrayJoin = [
  "Join",
  "Permite",
  "Separar",
  "Elementos",
  "con cualquier valor",
];
console.log(arrayJoin.join(", "));
console.log(arrayJoin.join("///"));
console.log(arrayJoin.join("_-_-_-"));
console.log("---------------------------------------------");

/*---------------------------------------------------------------------------------*/

/*
Todo Metodo Concat
*/
const arrayConcat = [
  "Concat",
  "Nos deja",
  "Concatenar dos Arrays",
  "En uno solo",
];
const arrayConcat2 = ["Guardando la concatenacion", "en una", "variable nueva"];

const arrayConcatenado = arrayConcat.concat(arrayConcat2);
console.log(arrayConcatenado);
console.log("---------------------------------------------");

/*---------------------------------------------------------------------------------*/

/*
Todo Metodo Slice
*/
const nombres = [
  "Ana",
  "Pedro",
  "Juan",
  "Metodo slice no se utiliza mucho",
  "Marta",
];
const nombresMasculinos = nombres.slice(1, 4);
console.log(nombresMasculinos);
console.log("---------------------------------------------");

/*---------------------------------------------------------------------------------*/

/*
Todo Metodo IndexOf
*/
const ArrayIndexOf = ["Rita", "Julieta", "Maria", "Marta", "Julio"];
console.log("IndexOf nos dice la posicion del elemento");
console.log(ArrayIndexOf.indexOf("Marta"));
console.log(" Si no encuentra el elemento devuelve -1");
console.log(ArrayIndexOf.indexOf("Marcos"));
console.log("---------------------------------------------");

/*---------------------------------------------------------------------------------*/

/*
Todo Metodo Includes
*/

const arrayIncludes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(
  "El metodo Includes busca el valor dentro del array y devuelve un boolean"
);
console.log(arrayIncludes.includes(3));
console.log(arrayIncludes.includes(29));
console.log("---------------------------------------------");

/*---------------------------------------------------------------------------------*/

/*
Todo Metodo Reverse
*/

const arrayReverse = ["julio", "miguel", "hernan", "ignacio", "hernan"];
console.log(arrayReverse);
console.log("El metodo reverse reordena el array, y lo modifica");
arrayReverse.reverse();
console.log(arrayReverse);
console.log("---------------------------------------------");

/*
 ?------------------------------Array de Objetos-----------------------------------
*/

/*
Todo Declaracion de funcion constructora
*/

function Producto(nombreCompleto, precio) {
  this.nombre = nombreCompleto;
  this.precio = precio;

  /*
   * Declaracion de Metodo personalizado
   */

  this.mostrarDatos = function () {
    console.log(`El nombre del producto es ${this.nombre},y su precio es 
    de${this.precio}`);
  };
}

/*---------------------------------------------------------------------------------*/

/*
Todo Declaracion de objetos
*/

const product1 = new Producto("Matafuego x5 kg ABC", 5000);
const product2 = new Producto("Balizas Homologadas", 2500);
const product3 = new Producto("Chaleco Reflectivo", 1500);
const product4 = new Producto("Cuarta para Remolque", 2000);
const product5 = new Producto("Soporte para Matafuego", 800);
const product6 = new Producto("Carteles varios", 500);

/*---------------------------------------------------------------------------------*/

/*
 *Array vacia
 */

const stock = [];
stock.push(product1, product2, product3, product4, product5, product6);
console.log(stock);

console.log("---------------------------------------------");

/*---------------------------------------------------------------------------------*/
/*
Todo  Sentencia For...Of
*/

const productos = [
  { id: 1, producto: "Arroz" },
  { id: 2, producto: "Leche" },
  { id: 3, producto: "Huevos" },
];

console.log("Con el for Of recorremos un array y devuelve el valor deseado");
for (const producto of productos) {
  console.log(producto.id);
  console.log(producto.producto);
}

console.log("---------------------------------------------");

for (let producto of stock) {
  /*
   * Ejecucion del metodo personalizado
   */

  producto.mostrarDatos();
}

console.log("---------------------------------------------");

/*---------------------------------------------------------------------------------*/

/*
Todo Practica individual
*/

/*
 *  Funcion constructora
 */

function Personas(nombre, apellido, colorDePelo, colorDeOjos, altura, peso) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.colorDePelo = colorDePelo;
  this.colorDeOjos = colorDeOjos;
  this.altura = altura;
  this.peso = peso;

  /*
   *  Declaracion de Metodo personalizado
   */

  this.datosUsuario = function () {
    console.log(
      `El nombre es ${this.nombre} y el apellido es ${this.apellido},tiene el pelo de color ${this.colorDePelo} y los ojos de color ${this.colorDeOjos},mide ${this.altura} y pesa ${this.peso} kg`
    );
  };
}

const objetoPersona1 = new Personas(
  "Joshua",
  "Candia",
  "negro",
  "marron",
  1.9,
  92
);

const objetoPersona2 = new Personas(
  "Sofia",
  "Alfonzo",
  "marron",
  "marron",
  1.6,
  53
);

const objetoPersona3 = new Personas(
  "Melanie",
  "Candia",
  "marron",
  "marron",
  1.75,
  90
);

const objetoPersona4 = new Personas(
  "Naomi",
  "Candia",
  "marron",
  "marron",
  1.61,
  60
);

const familia = [];
familia.push(objetoPersona1, objetoPersona2, objetoPersona3, objetoPersona4);
console.log(familia);
console.log("---------------------------------------------");
console.log(familia.slice(0, 3));
console.log("---------------------------------------------");

for (let miembro of familia) {
  // console.log(miembro.nombre)
  // console.log(`${miembro.apellido}  ${miembro.altura} ${miembro.colorDeOjos} ${miembro.colorDePelo}  ${miembro.peso}`)
  /*
   * Ejecucion del metodo personalizado
   */
  miembro.datosUsuario();
}
console.log("-------------------------------------");

/*
!--------------------------------Funciones de orden Superior---------------------------------
*/
console.log("Funciones de Orden Superior");
console.log("-------------------------------------");
/*
Todo  Retornar Funciones
*/

/*
Todo #Ejemplo 1
*/

function mayorQue(n) {
  return (m) => m > n;
}

/*
 * Declaramos el valor a ser medido en otra variable
 */

let mayorQueDiez = mayorQue(10);

//Lo imprimimos en consola

console.log(mayorQueDiez(12));
console.log(mayorQueDiez(8));
console.log(mayorQueDiez(10));
console.log("---------------------------------------------");

/*
 * Podemos asignarle el valor que queramos
 */

let mayorQueVeinte = mayorQue(20);

console.log(mayorQueVeinte(19));
console.log(mayorQueVeinte(21));
console.log("---------------------------------------------");

/*---------------------------------------------------------------------------------*/

/*
Todo #Ejemplo 2
*/

function asignarOperacion(op) {
  if (op == "sumar") {
    return (a, b) => a + b;
  } else if (op == "restar") {
    return (a, b) => a - b;
  }
}

let sumar = asignarOperacion("sumar");
let restar = asignarOperacion("restar");

console.log(sumar(4, 6));
console.log(restar(20, 10));
console.log("---------------------------------------------");

/*---------------------------------------------------------------------------------*/

/*
Todo Recibir Funciones como Parametro
*/

/*
Todo #Ejemplo 1
*/

function porCadaUno(arr, funct) {
  for (const el of arr) {
    funct(el);
  }
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(`La funcion Recibe un array como primer parametro y una funcion
como segundo parametro, recorre el array por el for of y, por cada elemento
hace un llamado a la funcion mencionada enviando el elemento por parametro`);

porCadaUno(numeros, console.log);

console.log("---------------------------------------------");

let total = 0;

function acumular(num) {
  total += num;
}

console.log(`En este caso, la funcion va a sumar cada numero iterado del array

`);
porCadaUno(numeros, acumular);
console.log(total);

console.log("---------------------------------------------");

/*
!----------------------Metodos de Busqueda y Transformacion-----------------------
*/

/*
Todo Ejemplo function que consulte al usuario opcion deseada
*/

/*
 * <<<<<<<<<<<<Declaracion de Objetos>>>>>>>>>>>>
 */
const lib1 = new libros(1, "Peter Pan", "James Matthew Barrie", 1911, 10500);

const lib2 = new libros(2, "Sherlock Holmes", "Arthur Conan Doyle", 1892, 3200);

const lib3 = new libros(3, "Cien Años de Soledad", "G. García M.", 1967, 5430);

const lib4 = new libros(4, "1984", "George Orwell", 1949, 2500);

const lib5 = new libros(5, "El Alquimista", "Paulo Coelho", 1988, 2000);

const lib6 = new libros(6, "Muerte en el Nilo", "Agatha Christie", 1937, 7900);

const libreria = [];
libreria.push(lib1, lib2, lib3, lib4, lib5, lib6);

/*---------------------------------------------------------------------------------*/

/*
 * Funciones Globales
 */

/*
 *<<<<Mostar Catalogo>>>>
 */

function mostrarCatalogo(arr) {
  arr.forEach((libro) => {
    libro.mostrarDatos();
  });
}

/*
 *<<<<Buscar Por Titulo>>>>
 */

function buscarPorTitulo() {
  let tituloBuscado = prompt("Ingrese el titulo que desea encontrar"); //Prompt
  let tituloEncontrado = libreria.find(
    (titulo) => titulo.titulo.toLowerCase() == tituloBuscado.toLowerCase()
  );
  if (tituloEncontrado == undefined) {
    alert("No se encontro su libro");
  } else {
    console.log(tituloEncontrado);
  }
}

/*
 *<<<<Buscar libros del mismo Autor>>>>
 */

// function librosDelMismoAutor() {
//   let buscarAutor = prompt("Ingrese el autor que desea encontrar");
//   let busqueda = libreria.filter(
//     (book) => book.autor.toLowerCase() == buscarAutor.toLowerCase()
//   );

//   if (busqueda.length == 0) {
//     console.log("No se encontro ningun libro de este autor");
//   } else {
//     console.log("Las coincidencias con este autor son:");
//     for (const libroHallado of busqueda) {
//       libroHallado.mostrarDatos
//     }
//   }
// }

/*
 *<<<<Funcion Menu>>>>
 */

function menu(opcionSeleccionada) {
  switch (opcionSeleccionada) {
    case 0:
      salir = true;
      alert(`Gracias por visitarnos,vuelva pronto :D`);
      break;
    case 1:
      console.log(`Todos los titulos de nuestro catalogo estan disponibles

      `);
      mostrarCatalogo(libreria);
      alert("En la consola puede ver el catalogo");

      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
      buscarPorTitulo();
      break;
    case 5:
      // librosDelMismoAutor();
      break;
    case 6:
      break;

    default:
      break;
  }
}

/*
 * <<<<<<<<<<<<Declaracion de Funcion Constructora>>>>>>>>>>>>
 */
function libros(id, titulo, autor, añoDePublicacion, precio) {
  this.id = id;
  this.titulo = titulo;
  this.autor = autor;
  this.añoDePublicacion = añoDePublicacion;
  this.precio = precio;

  /*
   * Metodo Personalizado
   */

  this.mostrarDatos = function () {
    console.log(`El nombre del libro es ${this.titulo},y su precio es
    de $${this.precio}`);
  };
}



/*
 * <<<<<<<<Opcion del Usuario>>>>>>>>
 */

// let opcion = parseInt(
//   prompt(`Ingrese el numero de la opcion que desea:
// 1 - Ver catálogo de libros
// 2 - Agregar un libro a nuestro catálogo
// 3 - Eliminar un libro de nuestro catálogo
// 4 - Encontrar por titulo
// 5 - Buscar libros de un mismo autor
// 0 - Salir del menú`)
// );

/*
 * <<<<<<<<Invocación de funcion>>>>>>>>
 */

/*
 * <<<<<<<<Agregar Libro>>>>>>>>
 */

function nuevoLibro() {
  let tituloIngresado = prompt("Ingrese titulo");
  let autorIngresado = prompt("Ingrese el autor");
  let añoIngresado = parseInt(prompt("Ingrese año de publicacion"));
  let precioIngresado = parseInt(prompt("Ingrese el Precio"));
  let libroCreado = new libros(
    libreria.length,
    tituloIngresado,
    autorIngresado,
    añoIngresado,
    precioIngresado
  );

  console.log(libroCreado);
  libreria.push(libroCreado);
  console.log(libreria);
}
/*---------------------------------------------------------------------------------*/

/*
Todo Metodo For Each itera sobre el array y ejecuta la funcion parametro en los elem
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

console.log(
  "Con For each por cada elemento del array realiza la operacion deseada"
);

numbers.forEach((parametro) => {
  //Ejecuta instrucciones deseadas
  if (parametro % 3 == 0) {
    console.log(parametro + " Es multiplo de 3");
  }
});
console.log("---------------------------------------------");

/*
 * Ejemplo 2
 */
stock.forEach((product) => {
  console.log(
    `
  ${product.nombre}
  ${product.precio}
  `
  );
});

console.log("---------------------------------------------");

/*---------------------------------------------------------------------------------*/

/*
Todo Metodo Find
*/

const cursos = [
  { nombre: "Javascript", precio: 15000 },
  { nombre: "ReactJS", precio: 22000 },
  { nombre: "AngularJS", precio: 22000 },
  { nombre: "Desarrollo Web", precio: 16000 },
];

console.log(`
Find busca en el array y retorna el primer elemento que encuentra

`);

const resultadoFind = cursos.find((el) => el.nombre === "ReactJS");
const resultadoFind2 = cursos.find((el) => el.nombre === "DW");

console.log(resultadoFind);
console.log(resultadoFind2);

console.log("---------------------------------------------");

let resultado = numeros.find((elem) => elem > 5);

console.log(resultado);

console.log("---------------------------------------------");

let autorEncontrado = libreria.find(
  (libro) => libro.autor === "James Matthew Barrie"
);
console.log(autorEncontrado);

console.log("---------------------------------------------");

console.log("---------------------------------------------");

/*---------------------------------------------------------------------------------*/
/*
Todo Metodo Filter
*/

const resultadoFilter = cursos.filter((el) => el.nombre.includes("JS"));
const resultadoFilter2 = cursos.filter((el) => el.precio < 14000);

console.log(resultadoFilter);
console.log(resultadoFilter2);

console.log("---------------------------------------------");

/*---------------------------------------------------------------------------------*/
/*
Todo Metodo Some
*/

console.log(cursos.some((el) => el.nombre == "Desarrollo Web"));
//true

console.log(cursos.some((el) => el.nombre == "VueJS"));
//false

console.log("---------------------------------------------");

/*---------------------------------------------------------------------------------*/
/*
Todo Metodo Map
*/

const names = cursos.map((el) => el.nombre);
console.log(names);

console.log("---------------------------------------------");

console.log(
  "El metodo map devuelve una nueva array con los valores actualizados"
);
const actualizado = cursos.map((el) => {
  return {
    nombre: el.nombre,
    precio: el.precio * 1.25,
  };
});
console.log(actualizado);

/*---------------------------------------------------------------------------------*/

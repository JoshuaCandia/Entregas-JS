/*
!              <<<<<<<<------------DOM Y EVENTOS------------>>>>>>>>
*/

/*---------------------------------------------------------------------------------*/

/*
Todo Acceso a los Nodos con
* getElementbyId()
* getElementsbyClassName()
* getElementbyTagName()
*/

/*---------------------------------------------------------------------------------*/

/*
Todo Primera forma getElementById
*/

const titulo = document.getElementById("tituloPrincipal");
console.log(titulo);

console.log("---------------------------------------------");

/*---------------------------------------------------------------------------------*/

/*
Todo Segunda forma getElementsByClass
*/

let subtitulo = document.getElementsByClassName("subtitulo");

console.log(subtitulo);

console.log("---------------------------------------------");

let paises = document.getElementsByClassName("paises");
console.log(paises);

console.log("---------------------------------------------");

for (const cadaPais of paises) {
  console.log(cadaPais);
}

console.log("---------------------------------------------");

/*---------------------------------------------------------------------------------*/

/*
Todo Mediante getElementByTagName
*/

let elementosH5 = document.getElementsByTagName("h5");
console.log(elementosH5);

console.log("---------------------------------------------");

/*---------------------------------------------------------------------------------*/

/*
Todo Modificar Nodos Inner Text e InnerHTML
*/

let title = document.getElementById("titulo");
console.log(title.innerText);

title.innerText = "Hola Fantasmines";

console.log("----------------Sumar texto con innerText---------------------");

let variablePaises = document.getElementsByClassName("paises");

for (const cadaPais of paises) {
  cadaPais.innerText += " es un pais de sudamerica";
  console.log(cadaPais.innerText);
}

console.log("---------------------------------------------");

/*---------------------------------------------------------------------------------*/

/*
Todo InnerHTML
*/

let container = document.getElementById("contenedorPractica");

container.innerHTML = `<h2>Hola Mundo</h2><p>Elemento creado con jS</p>`;

console.log("-------------------Agregar una ciudad -----------------------");

let citys = document.getElementById("listaCiudades");

citys.innerHTML += `
<li class ="citys"> General Pacheco </li>
<li class ="citys"> San Martin </li>
<li class ="citys"> Las Tunas </li>
<li class ="citys"> San Isidro </li>
<p> Esto y mucho mas con innerHtml </p>
`;

modificarCitys = document.getElementsByClassName("citys");

for (const ciudades of modificarCitys) {
  ciudades.innerText += ` es una ciudad `;
}

console.log("---------------------------------------------");

/*---------------------------------------------------------------------------------*/

/*
Todo Query Selector
*/

let metodoQueryParrafo = document.querySelector("#contenedorPractica p");
let contenedorQuery = document.querySelector("#contenedorPractica");
let parrafo = document.querySelector(".texto");

console.log(metodoQueryParrafo.innerText);

console.log(contenedorQuery.innerText);

console.log("---------------------------------------------");

console.log(
  "Query selector All devuelve todos y el normal devuelve el primero"
);

console.log("---------------------------------------------");

/*---------------------------------------------------------------------------------*/

/*
Todo Creacion de Elementos
*/
/*
let texto = document.createElement("p");

texto.innerHTML = "<h2>Hola Gente!</h2>";

document.body.append(texto);
*/
console.log("---------------------------------------------");

listaPaises = document.getElementById("listaPaises");

console.log(listaPaises);

let nuevoLi = document.createElement("li");
nuevoLi.innerText = "San Pablo";

console.log(nuevoLi);

citys.appendChild(nuevoLi);

let nuevoPaisVen = document.createElement("li");

nuevoPaisVen.innerText = "Venezuela";
nuevoPaisVen.setAttribute("class", "paises");

listaPaises.append(nuevoPaisVen);

console.log("---------------------------------------------");

/*---------------------------------------------------------------------------------*/

/*
Todo Eliminar Elementos
*/

titulo.remove();

/*
 *Removido cuando esta capturado con html Collection, debo indicar el indice para remover
 */
subtitulo[0].remove();

paises[2].remove();

/*
 * Asi removemos todo de un html collection

for (const removerPaises of paises) {
  removerPaises.remove();
}
 */
console.log("---------------------------------------------");

/*---------------------------------------------------------------------------------*/

/*
Todo Practica #1
*/
/*
const listaNombres = [
  "Joshua",
  "Melanie",
  "Naomi",
  "Evelyn",
  "Sofia",
  "Elsa",
  "Jenny",
  "Adrian",
];

let listaPersonas = document.getElementById("personas");

for (const nombres of listaNombres) {
  let li = document.createElement("li");
  li.innerText = nombres;
  listaPersonas.appendChild(li);
  li.setAttribute("class", "listaPersonas");
}

let ciudades2 = document.getElementsByClassName("ciudades");
console.log(ciudades2);
*/
console.log("---------------------------------------------");

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

/*
 * <<<<<<<<<<<<Declaracion de Funcion Constructora>>>>>>>>>>>>
 */
function libros(id, titulo, autor, añoDePublicacion, precio, imagen) {
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

/*---------------------------------------------------------------------------------*/

/*
Todo Crear Card Con los datos
 de los objetos
*/

function mostrarCatalogo() {
  let bootstrapCard = document.getElementById("bootstrapCard");
let card = ``;
libreria.forEach((libro) => {
  let card = document.createElement("div");



  card.innerHTML = `<div id=${libro.id} class="card" style="width: 18rem">
<img class="card-img-top" style="height: 250px" src="/images/gatito.jpg" alt="Card image cap" />
<div class="card-body">
  <h4 class="card-title">${libro.titulo}</h4>
  <h5 class="card-title">De ${libro.autor}</h5>
  <p class="card-text">
    Este libro fue publicado en ${libro.añoDePublicacion} 
    Tiene un valor de ${libro.precio}
  </p>
  <a href="#" class="btn btn-primary">Comprar Ahora</a>
</div>
</div>`;

  bootstrapCard.append(card);
});
}




console.log("---------------------------------------------");

/*---------------------------------------------------------------------------------*/

/*
Todo 
*/

console.log("---------------------------------------------");

/*---------------------------------------------------------------------------------*/

/*
Todo 
*/

console.log("---------------------------------------------");

/*---------------------------------------------------------------------------------*/

/*
Todo 
*/

console.log("---------------------------------------------");

/*---------------------------------------------------------------------------------*/

/*
Todo 
*/

console.log("---------------------------------------------");

/*---------------------------------------------------------------------------------*/

/*
Todo 
*/

console.log("---------------------------------------------");

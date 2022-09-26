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

const titulo = document.getElementById("tituloPrincipal")
console.log(titulo)

console.log("---------------------------------------------");

/*---------------------------------------------------------------------------------*/

/*
Todo Segunda forma getElementsByClass
*/

let subtitulo = document.getElementsByClassName("subtitulo")

console.log(subtitulo)

console.log("---------------------------------------------");

let paises = document.getElementsByClassName("paises")
console.log(paises)

console.log("---------------------------------------------");

for (const cadaPais of paises) {
    console.log(cadaPais)
}

console.log("---------------------------------------------");

/*---------------------------------------------------------------------------------*/

/*
Todo Mediante getElementByTagName
*/

let elementosH5 = document.getElementsByTagName("h5")
console.log(elementosH5)

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


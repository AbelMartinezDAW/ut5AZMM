/*
Ejercicio 2 (Creación de elementos)

Descarga y descomprime la web Tarea_UT5_2

Completa el archivo ejercicio2.js para crear los siguientes elementos en la web:



1. Un título con tu nombre.

2. Un elemento contenedor, que contendrá los artículos de la tienda.

3. Cada artículo contiene un nombre, una descripción, un precio y una imagen. Estos datos los leemos 

del array datos, que tenemos disponible en el archivo datos.js y ya se encuentra cargado en la web

4. Añade las clases necesarias a los elementos y completa el archivo estilos.css para conseguir un aspecto similar al del enunciado.

NOTA: El ejemplo contiene 8 artículos, pero el código generado debería funcionar con cualquier número de artículos.



No es necesario editar el archivo .html
*/


window.onload = function() {

//1. Un título con tu nombre.

//Creamos una variable donde almacenar el elemento que vamos a crear, en este caso un h1
let titulo = document.createElement("h1");
//introducimos texto en el elemento:
titulo.textContent = "Ejercicio de Abel Zacarías Martínez Mounir";
//Introducimos el elemento en el body del HTML:
document.body.appendChild(titulo);



//2. Crear un contenedor que contendrá los artículos de la tienda:
//Creamos una variable donde almacenar el elemento que vamos a crear, en este caso un div:
let contenedor = document.createElement("div");
//Añadimos la clase para el archivo css con ClassList.add:
contenedor.classList.add("contenedor");
//Lo introducimos en el body como enm el ejercicio 1:
document.body.appendChild(contenedor);

//3. Cada artículo contiene un nombre, una descripción, un precio y una imagen. Estos datos los leemos del array datos, que tenemos disponible en el archivo datos.js y ya se encuentra cargado en la web:
////Hacemos el apartado 4 añadiendo las clases correspondientes a cada elemento a continuación también:
//Recorremos el array que contiene el archivo datos.js:
for (let i = 0; i < datos.length; i++) {
    //Vamos creando variables para cada dato y creando el elemento correspondeinte a cada dato del array:
    let articulo = document.createElement("div");
    //Le añadimos la clase correspondiente a los divs que son los articulos:
    articulo.classList.add("articulo");
    //Creamos el h2 con el dato del arrray correspondiente:
    let nombre = document.createElement("h2");
    //Añadimos el texto con el dato del array correspondiente
    nombre.textContent = datos[i].nombre;

    //Creamos el elemento y le añadimos el dato del array correspondiente:
    let descripcion = document.createElement("p");
    descripcion.textContent = datos[i].descripcion;

    //Creamos el elemento y le añadimos el dato del array correspondiente:
    let precio = document.createElement("p");
    //Le añadimos el dato con el formato:
    precio.textContent =  datos[i].precio + " €";

    //Creamos el elemento img y le asignamos los atributos desde los datos del array:
    let imagen = document.createElement("img"); // Creamos una etiqueta <img>
    imagen.src = datos[i].imagen; //Le asignamos la imagen del producto
    imagen.alt = datos[i].nombre; //Agregamos un texto alternativo con el nombre del producto

    //Añadimos los elementos al artículo:
    articulo.append(nombre, descripcion, precio, imagen);

    //Añadimos el artículo al contenedor principal
    contenedor.appendChild(articulo);
}



}
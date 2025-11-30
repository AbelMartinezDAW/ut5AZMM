//Utilizamos en objeto window con el método .onload para que se cargue la página antes de ejecutar los scripts.

//1.-Modifica el contenido del título, poniéndole tu nombre.

//2.-Modifica la imagen que muestra el segundo artículo artículo

//3.-Oculta el último articulo.

//4.-Recorre los artículos y añade al inicio de la cabecera el número de noticia (1- Hospitalizado...)

//5.-Añade la clase cabecera (ya esta declarada en los estilos), al primer div de cada artículo.

//6.-Busca en todos los artículos donde aparece la cadena "Servicio Murciano de Salud", y sustitúyela por "S.M.S" (¿método replace de cadenas?).



//Introducimos todo el código para que cargue primero todo el documento y luego se incorporen los cambios que vamos a realizar:
window.onload = function (){


//1.-Modifica el contenido del título, poniéndole tu nombre:


//Obtenemos el elemento con id y cambiamos el texto contenido a nuestro nombre:
document.getElementById("titulo").textContent = "Abel Zacarias Martinez Mounir";


//2.-Modifica la imagen que muestra el segundo artículo:

//Obtenemos el elemento por el tag name "img" y ponemos el "1" para referirnos al segundo elemento en orden, pondríamos "0" para el primero:
//accedemos al atributo "src" y ponemos la nueva imagen:   (He repetido la imagen 3 para que se aprecie el cambio de imagen en vez de añadir una nueva, pero con cualquiera que se añada valdría)
document.getElementsByTagName("img")[1].src = "noticia3.jpg";

//3.-Oculta el último articulo.

//Guardamos en una variable nueva, los articulos del documento.
let articulos = document.getElementsByTagName("article");

//Seleccionamos el articulo que queremos, en este caso el último, restando 1 a la longitud/cantidad de elementos articulo que existen en el documento.
//Por último entramos en style.display del articulo para configurar como se muestra, y ponemos none para que lo oculte:
articulos[articulos.length - 1].style.display = "none";


//4.-Recorre los artículos y añade al inicio de la cabecera el número de noticia (1- Hospitalizado...)

//Creamos una variable donde almacenaremos todas los articulos del documento:
let cabeceras = document.getElementsByTagName("article");
//Posteriormente recorremos todos los elementos con un for:
//i es igual a 0, mientras i sea menor que el numero de cabeceras del documento, itera una vez y suma 1 a i: 
for (let i = 0; i < cabeceras.length; i++) {
    //Variable donde almacenamos el div correspondiente mediante el querySelector:
    let div = cabeceras[i].querySelector("div");
    //modificamos el contenido del div sumandole el valor de i + 1 y el texto que ya lleva en su interior:
    div.textContent = (i + 1) + "- " + div.textContent;
}


//5.-Añade la clase cabecera (ya esta declarada en los estilos), al primer div de cada artículo.

//Volvemos a incorporar todas las cabeceras del documento en una variable:
let cabeceras2 = document.getElementsByTagName("article");

//Volvemos a recorrer todos los elementos guardados en la variable:
for (let i = 0; i < cabeceras2.length; i++) {

    //En este caso seleccionamos el div como en el ejercicio anterior y cambiamos su clase accediendo al metodo classList.add:
    cabeceras[i].querySelector("div").classList.add("cabecera");
}



//6.-Busca en todos los artículos donde aparece la cadena "Servicio Murciano de Salud", y sustitúyela por "S.M.S" (¿método replace de cadenas?).

//Almacenamos en una variable todo el contenido del cuerpo de los articulos utilizando el método getElementByClassName:
let cuerpos = document.getElementsByClassName("cuerpo");
//Volvemos a recorrer todos los elementos de la variable:
for (let i = 0; i < cuerpos.length; i++) {

    //Utilizamos el método innerHTML en el cuerpo en el que estamos en esta iteración:
    //Sustituimos con el método .replace el texto que queremos cambiar por S.M.S:
    cuerpos[i].innerHTML = cuerpos[i].innerHTML.replace(/Servicio Murciano de Salud/g, "S.M.S");
}


}
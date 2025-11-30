//Creamos las variables donde guardaremos los elementos que voy a usar:
let nombre = document.getElementById("nombre");
let apellidos = document.getElementById("apellidos");
let botonAnadir = document.getElementById("anadir");
let botonEliminar = document.getElementById("eliminar");
let zonaError = document.getElementById("error");
let tabla = document.getElementById("lista");

//Creamos la función para limpiar el mensaje de error cada vez que hacemos algo, para que no aparezca un error anterior:
function limpiarError() {
    zonaError.innerHTML = "";
}

//Creamos la función para comprobar si una persona ya está en la tabla:
function existePersona(nombreValor, apellidosValor) {
    //Cojo todas las filas de la tabla mediante el tagname:
    let filas = tabla.getElementsByTagName("tr");

    //Recorro cada fila una por una con un bucle for:
    for (let i = 0; i < filas.length; i++) {
        //En cada fila, cojo las celdas de nuevo con el tagname:
        let celdas = filas[i].getElementsByTagName("td");

        //Compruebo si el nombre y apellidos ya están escritos en la tabla:
        if (celdas[0].textContent === nombreValor && celdas[1].textContent === apellidosValor) {
            return true;
        }
    }
    return false;
}

//Creamos la función para cuando pulsen el botón "Añadir":
botonAnadir.addEventListener("click", function() {
    //Leo lo que hay escrito en los campos:
    let n = nombre.value.trim();
    let a = apellidos.value.trim();

    //Limpio cualquier error anterior con la función anterior:
    limpiarError();

    //Si alguno de los dos campos está vacío, rellenamos el error:
    if (n === "" || a === "") {
        zonaError.textContent = "Error: debes rellenar ambos campos.";
        return; // Salgo de la función
    }

    //Si ya existe esa persona rellenamos de nuevo el error:
    if (existePersona(n, a)) {
        zonaError.textContent = "Error: esa persona ya está en la lista.";
        return;
    }

    //Si llegamos a esta parte significa que todo está correcto, por lo que creamos una nueva fila:
    let fila = document.createElement("tr");

    //Creamos la celda del nombre:
    let celdaNombre = document.createElement("td");
    celdaNombre.textContent = n;

    //Creamos la celda del apellido:
    let celdaApellidos = document.createElement("td");
    celdaApellidos.textContent = a;

    //Añado las celdas a la fila:
    fila.appendChild(celdaNombre);
    fila.appendChild(celdaApellidos);

    //Añado la fila a la tabla:
    tabla.appendChild(fila);

    //Limpio los campos:
    nombre.value = "";
    apellidos.value = "";
});

//Creamos la función para cuando pulsan el botón "Eliminar":
botonEliminar.addEventListener("click", function() {
    let n = nombre.value.trim();
    let a = apellidos.value.trim();

    //Limpiamos el error de nuevo:
    limpiarError();
    //De nuevo si está vacío rellenamos el error:
    if (n === "" || a === "") {
        zonaError.textContent = "Error: debes rellenar ambos campos.";
        return;
    }

    //Busco si la persona está en la tabla:
    let filas = tabla.getElementsByTagName("tr");
    let encontrada = false;

    //Recorro todas las filas de nuevo con un bucle for:
    for (let i = 0; i < filas.length; i++) {
        let celdas = filas[i].getElementsByTagName("td");

        //Si coincide nombre y apellidos:
        if (celdas[0].textContent === n && celdas[1].textContent === a) {
            //borro la fila:
            tabla.removeChild(filas[i]);
            encontrada = true;
            break;
        }
    }

    //Si no la encuentra:
    if (!encontrada) {
        zonaError.textContent = "Error: esa persona no existe.";
    } else {
        //Si se ha borrado, limpiamos los campos:
        nombre.value = "";
        apellidos.value = "";
    }
});

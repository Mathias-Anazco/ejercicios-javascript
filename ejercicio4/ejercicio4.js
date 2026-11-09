
function agregarTarea() {
    
    let tarea = document.forms["tareas"]["tarea"].value;

    // Quitamos espacios al inicio y al final
    tarea = tarea.trim();

    // Validamos que no esté vacía
    if (tarea === "") {
        document.getElementById("mensaje").textContent =
            "Error: Escribe una tarea";
        return false;
    }

    // Limpiamos el mensaje de error
    document.getElementById("mensaje").textContent = "";

    // Creamos un elemento de lista
    let li = document.createElement("li");

    // Creamos una casilla de verificación
    let casilla = document.createElement("input");
    casilla.type = "checkbox";

    // Creamos el texto de la tarea
    let texto = document.createElement("span");
    texto.textContent = tarea;

    // Detectamos cuando se marca o desmarca
    casilla.addEventListener("change", function() {

        if (casilla.checked) {
            texto.classList.add("completada");
        } else {
            texto.classList.remove("completada");
        }

    });

    // Agregamos la casilla y el texto a la tarea
    li.appendChild(casilla);
    li.appendChild(texto);

    // Agregamos la tarea a la lista
    document.getElementById("listaTareas").appendChild(li);

    // Limpiamos el campo de texto
    document.forms["tareas"]["tarea"].value = "";

    return false;
}

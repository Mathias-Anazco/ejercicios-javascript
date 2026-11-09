
function verificarContrasena() {

    let contrasena = document.forms["formulario"]["contrasena"].value;

    let tieneLongitud = contrasena.length >= 8;

    if (tieneLongitud) {
        document.getElementById("longitud").textContent = "Cumple: Tiene al menos 8 caracteres";
    } else {
        document.getElementById("longitud").textContent = "No cumple: Debe tener al menos 8 caracteres";
    }

    let tieneNumero = false;

    for (let i = 0; i < contrasena.length; i++) {
        if (contrasena[i] >= "0" && contrasena[i] <= "9") {
            tieneNumero = true;
            break;
        }
    }

    if (tieneNumero) {
        document.getElementById("numero").textContent = "Cumple: Contiene un número";
    } else {
        document.getElementById("numero").textContent = "No cumple: Debe contener un número";
    }

    let tieneEspacios = contrasena.includes(" ");

    if (!tieneEspacios) {
        document.getElementById("espacios").textContent = "Cumple: No contiene espacios";
    } else {
        document.getElementById("espacios").textContent = "No cumple: Contiene espacios";
    }

    if (tieneLongitud && tieneNumero && !tieneEspacios) {
        document.getElementById("resultado").textContent = "Cumple todas las reglas";
    } else {
        document.getElementById("resultado").textContent = "No cumple todas las reglas";
    }

    return false;
}

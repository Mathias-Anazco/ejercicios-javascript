
function calcularTotal() {

    let precio = document.forms["compra"]["precio"].value;
    let cantidad = document.forms["compra"]["cantidad"].value;

    if (precio === "" || cantidad === "") {
        document.getElementById("resultado").textContent = "Error: Completa todos los campos";
        return false;
    }

    if(Number(precio) <= 0){
        document.getElementById("resultado").textContent = "Error: El precio debe ser mayo que cero";
        return false;
    }

    if(Number(cantidad) <= 0 || !Number.isInteger(Number(cantidad))){
        document.getElementById("resultado").textContent = "Error: La cantidad debe ser entero positivo";
        return false;
    }

    let total = Number(precio) * Number(cantidad);

    document.getElementById("resultado").textContent = total.toFixed(2);

    return false;
}

function analizarNotas() {
    let notas = [8, 6, 9, 7, 5, 10, 4, 7];

    let suma = 0;
    let maxima = notas[0];
    let minima = notas[0];
    let aprobadas = 0;
    let reprobadas = 0;

    for (let i = 0; i < notas.length; i++){
        if (notas[i] < 0 || notas[i] > 10){
            document.getElementById("resultado").textContent = "Error: Hay calificaciones fuera del rango de 0 a 10";
            return false;
        }

        suma = suma + notas[i];

        if (notas[i] > maxima){
            maxima = notas[i]; 
        }

        if (notas[i] < minima){
            minima = notas[i];
        }

        if (notas[i] >= 7){
            aprobadas++;
        }else{
            reprobadas++;
        }
    }

    let promedio = suma / notas.length;

    document.getElementById("notas").textContent = "Calificaciones: " + notas.join(", ");
    document.getElementById("promedio").textContent = "Promedio: " + promedio.toFixed(2);
    document.getElementById("maxima").textContent = "Nota máxima: " + maxima;
    document.getElementById("minima").textContent = "Nota mínima: " + minima;
    document.getElementById("aprobadas").textContent =  "Aprobadas: " + aprobadas;
    document.getElementById("reprobadas").textContent = "No aprobadas: " + reprobadas;
    document.getElementById("resultado").textContent =  "Análisis completado";
    return false;
}
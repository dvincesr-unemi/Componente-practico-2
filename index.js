function calcularPromedio(){
    let cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas a promediar:"));
    let sumaNotas = 0;
    for(let i = 0; i < cantidadNotas; i++){
        let nota = parseFloat(prompt(`Ingrese la nota ${i + 1}:`));
        sumaNotas += nota;
    }
    let promedio = sumaNotas / cantidadNotas;
    alert(`El promedio de las notas es: ${promedio}`);
}
calcularPromedio();               


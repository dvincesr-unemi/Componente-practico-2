function promedio() {
    let cantidad =parseInt(prompt("¿Cuántos números deseas promediar?"));
    if (cantidad <= 0 || isNaN(cantidad)) {
        alert("Por favor ingresa un número válido mayor que cero.");
    }else{
    let suma = 0;
    for (let i = 0; i < cantidad; i++) {
        let numero = parseFloat(prompt("Ingresa el número " + (i + 1) + ":"));
        suma += numero;
    }
    let promedio = suma / cantidad;
    alert(promedio);
    } 
}     
promedio();



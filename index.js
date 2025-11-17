function promedio() {
    let cantidad =parseInt(prompt("¿Cuántos números deseas promediar?: "));
    let suma = 0;
    let numerosIngresados=[];
    for (let i = 0; i < cantidad; i++) {
        let numero = parseFloat(prompt("Ingresa el número " + (i + 1) + ":"));
        suma += numero;
        numerosIngresados.push(numero);
    }
    let promedio = suma / cantidad;
    alert("Numeros ingresados: "+numerosIngresados);
    alert("Suma total: "+suma);
    alert("EL promedio es: " + promedio);
 }    
promedio();



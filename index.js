function promedio(){
    let suma=0;
    let cantidad= parseInt(prompt("¿Cuántos números deseas promediar?: "));
    for (let i=0;i<cantidad.length;i++){
        let numero= parseFloat(prompt("Ingrese el número "+ (i+1)+":"));
        suma+=numero;
    }
    let promedio=suma/cantidad
    alert(promedio.toFixed(2))
}
promedio()
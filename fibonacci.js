function fibonacci() {
    let number = parseInt(prompt("Ingrese cantidad de números a imprimir: "));
    if (isNaN(number)) {
        alert("Error: Ingrese número válido");
    } else {
    let serie = [0, 1]
    for (let i = 2; i < number; i++)
        serie[i] = serie[i -1] + serie[i - 2]
    alert(serie)
    }
    
}

fibonacci();
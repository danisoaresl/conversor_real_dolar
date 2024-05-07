function converter() {
    // Obter valores dos campos
    const valorReal = parseFloat(document.getElementById('valorReal').value);
    const cotacaoDolar = 5.07; // Valor da cotação do dólar (substitua por valor atualizado)

    // Calcular valor em dólar
    const valorDolar = valorReal * cotacaoDolar;

    // Atualizar campo de valor em dólar
    document.getElementById('valorDolar').value = valorDolar.toFixed(2);
}

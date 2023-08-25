document.addEventListener("DOMContentLoaded", function () {
    const buttonCalculo = document.querySelector(".button-calculo");
    const resultadoElement = document.querySelector(".resultado");

    buttonCalculo.addEventListener("click", function () {
        const pesoInput = document.querySelector('input[type="text"][placeholder="Peso (kg)"]');
        const alturaInput = document.querySelector('input[type="text"][placeholder="Altura (cm)"]');

        const peso = parseFloat(pesoInput.value);
        const altura = parseFloat(alturaInput.value) / 100;

        if (isNaN(peso) || isNaN(altura) || altura === 0) {
            resultadoElement.textContent = "Por favor, insira valores válidos para peso e altura.";
        } else {
            const imc = peso / (altura * altura);
            resultadoElement.textContent = `Seu IMC é: ${imc.toFixed(2)}`;
        }
    });
});

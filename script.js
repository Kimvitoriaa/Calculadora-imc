document.addEventListener('DOMContentLoaded', function () {

    const calcularButton = document.getElementById('calcularIMC');
    const resultadoDiv = document.getElementById('resultado');


    calcularButton.addEventListener('click', function () {

        const nome = document.getElementById('nome').value;


        const altura = parseFloat(document.getElementById('altura').value);
        const peso = parseFloat(document.getElementById('peso').value);


        if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
            resultadoDiv.textContent = 'Por favor, insira valores válidos para altura e peso.';
            return;
        }


        const imc = (peso / (altura * altura)).toFixed(2);


        const soma = altura + peso;


        let classificacao = '';
        if (imc < 18.5) {
            classificacao = 'abaixo do peso';
        } else if (imc >= 18.5 && imc <= 24.9) {
            classificacao = 'com peso normal';
        } else if (imc >= 25 && imc <= 29.9) {
            classificacao = 'com sobrepeso';
        } else if (imc >= 30 && imc <= 34.9) {
            classificacao = 'com obesidade grau 1';
        } else if (imc >= 35 && imc <= 39.9) {
            classificacao = 'com obesidade grau 2';
        } else {
            classificacao = 'com obesidade grau 3';
        }


        resultadoDiv.textContent = `${nome}, seu IMC é ${imc} e você está ${classificacao}. A soma de sua altura e peso é: ${soma}.`;
    });
});



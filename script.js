// =============================================
// script.js - Calculadora de IMC (Altura em CM)
// =============================================

document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('imcForm');
    const resultadoDiv = document.getElementById('resultado');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Captura os valores
        const peso = parseFloat(document.getElementById('peso').value);
        const alturaCm = parseFloat(document.getElementById('altura').value);

        // ====================== VALIDAÇÃO ======================
        if (!peso || !alturaCm || alturaCm <= 0) {
            resultadoDiv.innerHTML = `
                <span style="color: #ff4d4d; font-weight: bold;">
                    ⚠️ Por favor, insira valores válidos!
                </span>`;
            resultadoDiv.classList.add('show');
            return;
        }

        // ====================== CONVERSÃO E CÁLCULO ======================
        // Converte altura de centímetros para metros
        const alturaMetros = alturaCm / 100;
        
        // Calcula o IMC
        const imc = peso / (alturaMetros * alturaMetros);

        // ====================== CLASSIFICAÇÃO ======================
        let classificacao = '';
        let cor = '';

        if (imc < 18.5) {
            classificacao = 'Abaixo do peso';
            cor = '#4dabf7';
        } else if (imc < 25) {
            classificacao = 'Peso normal';
            cor = '#51cf66';
        } else if (imc < 30) {
            classificacao = 'Sobrepeso';
            cor = '#ffd43b';
        } else if (imc < 35) {
            classificacao = 'Obesidade Grau I';
            cor = '#ff922b';
        } else if (imc < 40) {
            classificacao = 'Obesidade Grau II';
            cor = '#ff6b6b';
        } else {
            classificacao = 'Obesidade Grau III (Mórbida)';
            cor = '#c2255c';
        }

        // ====================== EXIBE RESULTADO ======================
        resultadoDiv.innerHTML = `
            <strong style="color: #00f5ff; font-size: 1.8rem;">
                Seu IMC: ${imc.toFixed(2)}
            </strong><br><br>
            <span style="color: ${cor}; font-size: 1.45rem; font-weight: bold;">
                ${classificacao}
            </span>
        `;

        resultadoDiv.classList.add('show');
    });
});
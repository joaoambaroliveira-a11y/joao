// =============================================
// script.js - Calculadora de IMC (Versão Tech)
// =============================================

// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {

    // Seleciona os elementos necessários
    const form = document.getElementById('imcForm');
    const resultadoDiv = document.getElementById('resultado');

    // Adiciona evento de submit no formulário
    form.addEventListener('submit', function(e) {
        
        // Impede o recarregamento da página
        e.preventDefault();

        // Captura os valores dos inputs
        const pesoInput = document.getElementById('peso');
        const alturaInput = document.getElementById('altura');

        const peso = parseFloat(pesoInput.value);
        const altura = parseFloat(alturaInput.value);

        // ====================== VALIDAÇÃO ======================
        if (!peso || !altura || altura <= 0) {
            resultadoDiv.innerHTML = `
                <span style="color: #ff4d4d; font-weight: bold;">
                    ⚠️ Por favor, insira valores válidos!
                </span>`;
            resultadoDiv.classList.add('show');
            return;
        }

        // ====================== CÁLCULO DO IMC ======================
        // Fórmula: IMC = peso / (altura²)
        const imc = peso / (altura * altura);

        // ====================== CLASSIFICAÇÃO ======================
        let classificacao = '';
        let cor = '';

        if (imc < 18.5) {
            classificacao = 'Abaixo do peso';
            cor = '#4dabf7';
        } 
        else if (imc < 25) {
            classificacao = 'Peso normal';
            cor = '#51cf66';
        } 
        else if (imc < 30) {
            classificacao = 'Sobrepeso';
            cor = '#ffd43b';
        } 
        else if (imc < 35) {
            classificacao = 'Obesidade Grau I';
            cor = '#ff922b';
        } 
        else if (imc < 40) {
            classificacao = 'Obesidade Grau II';
            cor = '#ff6b6b';
        } 
        else {
            classificacao = 'Obesidade Grau III (Mórbida)';
            cor = '#c2255c';
        }

        // ====================== EXIBE RESULTADO ======================
        resultadoDiv.innerHTML = `
            <strong style="color: #00f5ff; font-size: 1.8rem;">
                IMC: ${imc.toFixed(2)}
            </strong><br><br>
            <span style="color: ${cor}; font-size: 1.45rem; font-weight: bold;">
                ${classificacao}
            </span>
        `;

        // Mostra o resultado com animação
        resultadoDiv.classList.add('show');
    });
});
// script.js - JavaScript da Calculadora de IMC
// Este arquivo contém toda a lógica interativa da página HTML

// =============================================
// Aguarda o carregamento completo da página
// =============================================

// Seleciona o formulário pelo seu ID
const form = document.getElementById('imcForm');

// Seleciona a div onde o resultado será exibido
const resultadoDiv = document.getElementById('resultado');

// Adiciona um ouvinte de evento para quando o formulário for enviado
form.addEventListener('submit', function(e) {
    
    // Impede o comportamento padrão do formulário (recarregar a página)
    e.preventDefault();
    
    // =============================================
    // Captura os valores digitados pelo usuário
    // =============================================
    
    // Pega o valor do campo peso e converte para número decimal
    const peso = parseFloat(document.getElementById('peso').value);
    
    // Pega o valor do campo altura e converte para número decimal
    const altura = parseFloat(document.getElementById('altura').value);
    
    // =============================================
    // Validação dos dados inseridos
    // =============================================
    
    // Verifica se o peso ou altura são inválidos ou se altura é zero/negativa
    if (!peso || !altura || altura <= 0) {
        // Mostra mensagem de erro em vermelho
        resultadoDiv.innerHTML = `
            <span style="color: red; font-weight: bold;">
                Por favor, insira valores válidos.
            </span>`;
        return; // Interrompe a execução da função
    }
    
    // =============================================
    // Cálculo do IMC
    // =============================================
    
    // Calcula o IMC: peso / (altura × altura)
    const imc = peso / (altura * altura);
    
    // =============================================
    // Classificação do IMC conforme OMS
    // =============================================
    
    let classificacao = ''; // Variável para guardar a classificação
    
    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } 
    else if (imc < 25) {
        classificacao = 'Peso normal';
    } 
    else if (imc < 30) {
        classificacao = 'Sobrepeso';
    } 
    else if (imc < 35) {
        classificacao = 'Obesidade grau I';
    } 
    else if (imc < 40) {
        classificacao = 'Obesidade grau II';
    } 
    else {
        classificacao = 'Obesidade grau III (mórbida)';
    }
    
    // =============================================
    // Exibição do resultado na tela
    // =============================================
    
    // Insere o resultado formatado na div
    resultadoDiv.innerHTML = `
        <strong>Seu IMC é: ${imc.toFixed(2)}</strong><br><br>
        Classificação: <strong>${classificacao}</strong>
    `;
    
    // Opcional: Adiciona cor conforme a classificação (melhora visual)
    if (imc < 18.5) {
        resultadoDiv.style.color = '#2196F3';        // Azul
    } else if (imc < 25) {
        resultadoDiv.style.color = '#4CAF50';        // Verde
    } else if (imc < 30) {
        resultadoDiv.style.color = '#FF9800';        // Laranja
    } else {
        resultadoDiv.style.color = '#f44336';        // Vermelho
    }
});
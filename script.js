// script.js - Cálculo do IMC com comentários linha por linha

// Seleciona os elementos da página
const form = document.getElementById('imcForm');           // Pega o formulário
const resultadoDiv = document.getElementById('resultado'); // Pega a div onde o resultado aparece

// Quando o usuário clicar no botão "Calcular IMC"
form.addEventListener('submit', function(e) {
    
    // Impede a página de recarregar ao enviar o formulário
    e.preventDefault();

    // =============================================
    // 1. CAPTURA OS VALORES DIGITADOS
    // =============================================
    
    // Pega o valor do peso e converte para número decimal
    const peso = parseFloat(document.getElementById('peso').value);
    
    // Pega o valor da altura e converte para número decimal
    const altura = parseFloat(document.getElementById('altura').value);

    // =============================================
    // 2. VALIDAÇÃO DOS DADOS
    // =============================================
    
    // Se o peso ou altura estiverem vazios ou altura for inválida
    if (!peso || !altura || altura <= 0) {
        resultadoDiv.innerHTML = `
            <span style="color: #ff4d4d; font-weight: bold;">
                ⚠️ Por favor, insira valores válidos.
            </span>`;
        resultadoDiv.classList.add('show');
        return; // Para a execução aqui
    }

    // =============================================
    // 3. CÁLCULO DO IMC
    // =============================================
    
    // Fórmula oficial do IMC: peso ÷ (altura × altura)
    const imc = peso / (altura * altura);

    // =============================================
    // 4. CLASSIFICAÇÃO DO IMC (OMS)
    // =============================================
    
    let classificacao = '';   // Variável que vai guardar o texto da classificação
    let cor = '';             // Variável para mudar a cor do texto

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
        cor = '#4dabf7';      // Azul
    } 
    else if (imc < 25) {
        classificacao = 'Peso normal';
        cor = '#51cf66';      // Verde
    } 
    else if (imc < 30) {
        classificacao = 'Sobrepeso';
        cor = '#ffd43b';      // Amarelo
    } 
    else if (imc < 35) {
        classificacao = 'Obesidade Grau I';
        cor = '#ff922b';      // Laranja
    } 
    else if (imc < 40) {
        classificacao = 'Obesidade Grau II';
        cor = '#ff6b6b';      // Vermelho claro
    } 
    else {
        classificacao = 'Obesidade Grau III (Mórbida)';
        cor = '#c2255c';      // Vermelho escuro
    }

    // =============================================
    // 5. EXIBE O RESULTADO NA TELA
    // =============================================
    
    resultadoDiv.innerHTML = `
        <strong style="color: #00f5ff; font-size: 1.6rem;">
            Seu IMC: ${imc.toFixed(2)}
        </strong><br><br>
        <span style="color: ${cor}; font-size: 1.4rem;">
            ${classificacao}
        </span>
    `;
    
    // Mostra a div com animação
    resultadoDiv.classList.add('show');
});
<!DOCTYPE html>
<!-- index.html - Página HTML simples para Calculadora de IMC -->
<!-- Este arquivo é standalone, sem integração com app.py conforme solicitado. -->

<!-- Linha 4: Tag html que engloba todo o documento -->
<html lang="pt-BR">
<head>
    <!-- Linha 7: Meta charset para suportar acentuação em português -->
    <meta charset="UTF-8">
    <!-- Linha 9: Meta viewport para responsividade em dispositivos móveis -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Linha 11: Título da página que aparece na aba do navegador -->
    <title>Calculadora de IMC</title>
    <!-- Linha 13: Estilos CSS inline para formatação simples -->
    <style>
        body {
            font-family: Arial, sans-serif; /* Fonte padrão */
            max-width: 600px; /* Largura máxima do conteúdo */
            margin: 50px auto; /* Centraliza o conteúdo */
            padding: 20px;
            background-color: #f4f4f4; /* Cor de fundo suave */
        }
        h1 {
            text-align: center; /* Centraliza o título */
            color: #333;
        }
        form {
            background: white; /* Fundo branco para o formulário */
            padding: 20px;
            border-radius: 8px; /* Cantos arredondados */
            box-shadow: 0 0 10px rgba(0,0,0,0.1); /* Sombra suave */
        }
        label {
            display: block; /* Faz cada label ocupar uma linha */
            margin: 10px 0 5px;
            font-weight: bold;
        }
        input {
            width: 100%; /* Input ocupa toda a largura */
            padding: 8px;
            margin-bottom: 15px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        button {
            width: 100%;
            padding: 10px;
            background-color: #4CAF50; /* Verde para botão */
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }
        button:hover {
            background-color: #45a049; /* Efeito hover */
        }
        #resultado {
            margin-top: 20px;
            padding: 15px;
            border-radius: 4px;
            text-align: center;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <!-- Linha 57: Cabeçalho principal -->
    <h1>Calculadora de IMC</h1>
    
    <!-- Linha 60: Formulário para entrada de dados -->
    <form id="imcForm">
        <!-- Linha 62: Label e input para peso -->
        <label for="peso">Peso (kg):</label>
        <input type="number" id="peso" step="0.1" placeholder="Ex: 70.5" required>
        
        <!-- Linha 66: Label e input para altura -->
        <label for="altura">Altura (m):</label>
        <input type="number" id="altura" step="0.01" placeholder="Ex: 1.75" required>
        
        <!-- Linha 70: Botão de cálculo -->
        <button type="submit">Calcular IMC</button>
    </form>
    
    <!-- Linha 74: Área onde o resultado será exibido -->
    <div id="resultado"></div>

    <!-- Linha 77: Script JavaScript para funcionalidade interativa -->
    <script>
        // Linha 79: Seleciona o formulário
        const form = document.getElementById('imcForm');
        // Linha 81: Seleciona a div de resultado
        const resultadoDiv = document.getElementById('resultado');

        // Linha 84: Adiciona evento de submit ao formulário
        form.addEventListener('submit', function(e) {
            // Linha 86: Previne o comportamento padrão de recarregar a página
            e.preventDefault();
            
            // Linha 89-90: Obtém os valores dos inputs e converte para número
            const peso = parseFloat(document.getElementById('peso').value);
            const altura = parseFloat(document.getElementById('altura').value);
            
            // Linha 93: Validação básica
            if (!peso || !altura || altura <= 0) {
                resultadoDiv.innerHTML = '<span style="color: red;">Por favor, insira valores válidos.</span>';
                return;
            }
            
            // Linha 98: Calcula o IMC
            const imc = peso / (altura * altura);
            
            // Linha 101: Função interna para classificar
            let classificacao = '';
            if (imc < 18.5) {
                classificacao = 'Abaixo do peso';
            } else if (imc < 25) {
                classificacao = 'Peso normal';
            } else if (imc < 30) {
                classificacao = 'Sobrepeso';
            } else if (imc < 35) {
                classificacao = 'Obesidade grau I';
            } else if (imc < 40) {
                classificacao = 'Obesidade grau II';
            } else {
                classificacao = 'Obesidade grau III (mórbida)';
            }
            
            // Linha 117: Exibe o resultado formatado
            resultadoDiv.innerHTML = `
                <p>Seu IMC é: <strong>${imc.toFixed(2)}</strong></p>
                <p>Classificação: <strong>${classificacao}</strong></p>
            `;
        });
    </script>
</body>
</html>
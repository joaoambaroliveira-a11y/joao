# app.py - Calculadora de IMC (Índice de Massa Corporal)

# Importando a biblioteca sys (opcional, mas útil para melhor controle do programa)
import sys

# Função responsável por calcular o IMC
def calcular_imc(peso, altura):
    """
    Calcula o Índice de Massa Corporal.
    Fórmula: IMC = peso (kg) / (altura (m))²
    """
    # Validação: altura não pode ser zero ou negativa
    if altura <= 0:
        raise ValueError("A altura deve ser maior que zero.")
    
    # Cálculo do IMC
    imc = peso / (altura ** 2)
    return imc


# Função para classificar o IMC conforme padrões da OMS
def classificar_imc(imc):
    """
    Retorna a classificação do IMC de acordo com a Organização Mundial da Saúde.
    """
    if imc < 18.5:
        return "Abaixo do peso"
    elif imc < 25.0:
        return "Peso normal"
    elif imc < 30.0:
        return "Sobrepeso"
    elif imc < 35.0:
        return "Obesidade grau I"
    elif imc < 40.0:
        return "Obesidade grau II"
    else:
        return "Obesidade grau III (mórbida)"


# Função principal do programa
def main():
    # Cabeçalho do programa
    print("=" * 40)
    print("     CALCULADORA DE IMC")
    print("=" * 40)
    
    try:
        # Solicita o peso do usuário
        peso = float(input("\nDigite seu peso em kg (ex: 70.5): "))
        
        # Solicita a altura do usuário
        altura = float(input("Digite sua altura em metros (ex: 1.75): "))
        
        # Chama a função para calcular o IMC
        imc = calcular_imc(peso, altura)
        
        # Obtém a classificação
        classificacao = classificar_imc(imc)
        
        # Exibe os resultados formatados
        print("\n" + "-" * 40)
        print(f"Seu IMC é: {imc:.2f}")
        print(f"Classificação: {classificacao}")
        print("-" * 40)
        
    except ValueError as e:
        # Tratamento de erro para valores inválidos
        print(f"\nErro: {e}")
        print("Por favor, insira apenas números válidos.")
        
    except Exception as e:
        # Tratamento de erros gerais
        print(f"\nOcorreu um erro inesperado: {e}")


# Ponto de entrada do programa Python
if __name__ == "__main__":
    # Executa a função main quando o arquivo é executado diretamente
    main()
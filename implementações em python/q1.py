# 1. Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.

while True:
    try:
        nota = float(input("Digite uma nota entre zero e dez: "))
        if 0 <= nota <= 10:
            print(f"A nota {nota} é válida. Obrigado!")
            break
        
        else:
            print("Valor inválido. Por favor, digite uma nota entre zero e dez.")

    except ValueError:
        print("Entrada inválida. Digite um número válido.")
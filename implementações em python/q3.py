# 3. Faça um programa que leia 5 números e informe a soma e a média dos números.

lista = []  
for _ in range(5):  
    try:
        numero = float(input("Digite um número: "))
        lista.append(numero)  # Adiciona o número à lista
    except ValueError:
        print("Entrada inválida. Digite um número válido.")

soma = sum(lista)
media = soma / len(lista)

print(f"A soma dos 5 números é igual a {soma}.")
print(f"A média dos 5 números é igual a {media:.2f}.")

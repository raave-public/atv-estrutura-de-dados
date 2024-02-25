# 2. Faça um programa que leia 5 números e informe o maior número.

maior = float(input("Digite o primeiro número: ")) 
for i in range(4):  
    numero = float(input("Digite o próximo número: "))
    if numero > maior:
        maior = numero 

print(f"O maior número é: {maior}")

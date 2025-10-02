// 2 - Faça um programa que calcule a média 
// de um conjunto de números informados pelo usuário. 
// O programa deve continuar pedindo números 
// até que o usuário informe um valor negativo.

import Scanner from "@codeea/scanner"

async function main() {
    const scanner = new Scanner();
    // ter uma variavel que armazena o número informado pelo usuário
    let numero = 1
    // ter uma variável que guarda a soma dos números informados
    let soma = 0;
    // ter uma variável que guarda quantos números foram informados
    let contagem = 0;
    // laço de repetição enquanto o número informado pelo usuário não for negativo
    let continua = true
    while (continua) {
        numero = await scanner.questionInt("Informe um número maior positivo ou -1 para sair: ")
        continua = numero >= 0
        if (continua) {
            // soma = soma + numero
            soma += numero
            contagem++
        }
    }
    if (contagem > 0) {
        const media = soma / contagem
        console.log(`A média dos números informados é ${media}`)
    }
    // mostrar o resultado da média dos números
    scanner.close();
}

main();
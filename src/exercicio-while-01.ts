// 1- Faça um programa que simule um jogo de adivinhação. 
// O programa deve gerar um número aleatório entre 1 e 100,
//  e pedir para o usuário tentar adivinhar o número. 
// A cada tentativa do usuário, 
// o programa deve informar se o número 
// a ser adivinhado é maior ou menor do que o 
// número informado pelo usuário. 
// O jogo termina quando o usuário acerta o número.

import Scanner from "@codeea/scanner"

async function main() {
    const scanner = new Scanner();
    // gerar um número aleatório
    const numero = Math.floor(Math.random() * 100) + 1;
    // pedir para o usuario informar um número de 1 a 100
    let palpite = await scanner.questionInt("De um palpite de um número entre 1 e 100: ");
    let resultado = palpite === numero;

    while (!resultado) {
        if (palpite < numero) {
            console.log("Chute um valor maior")
        } else {
            console.log("Chute um valor menor")
        }
        palpite = await scanner.questionInt("De um palpite de um número entre 1 e 100: ");
        resultado = palpite === numero;
    }

    if (resultado === true) {
        console.log("Você acertou!")
    }


    // criar um laço de repetição que valida o se o número está correto
    // caso não esteja, vai pedir novamente outro número
    // caso esteja correto, finaliza o loop



    scanner.close();
}

main();
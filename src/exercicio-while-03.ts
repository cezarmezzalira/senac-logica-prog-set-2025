// 3 - Faça um programa que peça ao usuário para digitar 
// um número e imprima a tabuada desse número até 10.

import Scanner from "@codeea/scanner"

async function main() {
    const scanner = new Scanner();
    // pedir um número pro usuário
    const numero = await scanner.questionInt("Informe um número para a tabuada: ");
    // imprimir a tabuada do número
    // imprimir de 1 até 10
    let i = 1;
    // enquanto o valor da variavel i for menor ou igual a 10
    while (i <= 10) {
        const resultado = numero * i;
        // console.log(numero+" x "+i+" = "+resultado);
        console.log(`${numero} x ${i} = ${resultado}`);
        // i = i + 1;
        // i += 1;
        i++;
    }

    scanner.close();
}

main();
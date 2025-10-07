import Scanner from "@codeea/scanner"



// Faça um programa que peça ao usuário para digitar um
// número e imprima a tabuada desse número até 10.
async function main() {
    const scanner = new Scanner();
    // ENTRADA
    const numero = await scanner.questionInt("Informe um número para obter a tabuada: ")
    // console.log(`${numero} x 1 = ${numero * 1}`)
    // console.log(`${numero} x 2 = ${numero * 2}`)
    // console.log(`${numero} x 3 = ${numero * 3}`)
    // console.log(`${numero} x 4 = ${numero * 4}`)
    // console.log(`${numero} x 5 = ${numero * 5}`)
    // console.log(`${numero} x 6 = ${numero * 6}`)
    // console.log(`${numero} x 7 = ${numero * 7}`)
    // console.log(`${numero} x 8 = ${numero * 8}`)
    // console.log(`${numero} x 9 = ${numero * 9}`)
    // console.log(`${numero} x 10 = ${numero * 10}`)
    // console.log(`${numero} x 11 = ${numero * 11}`)

    // PROCESSAMENTO
    let vez = 1; //controla a vez que está repetindo a execução do código
    do {
        // SAÍDA
        console.log(`${numero} x ${vez} = ${numero * vez}`)
        vez++
    } while (vez <= 10)

    scanner.close();
}

main();
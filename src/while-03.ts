import Scanner from "@codeea/scanner"

async function main() {
    const scanner = new Scanner();
    // laço de fluxo condicional verdadeiro
    // Para o meu while executar, ele depende de uma condição verdadeira

    // Elaborar um programa que efetue a entrada de um valor 
    // numérico inteiro qualquer. Em seguida, processar 
    // o cálculo do valor de entrada, multiplicando-o 
    // por 3 e apresentando seu resultado. 
    // Proceder à execução dos passos anteriores cinco vezes.

    let i = 1;
    while (i <= 5) {
        const numero = await scanner.questionInt("Informe um número: ")
        console.log(`${numero} x 3 = ${numero * 3}`)
        // i = i + 1;
        i++;
    }



    scanner.close();
}

main();
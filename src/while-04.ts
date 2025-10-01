import Scanner from "@codeea/scanner"

async function main() {
    const scanner = new Scanner();
    // laço de fluxo condicional verdadeiro
    // Para o meu while executar, ele depende de uma condição verdadeira

    // Elaborar um programa que efetue a entrada 
    // de um valor numérico inteiro qualquer. 
    // Em seguida, calcular o valor entrado, 
    // multiplicando-o por 3 e apresentando seu resultado. 
    // Ao final da apresentação do resultado, 
    // o programa deve perguntar ao usuário se ele deseja novo cálculo.
    // Se a resposta for sim, 
    // deve executar novamente as instruções subordinadas ao bloco adjacente. 
    // Se a resposta for diferente de sim, 
    // o programa deve parar a execução.

    let continua = "sim";
    while (continua === "sim") {
        const numero = await scanner.questionInt("Informe um número: ")
        console.log(`${numero} x 3 = ${numero * 3}`)
        continua = await scanner.question("Continuar a execução? (sim/não) ")
    }


    scanner.close();
}

main();
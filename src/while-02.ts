import Scanner from "@codeea/scanner"

async function main() {
    const scanner = new Scanner();
    // laço de fluxo condicional verdadeiro
    // Para o meu while executar, ele depende de uma condição verdadeira
    const idade = await scanner.questionFloat("Qual sua idade: ");
    let i = 0;
    while (idade >= 18) {
        if (i === 2) break;
        console.log("Seja Bem Vindo!");
        i++;
    }

    scanner.close();
}

main();
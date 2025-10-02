import Scanner from "@codeea/scanner"

async function main() {
    const scanner = new Scanner();
    // laço de fluxo condicional falso
    // Para o meu while executar, 
    // ele depende de uma condição falsa

    // Elaborar um programa que entre um valor 
    // numérico inteiro qualquer. 
    // Em seguida, calcular o valor de entrada, 
    // multiplicando-o por 3 e apresentando seu resultado. 
    // Ao final da apresentação do resultado, o programa 
    // deve perguntar ao usuário se ele deseja novo cálculo. 
    // Se a resposta for diferente de não, 
    // deve executar novamente as instruções 
    // subordinadas ao bloco adjacente. 
    // Se a resposta for não, 
    // o programa deve parar a execução.
    
    let continuar = "sim";
    // até que continuar seja diferente de não
    // enquanto continuar seja diferente de não
    while (continuar !== "não") {
        const numero = await scanner.questionInt("Informe um número: ")
        console.log(`${numero} x 3 = ${numero * 3}`)
        continuar = await scanner.question("Continuar a execução? (sim/não) ")
    }
    scanner.close();
}

main();
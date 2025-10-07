import Scanner from "@codeea/scanner"

// Faça um programa que calcule a média de um conjunto 
// de números informados pelo usuário. O programa deve 
// continuar pedindo números até que o usuário 
// informe um valor negativo.
async function main() {
    const scanner = new Scanner();

    let numero = 0
    let somatorio = 0
    let contador = 0;

    do {
        numero = await scanner.questionInt("Informe um número")
        if (numero > 0) {
            somatorio += numero
            contador++
        }
    } while (numero > 0)

    const media = somatorio / contador

    console.log(`A média dos ${contador} infomados é ${media}`)

    scanner.close();
}

main();
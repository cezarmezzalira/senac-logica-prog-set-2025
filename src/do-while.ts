import Scanner from "@codeea/scanner"

async function main() {
    const scanner = new Scanner();
    // Faça um programa que leia uma senha 
    // e valide se ela está correta. 
    // Permita que o usuário possa tentar 
    // acertar a senha até 3 vezes. 

    // ENTRADA
    const senha = "123456"
    // PROCESSAMENTO
    let vez = 1; // variavel de controle
    let senhaUsuario = ""
    do {
        if (vez > 3) {
            console.log("Número máximo de tentativas foi atingido. Tente novamente.")
            break;
        }
        senhaUsuario = await scanner.question("Informe a senha: ");
        vez = vez + 1;
    } while (senha !== senhaUsuario)

    // SAÍDA
    scanner.close();
}

main();
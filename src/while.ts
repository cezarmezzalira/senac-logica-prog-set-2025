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
    while (vez <= 3) {
        // pedir a senha do usuário
        const senhaUsuario = await scanner.question("Informe a senha: ");
        // validar se a senha está correta
        if (senha === senhaUsuario) {
            // se a senha estiver correta, para a execução
            console.log("Sucesso! Senha válida!")
            break;
        }
        // senão, valida novamente, até 3 vezes
        // incrementar a variável de controle
        vez = vez + 1;
    }
    if (vez > 3) {
        console.log("Número máximo de tentativas foi atingido. Tente novamente.")
    }
    // SAÍDA

    scanner.close();
}

main();
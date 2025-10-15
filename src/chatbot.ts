import Scanner from "@codeea/scanner"

async function main() {
    const scanner = new Scanner();
    // Obter as informações do usuário

    // Nome Completo
    // Se o usuário informar um nome em branco, 
    // pede o nome novamente
    let nomeCompleto = "";
    do {
        nomeCompleto = await scanner.question("Informe seu nome completo: ")
    } while (!nomeCompleto.trim())

    // Endereço
    let endereco = await scanner.question("Informe seu endereço completo: ")

    let contagemSaques = 0;
    let contagemDepositos = 0;

    // Saldo inicial
    let saldo = 0;
    do {
        saldo = await scanner.questionFloat("Informe um saldo inicial para a conta: ")
    } while (saldo < 0)

    if (saldo > 0) {
        contagemDepositos++;
    }

    let menu = "Digite a opção desejada:"
    menu += "\n1 - Consultar Saldo"
    menu += "\n2 - Saque"
    menu += "\n3 - Depósito"
    menu += "\n4 - Extrato"
    menu += "\n5 - Consulta informações do cadastro"
    menu += "\n6 - Alterar o endereço"
    menu += "\n9 - Sair"
    menu += "\nEscolha a opção desejada:";
    let opcao = 0;

    do {
        console.log("\n")
        opcao = await scanner.questionInt(menu)
        console.log("\n")

        if (opcao === 1) { // 1 - Consultar Saldo
            console.log(`Olá ${nomeCompleto}!\nSeu saldo atual é de R$ ${saldo}.`)
        } else if (opcao === 2) { // 2 - Saque
            const valorSaque = await scanner.questionFloat("Informe o valor desejado para o saque: ")
            if (valorSaque > saldo) {
                console.log("Saldo insuficiente para o saque!")
            } else {
                saldo = saldo - valorSaque
                contagemSaques++
                console.log(`Seu saldo atual --->>> R$ ${saldo}.`)
            }
        } else if (opcao === 3) {// 3 - Depósito
            const valorDeposito = await scanner.questionFloat("Informe o valor a ser depositado: ")
            if (valorDeposito > 0) {
                // saldo = saldo + valorDeposito
                saldo += valorDeposito
                contagemDepositos++
                console.log(`Seu saldo atual --->>> R$ ${saldo}.`)
            } else {
                console.log("Valor inválido para depósito.")
            }
        } else if (opcao === 4) {// 4 - Extrato
            let extrato = "Extrato atual:";
            extrato += `\nSaldo atual........... R$ ${saldo}.`
            extrato += `\nSaques efetuados...... ${contagemSaques}`
            extrato += `\nDepósitos efetuados... ${contagemDepositos}`
            console.log(extrato)
        } else if (opcao === 5) { // 5 - Consulta informações do cadastro (imprimir endereço)
            console.log(`Endereço Atual: ${endereco}`)
        } else if (opcao === 6) { // 6 - Alterar o endereço
            console.log(`Endereço Atual: ${endereco}`)
            const novoEndereco = await scanner.question("Informe o novo endereço: ")
            endereco = novoEndereco
            console.log(`Novo Endereço: ${endereco}`)
        } else if (opcao === 9) {
            console.log(`${nomeCompleto.trim()}, muito obrigado por usar nossos serviços!`)
        } else {
            console.log("Opção inválida!")
        }
    } while (opcao !== 9)

    scanner.close();
}

main();
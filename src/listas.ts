import Scanner from '@codeea/scanner'

const scanner = new Scanner()


async function main() {
    const frutas = ["banana", "maçã", "uva", "limão"]


    // ["banana", "maçã", "uva", "limão"]
    // [    0   ,    1  ,   2  ,    3   ]
    // indice, posição ou index

    // Percorre a lista do primeiro item ao último
    for (let i = 0; i < frutas.length; i++) {
        console.log(frutas[i])
    }

    // Percore a lista do último item ao primeiro
    for (let i = frutas.length - 1; i >= 0; i--) {
        console.log(frutas[i])
    }

    // Cenário sem lista - Criar variáveis sempre que necessário
    // const nota1 = 1.0
    // const nota2 = 10
    // const nota3 = 5.2
    // const nota4 = 1

    // Cenário com lista - Basta adicionar um novo item na lista
    let notas: number[] = []

    let nota = 0
    let somaNotas = 0
    do {
        nota = await scanner.questionFloat("Informe uma nota")
        if (nota >= 0) {
            notas.push(nota)
            somaNotas += nota
        }
    } while (nota >= 0)

    console.log(notas)
    console.log(`Média das notas: ${somaNotas / notas.length}`)

    notas = []
    somaNotas = 0
    for (let i = 0; i < 4; i++){
        nota = await scanner.questionFloat("Informe uma nota")
        if (nota >= 0) {
            notas.push(nota)
            somaNotas += nota
        }
    }
    console.log(notas)
    console.log(`Média das notas: ${somaNotas / notas.length}`)

    const listaVariada = ["Cezar", "Rua Tal", 50]
    scanner.close()
}


main()

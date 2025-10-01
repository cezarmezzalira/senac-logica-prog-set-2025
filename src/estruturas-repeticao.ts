// for
// while
// do-while

// pedir para o usuario 4 notas e somar todas elas

// Mostre a mensagem 5 vezes
// console.log("Mensagem 1")
// console.log("Mensagem 2")
// console.log("Mensagem 3")
// console.log("Mensagem 4")
// console.log("Mensagem 5")

// for - para
// para limite começando em 1;
// enquanto o limite ser menor ou igual a 5;
// continue executando o código e some + 1 ao limite
// para (variavel controle; condição de execução; incremento)
// for (let limite = 1; limite <= 5; limite = limite + 1) {
//     console.log("Mensagem ", limite)
// }

// mostrar os numeros entre 1000 e 500 em ordem decrescente
// for (let i = 1000; i >= 500; i = i - 1) {
//     console.log(i)
// }

// mostrar todos os numeros pares entre 10 e 50
for (let i = 1; i < 5 || i === 5; i = i + 1) {
    const resto = i % 2;
    if (resto === 0) {
        console.log(i + " é um numero par")
    }
}

// while - enquanto
// enquanto (condição verdadeira) { executa código }
let controle = 5
while (controle > 0) {
    console.log("Vocês são demais! X" + controle)
    controle = controle - 1
}

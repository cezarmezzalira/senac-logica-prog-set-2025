import Scanner from "@codeea/scanner"

// Escreva um programa, que recebe quatro notas.
// Faça a média aritmetica destas quatro notas e guarde na memória.
// Por fim, valide o seguinte: Se a média for maior ou igual a 6,
// mostrar a mensagem, "Aluno Aprovado". Senão, se a média for menor que 6,
// mostrar a mensagem, "Aluno Reprovado".

async function main() {
    const scanner = new Scanner()

    // ENTRADA
    const nota1 = await scanner.questionFloat("Informe a nota 1: ")
    const nota2 = await scanner.questionFloat("Informe a nota 2: ")
    const nota3 = await scanner.questionFloat("Informe a nota 3: ")
    const nota4 = await scanner.questionFloat("Informe a nota 4: ")
    
    // PROCESSAMENTO
    const media = (nota1+nota2+nota3+nota4)/4

    // SAÍDA
    // Se a media for maior ou igual a 6, mostrar "Aluno Aprovado"
    // Senão, mostrar "Aluno Reprovado"
    // Se/Senão - if/else
    // Se (condiçao)/ Senão
    // Se a média for maior que 6 ou a média for igual a 6
    if (media > 6) {
        console.log("Aluno Aprovado")
    } else if (media == 6){
        console.log("Aluno Aprovado")
    } else {
        console.log("Aluno Reprovado")
    }
    
    scanner.close();
}

main()
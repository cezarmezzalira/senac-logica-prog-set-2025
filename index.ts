import Scanner from "@codeea/scanner"

// Calculo IMC
// O calculo do IMC é usado para avaliar se a pessoa está dentro 
// do peso ideal. Para isso, basta que ela faça o seguinte calculo
// IMC = PESO / (ALTURA * ALTURA)

async function main() {
    const scanner = new Scanner()

    // ENTRADA
    const peso = await scanner.questionFloat("Informe o seu peso: ")
    const altura = await scanner.questionFloat("Informe a sua altura: ")
    
    // PROCESSAMENTO
    const imc = peso / (altura * altura)
    
    // SAÍDA
    console.log("Seu IMC é: "+imc)
    
    scanner.close();
}

main()
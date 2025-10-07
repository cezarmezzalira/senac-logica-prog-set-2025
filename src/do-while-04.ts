
import Scanner from "@codeea/scanner"

// Faça um programa que peça ao usuário para digitar uma palavra 
// e verifique se essa palavra é um palíndromo (ou seja, 
// se pode ser lida da mesma forma da esquerda para 
// a direita e da direita para a esquerda).

async function main() {
    const scanner = new Scanner();
    
    const palavra = await scanner.question("Informe uma palavra: ")
    let i = 0
    let j = palavra.length -1
    let palindromo = true;

    // ama
    // ["a", "m", "a"]
    // 0, 1, 2...
    // indíce ou index - posição de item dentro de uma lista
    do {
      if(palavra.charAt(i) != palavra.charAt(j)){
        palindromo = false;
        break;
      }
      i++;
      j--;
    } while(i <= j);

    if(palindromo){
      console.log("A palavra " + palavra + " é um palíndromo.");
    } else {
      console.log("A palavra " + palavra + " não é um palíndromo.");
    }
    scanner.close();
}

main();
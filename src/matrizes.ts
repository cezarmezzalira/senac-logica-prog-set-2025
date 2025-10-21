import Scanner from "@codeea/scanner";

async function main() {
  const scanner = new Scanner();
  // Código daqui para baixo

  // Vetor é uma lista de única dimensão
  const lista = [0, 255, 255];

  // Matriz é uma lista de múltiplas dimensões
  const matriz = [
    [0, 255, 255],
    [255, 0, 0],
    [0, 255, 0],
  ];

  for (let i = 0; i< matriz.length; i++){
    for (let j = 0; j < matriz[i].length; j++){
      console.log(matriz[i][j])
    }
  }

  // Finaliza o programa
  scanner.close();
}

main();

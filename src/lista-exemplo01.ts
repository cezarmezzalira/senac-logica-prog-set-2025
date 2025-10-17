import Scanner from "@codeea/scanner";

async function main() {
  const scanner = new Scanner();

  // Existe um estacionamento que gostaria de
  // controlar as vagas disponíveis usando um programa simples.
  // Existem 10 vagas disponíveis nessa garagem e o controle
  // é feito usando o número da placa para saber se a vaga
  // está vazia ou ocupada.
  // Crie um programa que fique em loop com um menu com as opções:
  // 1- Ver vagas;
  // 2- Incluir veículo na vaga;
  // 3- Remover veículo da vaga;
  // 4- Limpar todas as vagas;
  // 9- Sair;

  // Cria a lista vazia
  const vagas: string[] = [];
  // Inicializando a memória do
  // programa criando 10 posições na lista
  const NUMERO_VAGAS = 10;
  for (let i = 0; i < NUMERO_VAGAS; i++) {
    vagas.push("vazia");
  }

  // loop do menu
  let opcaoSelecionada = 0;

  let menu = "Seja bem vindo ao Sistema de Controle de Vagas!";
  menu += "\nOPÇÕES DISPONÍVEIS ";
  menu += "\n1- Ver vagas ";
  menu += "\n2- Incluir veículo na vaga ";
  menu += "\n3- Remover veículo da vaga ";
  menu += "\n4- Limpar todas as vagas ";
  menu += "\n9- Sair ";

  do {
    console.log(menu);
    opcaoSelecionada = await scanner.questionInt("Informe a opção desejada: ");
    switch (opcaoSelecionada) {
      case 1: {
        // 1- Ver vagas;
        for (let i = 0; i < vagas.length; i++) {
          console.log(`Vaga ${i + 1} - ${vagas[i]}`);
        }
        break;
      }
      case 2: {
        // 2- Incluir veículo na vaga;
        // qual vaga foi usada (1 a 10)
        const vagaEscolhida = await scanner.questionInt(
          "Informe o número da vaga onde estacionou o veículo (1 à 10): "
        );
        // Não deixa incluir fora do limite de vagas
        if (vagaEscolhida < 1 || vagaEscolhida > 10) {
          console.log("Número de vaga inválido!");
          break;
        }
        // Evitar que uma vaga ocupada seja ocupada por outro veículo
        if (vagas[vagaEscolhida - 1] !== "vazia") {
          console.log("Vaga em uso!");
          break;
        }
        // qual a placa do veículo
        const placa = await scanner.question("Informe a placa do veículo: ");
        // guardar na posição da vaga a placa do veículo
        vagas[vagaEscolhida - 1] = placa.toUpperCase();
        break;
      }
      case 3: {
        // 3- Remover veículo da vaga;
        // Buscar o veículo pela placa
        const placa = await scanner.question("Informe a placa do veículo: ");
        let vagaEncontrada = -1;
        for (let i = 0; i < vagas.length; i++) {
          if (vagas[i] === placa.toUpperCase()) {
            vagaEncontrada = i;
            break;
          }
        }
        if (vagaEncontrada === -1) {
          console.log("Veículo não encontrado em nenhuma vaga!");
          break;
        }
        // Deixar a vaga vazia
        vagas[vagaEncontrada] = "vazia";
        console.log(`Veículo removido com sucesso da vaga ${vagaEncontrada}`);
        // OU
        // Buscar o veículo pelo número da vaga
        // const numeroVaga = await scanner.questionInt(
        //   "Informe a vaga onde está seu veículo: "
        // );
        // if (vagas[numeroVaga] === "vazia") {
        //   console.log("Vaga já está vazia!");
        // }
        // Deixar a vaga vazia
        // vagas[vagaEncontrada] = "vazia";
        break;
      }
      case 4: {
        // 4- Limpar todas as vagas;
        for (let i = 0; i < vagas.length; i++) {
          vagas[i] = "vazia";
        }
        break;
      }
      case 9: {
        console.log("Obrigado por usar nosso sistema!");
        break;
      }
      default: {
        console.log("Opção inválida!");
        break;
      }
    }
  } while (opcaoSelecionada != 9);

  scanner.close();
}

main();

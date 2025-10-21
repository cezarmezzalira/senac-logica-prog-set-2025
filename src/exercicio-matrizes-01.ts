import Scanner from "@codeea/scanner";

async function main() {
  const scanner = new Scanner();
  // Código daqui para baixo

  // Uma empresa precisa de um programa simples que consiga
  // guardar de maneira temporária uma lista de contatos
  // contendo informações dos seus clientes:
  // Nome completo, email, número de celular e idade.
  // O programa deve permitir a busca de dados pelo primeiro nome.
  // O programa deve possuir um menu com as opções de inclusão
  // busca e encerramento.

  const contatos = [
    [
      "Cezar Augusto Mezzalira",
      "cezar.mezzalira@email.com",
      "469999887766",
      35,
    ],
    ["Pricila De Tal", "pricila@email.com", "469999887766", 22],
    ["Gustavo De Tal", "gustavo@email.com", "469999887766", 15],
  ];

  let menu = "\n\n#### Opções do Programa ####";
  menu += "\n1- Inclusão de contato";
  menu += "\n2- Busca de contato";
  menu += "\n3- Listar todos os contatos";
  menu += "\n9- Sair";
  let opcaoMenu = 0;

  do {
    console.log(menu);
    opcaoMenu = await scanner.questionInt("Informe a opção desejada: ");
    switch (opcaoMenu) {
      case 1: {
        // inclusão
        const nome = await scanner.question("Informe seu nome completo: ");
        const email = await scanner.question("Informe seu email: ");
        const telefone = await scanner.question(
          "Informe seu número de celular: "
        );
        const idade = await scanner.questionInt("Informe a sua idade: ");
        const registroContato = [];
        registroContato.push(nome);
        registroContato.push(email);
        registroContato.push(telefone);
        registroContato.push(idade);
        contatos.push(registroContato);
        break;
      }
      case 2: {
        //busca
        const primeiroNome = await scanner.question(
          "Informe o primeiro nome: "
        );
        let encontrado = false;
        for (const [nome, email, telefone, idade] of contatos) {
          const primeiroNomeContato = nome?.toString().toUpperCase().split(" ")[0]
          if (primeiroNomeContato === primeiroNome.toUpperCase()) {
            console.log("Contato encontrado!");
            console.log(`${nome} - ${email} - ${telefone} - ${idade}`);
            encontrado = true;
            break;
          }
        }
        if (!encontrado) {
          console.log("Contato não encontrado.");
        }
        break;
      }
      case 3: {
        //listar todos
        for (const [nome, email, telefone, idade] of contatos) {
          console.log(`${nome} - ${email} - ${telefone} - ${idade}`);
        }
        break;
      }
      case 9: {
        // encerramento
        console.log("Obrigado por usar nosso programa!");
        break;
      }
      default: {
        console.log("Opção inválida");
        break;
      }
    }
  } while (opcaoMenu != 9);

  // Finaliza o programa
  scanner.close();
}

main();

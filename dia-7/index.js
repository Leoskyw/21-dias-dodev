/*/criação das variáveis

let mediageral = 0
let qtdHomens = 0
let qtdMulheresAcimaDe7 = 0
let maiornotaHomens = 0
let contador = 1

//nota,sexo

while (contador <= 10) {
    nota = parseInt(prompt("Digite a nota do " + contador + "º aluno"))
    sexo = prompt("Digite o sexo do aluno (m/f)")

    if (sexo == "m") {
        if (nota > maiornotaHomens){
            maiornotaHomens = nota
        }
        qtdHomens++
    }

    if (sexo == "f" && nota > 7) {
        qtdMulheresAcimaDe7++
    }

    mediageral += nota
    contador++
}   

mediageral = mediageral / 10

console.log("A média geral dos alunos foi: " + mediageral)
console.log("A quantidade dos homens cadastrados foi: " + qtdHomens)
console.log("A quantidade de mulhers que tiveram nota acima de 7 foi: " + qtdMulheresAcimaDe7)
console.log("A maior nota entre os alunos foi: " + maiornotaHomens)


/*/

let saldo = 1000; //iniciando o saldo com o valor 
let maiorValorInserido = 0;
let somaValoresInseridos = 0;
let totalTransacoes = 0;
let continuar = false

do {
    const nome = prompt("Digite seu nome:");
    const cpf = prompt("Digite seu CPF:");
    const valor = Number(prompt("Digite o valor da transação: "));
    const operacao = prompt("Qual operação deseja fazer? S / D")

    if (valor <0) {
        console.log("Valor inválido. A transação não foi realizada.");
    } else if (operacao == "S" && valor > saldo) { 
        console.log("Saldo insuficiente. A transação não foi realizada");
    } else if (operacao == "S") {
        console.log(`Olá, ${nome} (${cpf}), seu saldo atual é R$${saldo}.`)
        saldo -= valor;
        totalTransacoes++;
        somaValoresInseridos += valor;
        if (valor > maiorValorInserido) {
            maiorValorInserido = valor;
        }
        console.log(`Transação realizada com sucesso. Seu saldo atual é R$${saldo}.`);
    } else {
        console.log(`Olá, ${nome} (${cpf}), seu saldo atual é R$${saldo}.`);
        saldo += valor;
        totalTransacoes++;
        somaValoresInseridos += valor;
        if (valor > maiorValorInserido) {
            maiorValorInserido = valor;
        }
        console.log(`Transação realizada com sucesso. Seu saldo atual é R$${saldo}.`);
    }

    const opcao = prompt("Deseja continuar? (1 para continuar, 2 para parar):")
    if (opcao === "1") {
        continuar = true
    } else if (opcao === "2") {
        continuar = false
    } else {
        console.log("Opção inválida. Programa encerrado.");
        continuar = false
    }

} while (continuar)

console.log(`Saldo final: R$${saldo}`);
console.log(`Maior valor inserido: R$${maiorValorInserido}`);
console.log(`Média dos valores inseridos: R$${(somaValoresInseridos / totalTransacoes)}`);

//Função para perguntar nome e salario do colaborador

var nome
var salario

function perguntarColaborador() {
    nome = prompt("Digite o nome do colaborador:")
    salario = parseFloat(prompt("Digite o salario do colaborador:"))
    calcularAumentoSalario(nome,salario)
}

//Função para calcular o aumento de salario

function calcularAumentoSalario(nome,salario){
    var aumento = 0

    if (salario <= 1500) {
        aumento = 0.2 // 20% de aumento salarial
    } else if (salario <= 2000) {
        aumento = 0.15 // 15% de aumento salarial
    } else if (salario <= 3000) {
        aumento = 0.1 // 10% de aumento salarial
    } else {
        aumento = 0.05 // 5% de aumento salarial
    }
    
    var novoSalario = salario + (salario * aumento)

    // Exibindo os resultados 
    console.log("Nome do colaborador: " + nome)
    console.log("Salário: R$ " + salario)
    console.log("Aumento:" + (aumento * 100) + "%" )
    console.log("Salário reajustado: R$ "+ novoSalario)

    perguntarNovamente(); // Perguntar se deseja calcular novamente
}

// Função para perguntar se o usuário deseja calcular novamente
function perguntarNovamente() {
    var resposta = prompt("Deseja calcular novamente? (s/n)")

    if (resposta == "s") {
        perguntarColaborador(); // Reiniciará o processo
    } else {
        console.log("Programa encerrado.")
    }
}

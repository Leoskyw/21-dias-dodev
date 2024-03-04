
function executarPrograma() {
    //Criação das variáveis

    let nome = prompt('Informe seu nome:')
    let idade = parseInt(prompt('Informe sua idade:'))
    let peso = parseFloat(prompt('Informe seu peso:')) 
    let altura = parseFloat(prompt('Informe sua altura:'))
    let profissao = prompt('Informe sua profissão:')
    let salarioAtual = parseFloat(prompt("Digite seu salário atual"))
    
    console.log('Olá '+ nome + ', você tem '+ idade + ' anos, é ' + profissao +', tem ' + altura +'M de altura e pesa ' + peso +' Kg.' )

    //Verificando idade do usuário

    if (idade >= 18){
        console.log('Está liberado para tomar umas geladas')
    } else {
        console.log('Sem gelada para você')
    }

    //Descobrindo Idade Fracionada

    let meses = idade * 12
    let semanas = idade * 52
    let dias = idade * 365

    console.log('Sua idade em meses é: '+ meses)
    console.log('Sua idade em semanas é: '+ semanas)
    console.log('Sua idade em dias é: '+ dias)

    //Descobrindo IMC

    let imc = peso / (altura*altura)

    if (imc < 18.5){
        console.log('Magreza')
    } else if (imc >= 18.5 && imc <= 24.9) {
        console.log('Normal')
    } else if (imc >= 25 && imc <= 30) {
        console.log('Sobrepeso')
    } else {
        console.log('Obesidade')
    }

    // Descobrindo o ano de nascimento

    let anoAtual = 2023
    let anoNasc = anoAtual - idade
    console.log('Você nasceu no ano de ' + anoNasc)

    //Exibindo Anos e Idades

    let anoVivido = anoNasc
    let idadeAtual = 0

    for (let anoVivido = anoNasc; anoVivido <= anoAtual; anoVivido++) {
        console.log(anoVivido + ' - ' + idadeAtual + ' anos de idade.')
        idadeAtual++
    }

    //Loop DOWHILE

    let continuar; 

    do {
        continuar = prompt('Deseja inserir os dados novamente? (s/n)')
        if (continuar == 's') {
            executarPrograma();
        }
    } while (continuar == 's')

    //Criando variáveis/Loop

    let confirmar = "n"
    while (confirmar != "s"){
        nome = prompt("Digite seu nome")
        idade = parseInt(prompt("Digite sua idade"))
        salarioAtual = parseFloat(prompt("Digite seu salário atual"))
        console.log("nome: " + nome +", idade: " + idade + ", salário atual: "+ salarioAtual)
        confirmar = prompt ("As informações estão corretas? (s/n)")
    }

    //Fazendo a previsão do salário

    let aumento = 0.015
    console.log("Previsão salarial para os próximos 10 anos:")

    for (let ano = 1; ano <= 10; ano++) {
        salarioAtual += salarioAtual * aumento
        aumento *=2

        console.log((2023 + ano)+ " = R$ "+ salarioAtual.toFixed(2)) 
    }
}

executarPrograma();

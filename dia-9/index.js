//Conhecendo o usuário e retornando

let nome = prompt('Informe seu nome:')
let idade = parseInt(prompt('Informe sua idade:'))
let peso = parseInt(prompt('Informe seu peso:'))
let altura = (prompt('Informe sua altura:'))
let profissao = (prompt('Informe sua profissão:'))
let maior = 18

    console.log('Olá '+ nome + ', você tem '+ idade + ' anos, é ' + profissao +', tem ' + altura +'M de altura e pesa ' + peso +' Kg.' )

if (idade < 18){
    console.log('Sem gelada para você')
} else {
    console.log('Está liberado para tomar umas geladas')
}
let imc = peso / (altura * altura)

if (imc < 18.5){
    console.log('Magreza, quando o resultado é menor que 18,5 kg/m2.')
} else if (imc === 18.5 && 24.9) {
    console.log('Normal, quando o resultado está entre 18,5 e 24,9 kg/m2.')
} else if (imc === 24.9 && 30) {
    console.log('Sobrepeso, quando o resultado está entre 24,9 e 30 kg/m2.')
} else {
    console.log('Obesidade, quando o resultado é maior que 30kg/m2.')
}


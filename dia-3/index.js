//Calculando imc + dados da idade

let nome = prompt('Digite seu nome: ');
let idade = parseInt(prompt('Digite sua idade: '));
let altura = parseInt(prompt('Digite sua altura: '));
let peso = parseInt(prompt('Digite seu peso: '));

let ano = (2023 - idade); 

let imc = peso / (altura * altura);

console.log("Olá, " + nome + " você tem", + idade + " anos, nasceu em ", + ano + " tem ", + altura +"mt de altura, pesa", + peso + "kg seu IMC é de: ",+ imc + "Kg/m2.");
//exercício do jantar

const temFome = prompt("Você está com fome? (sim/nao)")
const temDinheiro = prompt("Você tem dinheiro? (sim/nao)")
const restauranteAberto = prompt("O restaurante está aberto? (sim/nao)")

if (temFome === "nao" || temDinheiro == "nao") {
    console.log("Hoje a janta será em casa");
} else if (temDinheiro == "sim" && restauranteAberto === "sim") {
    console.log("Hoje o jantar será no seu restaurante preferido!");
} else {
    console.log("Peça um delivery");
}

//exercício do motorista

const idade = parseInt(prompt("Digite sua idade"))
const nome = prompt("Digite seu nome")
const carteiraMotorista = prompt("Você possui carteira de motorista? (sim/nao)")
const carro = prompt("Você possui algum carro? (sim/nao)")

if (idade <=17 && carteiraMotorista === "nao"){
    console.log(nome + ', você não pode dirigir.');
} else if (idade >= 18 && carteiraMotorista === "sim" && carro === "nao"){
    console.log(nome + ', você pode dirigir, mas não possui carro.');
} else {
    console.log(nome + ', você será o motorista');
}
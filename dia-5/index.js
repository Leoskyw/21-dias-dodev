// exercício sobre os números

let num1 = parseInt(prompt('Digite o primeiro número:'))
let num2 = parseInt(prompt('Digite o segundo número:'))
let opcao = parseInt(prompt("Escolha a operação que deseja realizar:" + "\n1 = +; \n2 = -; \n3 = *; \n4 = /"))

switch(opcao){
    case 1:
        console.log(num1 + "+" + num2 + "=" +(num1 + num2))
        break;
    case 2:
        console.log(num1 + "-" + num2 + "=" +(num1 - num2))
        break;
    case 3:
        console.log(num1 + "*" + num2 + "=" +(num1 * num2))
        break;
    default:
        console.log(num1 + "/" + num2 + "=" +(num1 / num2))
        break;
}



// exercício sobre decisões

let posto = prompt('Você deseja qual serviço do posto?' + 'gasolina', 'alcool' , 'calibrar?')
let litroGas = 1;
let gasosa = 5;
let somaGas = (gasosa / litroGas);

let litroAlc = 1;
let alcOol = 3;
let somaAlc = (alcOol / litroAlc);

switch(posto){

    case "gasolina":
        gasosa = prompt('Quanto você deseja abastecer?')
        console.log('Você abasteceu', somaGas , 'litros de gasolina.')
        break;

    case "alcool":
        alcOol = prompt('Quanto você deseja abastecer?') 
        console.log('Você abasteceu', somaAlc , 'litros de alcool.')
        break;

    case "calibrar":
        console.log('Os seus pneus foram calibrados com sucesso.')
        break;
}
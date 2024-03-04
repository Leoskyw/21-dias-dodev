// Solicitando números e buscando + exibição

const array = [];
const indices = [];
let contadorIndice = 0

const numeroProcurado = parseInt(prompt('Digite o número a ser procurado:'));

for (let i = 0; i < 10; i++) {
    const elemento = parseInt(prompt(`Digite o elemento ${i +1}:`));
    array[i] = elemento;
}

for (let i = 0; i < 10; i++) {
    if(array[i] === numeroProcurado ) {
        indices[contadorIndice] = i
        contadorIndice++
    }
}

console.log(`O número ${numeroProcurado} foi encontrado nos índices: ${indices} `);


// Solicitando números e os exibindo de trás para frente


let numeros1 = []

 for(let i = 0; i < 5; i++){
     let inserirNumeros = prompt('Digite um número:')
     numeros.push(inserirNumeros)
     console.log('Número inserido: ' + inserirNumeros)
 }
 
 console.log('Números inseridos: ' + numeros1.reverse())

 

// Solicitando ao usuário quantos números ele deseja inserir

let numeros2 = []
let quantidade = parseInt(prompt('Quantos números você deseja inserir?'))

for(let i = 0; i < quantidade; i++){
    let inserirNumeros = prompt('Digite um número:')
    numeros.push(inserirNumeros)
    console.log('Número inserido: ' + inserirNumeros)
}

console.log('Números inseridos: ' + numeros2)
console.log('Números inseridos (ordem inversa): ' + numeros.reverse())

// Criando sequencia de Fibonacci

let numero = parseInt(prompt('Digite um número inteiro e positivo'))
let fibonacci = []
fibonacci[0] = numero - 1
fibonacci[1] = numero

// criando loop

for (let i = 2; i < 10; i++){
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
}

console.log('Fibonacci: ' + fibonacci)
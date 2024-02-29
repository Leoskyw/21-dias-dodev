//exercício contando até 10

let contador = 0

for(contador = 0; contador <=10; contador++){
    console.log(contador)
}

// contando de 5 em 5

let contagem = 0 

for(contagem = 0; contagem <=50; contagem+=5){
    console.log(contagem)
}

// contado de 50 até 0 pulando de 5 em 5

let counter = 50 

for(counter = 50; counter >=0; counter-=5){
    console.log(counter)
}

//3 tabuadas inseridas após a digitação do número inserido
//ex: [digitado 1] a saída será das tabuadas: 1,2,3

let numero = parseInt(prompt('Qual tabuada você deseja verificar?'))

for  (let i = numero; i <=numero + 2; i++) {
    console.log("Tabuada do número: " + i)
    for (let j = 0; j <= 10; j++) {
        console.log(i + "x" + j + " = " + (i * j))
    }
}
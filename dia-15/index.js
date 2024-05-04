//Criando as variáveis dos Arrays

let arrayUm = [13,20,10,22,24,20,27,17,19,14];
let arrayDois = [24,22,23,11,15,17,29,24,16,21];


function AcharNumerosEmComum(arrayUm, arrayDois){
    let resultado = [];
    let contadorResultado = 0

    for(i = 0; i < arrayUm.length; i++){

        for(j = 0; j < arrayDois.length; j++){

            if (arrayUm[i] == arrayDois[j]){
                resultado[contadorResultado] = arrayUm[i]
                contadorResultado++
                j = arrayDois.length
            }
        }
    }

    return resultado
}

console.log(AcharNumerosEmComum(arrayA, arrayB));
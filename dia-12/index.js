//Criando variáveis de login e senhas + contador 

let nomes = [];
let senhas = [];
let contador = 0;

let continuar = true;


// Criando Loop e sistema de Cadastro/Login/Exclusão/Encerrar
while(continuar){


    let opcao = prompt('O que você deseja fazer? \n1= Cadastro \n2= Login \n3= Excluir \n4= Encerrar?');


    switch(opcao) {
        case "1":

            nomes[contador] = prompt("Qual o nome deseja cadastrar?")
            senhas[contador] = prompt("Cadastre uma senha para o usuário inserido")

            contador++

            break;

        case "2":

            let nome = prompt("Digite o seu usuário:")
            let senha = prompt("Digite sua senha:")
            let loginValido = false

            for (let i = 0; i < nomes.length; i++) {
                if (nome == nomes[i] && senha == senhas[i]) {
                    loginValido = true
                }
            }

            if (loginValido) {
                alert("Login feito com sucesso. Bem-vindo!")
            } else {
                alert("Login ou senha incorretos")
            }
            break;

        case "3":

            let nomeExcluir = prompt("Qual usuário/nome deseja excluir?")
            let nomesAux = []
            let senhasAux = []
            let contadorAux = 0
            
            for (let i = 0; i < contador; i++) {
                if (nomeExcluir == nomes[i]) {
                    alert("Cadastro excluído com sucesso")
                } else {
                    nomesAux[contadorAux] = nomes [i]
                    senhasAux[contadorAux] = senhas[i]
                    contadorAux++
                }
            }

            nomes = nomesAux
            senhas = senhasAux
            contador--

            break;
            
        case "4":

        continuar = false;

            break;

        default:
            console.log("Opção inválida, escolha outra!")
    }      
}





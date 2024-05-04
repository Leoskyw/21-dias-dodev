//Criando Classes

class Hotel {
    Id
    Nome
    Categoria
    Endereco
    Telefone
    constructor(Id, Nome, Categoria, Endereco, Telefone) {
        this.Id = Id
        this.Nome = Nome
        this.Categoria = Categoria
        this.Endereco = Endereco
        this.Telefone = Telefone
    }

}

class Reserva {
    Id
    IdHotel
    Responsavel
    DiaEntrada
    DiaSaida
    constructor (Id, IdHotel, Responsavel, DiaEntrada, DiaSaida) {
        this.Id = Id
        this.IdHotel = IdHotel
        this.Responsavel = Responsavel
        this.DiaEntrada = DiaEntrada
        this.DiaSaida = DiaSaida
    }
}

//Criando Arrays

let hoteis = []
let reservas = []
let idHotel = 1
let idReserva = 1

//Função para cadastrar Hotel

function CadastrarHotel() {
    let nome = prompt("Digite o nome do hotel")
    let categoria = parseInt(prompt("Digite a categoria do hotel"))
    let endereco = prompt("Digite o endereco do hotel")
    let telefone = prompt("Digite o telefone do hotel")
    let hotel = new Hotel(IdHotel, nome, categoria, endereco, telefone)
    idHotel++
    hoteis.push(hotel)
}

function CadastrarReserva() {
    let idHotel
    let existe = false
    do {
        idHotel = parseInt(prompt("Digite o id do hotel"))
        for (let i = 0; i< hoteis.length; i++) {
            if (idHotel == hoteis[i].Id) {    
                i = hoteis.length
                existe = true
            } else if (i == hoteis.length - 1) {
                console.log("Id do hotel não cadastrado")
            }
        }        
    } while (!existe)


    let nome = prompt("Digite o nome do responsável")
    let DiaEntrada = parseInt(prompt("Digite o dia de entrada"))
    let DiaSaida
    do {
        DiaSaida = parseInt(prompt("Digite o dia de saída"))
        if (DiaSaida < DiaEntrada) {
            console.log("O dia de saida deve ser maior que o dia de entrada.")
        }
    } while (DiaSaida < DiaEntrada)

    let reserva = new Reserva(idReserva, idHotel, nome, DiaEntrada, DiaSaida)
    idReserva++
    reservas.push(reserva)

}

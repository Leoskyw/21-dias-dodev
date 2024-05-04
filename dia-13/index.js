//Criando classe + apresentação simples dos dados

class Computador {
    Tipo
    Processador
    Video
    Armazenamento
    MemoriaRam
    SSD 

    constructor(Tipo, Processador, Video, Armazenamento, MemoriaRam, SSD){
        this.Tipo = Tipo
        this.Processador = Processador
        this.Video = Video
        this.Armazenamento = Armazenamento
        this.MemoriaRam = MemoriaRam
        this.SSD = SSD
    }

    ExibirInformacoes(){
        console.log("Informações do Computador");
        console.log(`Tipo: ${this.Tipo}`);
        console.log(`Processador: ${this.Processador}`);
        console.log(`Video: ${this.Video}`);
        console.log(`Armazenamento: ${this.Armazenamento} GB`);
        console.log(`Memoria RAM: ${this.MemoriaRam} GB`);
        console.log(`SSD: ${this.SSD}`);
    }

}

let meuComputador = new Computador("Notebook", "Ryzen 5", "Dedicado", 500, 8, true);
meuComputador.ExibirInformacoes();


//Criando classe de carro e retornando resultado com calculo de velocidade de percurso 

class Carro {
    Nome
    Potencia
    VelocidadeMaxima
    Aceleracao

    constructor(Nome,Potencia,VelocidadeMaxima,Aceleracao){
        this.Nome = Nome
        this.Potencia = Potencia
        this.VelocidadeMaxima = VelocidadeMaxima
        this.Aceleracao = Aceleracao
    }

    calcularTempo(distancia) {
        let resultado = distancia / (this.VelocidadeMaxima / this.Aceleracao);
        return resultado;
    }
}

let meuCarro = new Carro("BMW", 800, 250, 10);
let distancia = 1000;
let tempo = meuCarro.calcularTempo(distancia);
console.log(meuCarro, tempo);


// Criando classe de corrida 

class Corrida {
    Nome
    Tipo
    Distancia
    Vencedor
    Participantes

    constructor(Nome,Tipo,Distancia){
        this.Nome = Nome
        this.Tipo = Tipo
        this.Distancia = Distancia
        this.Vencedor = ""
        this.Participantes = []        
    }

    DefinirVencedor(){
        let menorTempo = this.Participantes[0].CalcularTempoMedio(this.Distancia)
        let vencedor = this.Participantes[0] 

        for (let index = 1; index < this.Participantes.length; index++) {
            let tempo = this.Participantes[index].CalcularTempoMedio(this.Distancia)
            if (tempo < menorTempo) {
                menorTempo = tempo
                vencedor = this.Participantes[index]
           }    
        }

        return this.Vencedor = vencedor
    }

    ExibirVencedor(){
        alert("O vencedor é: " + this.Vencedor.Nome)
    }

}

let corrida = new Corrida("Monza", "Formula 1", 60000)

corrida.Participantes[0] = new Carro("Kicks", 120, 160, 5)
corrida.Participantes[1] = new Carro("Marea", 210, 200, 9)
corrida.Participantes[2] = new Carro("Peugeot 206", 300, 220, 10)

corrida.DefinirVencedor()
corrida.ExibirVencedor()
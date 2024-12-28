class Pessoa {
    // JS não suporta sobrecarga
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa("allan")
p1.falar()

//Função construtora

function Pessoa1 (nome){
    this.nome = nome
    //Metodo publico
    this.falar = function(){
        console.log(`Meu nome é ${nome}`)
    }
}

const allan = new Pessoa1("Allan")
allan.falar()
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


/*

A diferença de usar uma ou outra esta no contexto do navegador pois this na classe aponta para o variavel global
Ja na função arrow this aponta para o objeto refenciado.

*/

const criarPessoa = nome => {
    
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('João')
p2.falar()
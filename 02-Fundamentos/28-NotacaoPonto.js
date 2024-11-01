// Notação ponto permite acessar membros que estao visiveis no obj.


console.log(Math.ceil(6.1))

const objet1 = {}

objet1.nome = 'Bola'
objet1['nome'] = 'Bola2'

console.log(objet1['nome'])
console.log(objet1.nome)

function Obj(nome) {
    // this deixa a propriedade / funcao publica
    this.nome = nome;
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa');
console.log(obj2.nome);
console.log(obj3.nome);
console.log(obj3.nome);
// Aqui esta a prova de que this torna publico a variavel / função
obj3.exec();


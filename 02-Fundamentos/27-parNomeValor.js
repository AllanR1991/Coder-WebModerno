// Contextos léxicos: Delimitam onde as variáveis são válidas e podem ser acessadas.
// Par nome/valor
const saudacao = 'opa' //Contexto léxico 1

function exec(){
    const saudacao = 'Falaaa' //Contexto léxico 2 podemos ter 2 constantes iguais pois estao em contextos diferentes
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
// Em um objeto ele permite deixar 2 propriedade mas um subreescrve o outro.
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    idade: 30,
    endereco: {
        logradouro: 'Rua muito legal',
        numero: 123
    }
}

console.log(saudacao);
console.log(exec())
console.log(cliente)
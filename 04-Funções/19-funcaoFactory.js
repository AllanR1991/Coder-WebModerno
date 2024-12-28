/**
 * 
Uma função factory (ou fábrica) é um padrão de design em programação usado para criar objetos de maneira mais flexível. Em vez de instanciar objetos diretamente usando a palavra-chave new, você utiliza uma função que cria e retorna o objeto para você.

Esse padrão é útil quando:

Você quer encapsular a lógica de criação de objetos.
Precisa criar objetos com configurações diferentes sem repetir código.
Quer evitar a complexidade de uma classe base
 * 
 * 
 * 
 * @param {string} nome 
 * @param {string} cor 
 * @param {DoubleRange} tamanho 
 * @returns 
 */

function pessoa(nome, cor, tamanho){
    return {
        nome: nome,
        cor: cor,
        tamanho: tamanho
    }
}

console.log(pessoa('Allan', 'parda', 1.25));
console.log(pessoa('Julia', 'branca', 1.65));
console.log(pessoa('Carlos', 'negra', 1.80));
console.log(pessoa('Maria', 'amarela', 1.55));
console.log(pessoa('Pedro', 'parda', 1.70));
console.log(pessoa('Ana', 'branca', 1.60));
console.log(pessoa('João', 'negra', 1.75));
console.log(pessoa('João', 'negra', 'ds'));

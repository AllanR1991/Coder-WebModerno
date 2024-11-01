// Armazenando uma função na variavel

const imprimirSoma = function (a,b) {
    console.log(a+b);
}

imprimirSoma(2,3);

// Amazenando um funcao arrow em uma variavel

const soma = ( a,b) => {
    return a + b
}

console.log(soma(2,3))

// Amazenando uma função arrow a uma variavel e com retorno implicito, isso ocorre devido ter apenas uma sentença, caso tenha mais é necessario colocar return.
const subtracao = (a,b) => a-b;

console.log(subtracao(5,3))


const imprimir2 = a => console.log(a)
imprimir2("Legal!!!")
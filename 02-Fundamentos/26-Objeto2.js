//A forma de criar um objeto é atraves de uma função

console.log(typeof Object);
console.log(typeof new Object);
console.log(typeof new Object());

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)
console.log(typeof new Cliente())

class Produto {}
console.log(typeof Produto)
console.log(typeof new Produto)
console.log(typeof new Produto())

//Funções podem ter atributos e propriedades
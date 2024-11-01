// Declaração de variavel
// Evite criar variavel com var
var a = 3;
let b = 4;

// Var permite redeclarar uma variavel no mesmo escopo
// Let não permite redeclarar
var a = 30 
b = 40;

console.log(a,b);

a = 300;
b = 400;

console.log(a,b);

const c = 5;
// const = nao permite alterar seu valor
// c = 50
console.log
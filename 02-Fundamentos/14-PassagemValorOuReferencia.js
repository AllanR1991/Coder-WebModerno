// Tipos primitivos são copiados por valor;

let a = 5 ;
let b = a ; 

a++
b--

console.log(a,b);

//Copia por referencia
const c = { nome: 'Ana' } ;// contante é o endereço par qual o "c" aponta
const d = c ;
const e = Object.freeze({ nome: 'Ana' }); // Significa que o objeto esta congelado

//c = { nome: 'Jose'} // Não pode pois c ja esta apontando para um endereço de memória

b.nome = 'Gui'
e.nome = 'Teste'

console.log(a)
console.log(e)
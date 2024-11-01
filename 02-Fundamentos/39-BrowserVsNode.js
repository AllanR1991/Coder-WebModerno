/**
 * Browser
 * 
 *  Evite acesso global.
 * 
 * Var , função nomeda tem acesso global atraves do window
 * let e const, função é variavle global mas nao acessivel pelo window
 * 
 * 
 */

/**
 * Ao declarar 2 variaveis no escopo global via console do navegador o mesmo 
 * não apresentara erro devido ao escopo do REPL (Read-Eval-Print Loop)
 *  o console do Chrome trata cada linha que você digita como se fosse parte de um "bloco" independente de execução
 * 
 * porem é possivel simular da seguinte forma, adicionando "{}"
 * {
 *  let b = 123
 *  let b = 1234
 * }
 * 
*/

//Evite usar escobo global a menos que seja const pois nao pode ser alterada.

let a  = 3;
console.log(this.a)
console.log(global.b)

global.b = 123 // global equivale ao objeto window do console do navegador
this.c = 456

console.log(global.b)
console.log(this.c) // this é igual module exports
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// Criando uma variavel maluca: sem var e let = crianco uma variavel no escopo global.

abc = 3 // Mão faça isso em casa!!!
console.log(global.abc)
/*
 33) ​Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter 
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais. 
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e 
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.
 */

let vetorInteiro = [1,2,4,5];
let vetorString = ['Allan', 'Pedro', 'Caua', 'Camila'];
let vetorDouble = [2.33, 4.55, 7.88, 5.66];

let result1 = vetorInteiro.concat(vetorString,vetorDouble);
// let result2 = concat(vetorInteiro,vetorString,vetorDouble);

console.log(result1)
// console.log(result2)
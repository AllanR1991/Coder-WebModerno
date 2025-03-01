/**
36) ​Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número 
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada 
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se 
o valor do elemento for maior que 5.
 */

function segunda(vetor, num){
    if(num>5){
        return vetor.map(elemento => elemento*num)
    }
}


function primeira(vetor, num){
        return vetor.map(elemento => elemento*num)
}

console.log(primeira([1,2,3,4,5,6,7,8,9,10],2))
console.log(segunda([1,2,3,4,5,6,7,8,9,10],6))
console.log(segunda([1,2,3,4,5,6,7,8,9,10],5))
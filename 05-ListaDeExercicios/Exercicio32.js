// 32)​ Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

function calulaMediaAritimetica(array){
    let soma = 0;
    let media = 0;
    array.forEach(element => {
        soma += element;
    })
    media = soma / array.length;
    return media;
}

console.log(calulaMediaAritimetica([5,5,2,2,4,4]))
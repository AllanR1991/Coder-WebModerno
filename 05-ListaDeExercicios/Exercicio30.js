//30) ​Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

function menorEMaior(array) {
    let maior = array[0];
    let menor = array[0];
    array.forEach((element) => {
        if (element> maior) {
            console.log('+'+element)
            maior = element
        }
        if(element<menor){
            console.log('-'+element)
            menor =element
        }
    });
    console.log(`menor: ${menor}, maior: ${maior}`);
}

menorEMaior([43,54,654,30,2000,43,50,10,5,1000,2,3500,132,56])
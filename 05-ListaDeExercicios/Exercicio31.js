/**
 0031) ​Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor 
e imprime a quantidade no console. 
 */

function contaNumerosNegativos(array){
    let cont=0;
    array.forEach(element => {
        if(element<0){
            cont++;
        }
    });
    console.log(`Temos ${cont} número(s) negativo(s)`);
}

contaNumerosNegativos([2,34,554,654,765,-2,543,-543,-34,-5,-0]);



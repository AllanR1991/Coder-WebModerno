/**
38) ​Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números 
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente 
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor. 
 */

function imprimeNumerosParesEImpares(inicio = 0, fim = 100){
    let armazena = inicio;
    if(inicio > fim){
        inicio = fim;
        fim = armazena
    }

    while(inicio<=fim){
        if(inicio%2 !== 0){
            console.log(`Numero ${inicio} é impar`);
        }
        inicio++;
    }

}

imprimeNumerosParesEImpares(20,10)
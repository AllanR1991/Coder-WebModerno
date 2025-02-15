//29) ​Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números 
//deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos 
//deles estão fora do intervalo, escrevendo estas informações.


/**
Sim, os parênteses e colchetes indicam se o intervalo é aberto ou fechado:

Colchetes [ ] → Indicam que o limite está incluído (intervalo fechado).
Parênteses ( ) → Indicam que o limite não está incluído (intervalo aberto).
Exemplos:
[10, 20] → Intervalo fechado: inclui 10 e 20.
(10, 20) → Intervalo aberto: não inclui 10 nem 20.
(10, 20] → Aberto em 10, fechado em 20: inclui 20, mas não 10.
[10, 20) → Fechado em 10, aberto em 20: inclui 10, mas não 20.
Se quiser excluir um valor do intervalo, use parênteses para deixá-lo aberto! 🚀
 */


function contemNumero(array) {
    let foraDoLimite = 0;
    let dentroDoLimite = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < 10 || array[i] > 20) {
            foraDoLimite++;
        }else{
            dentroDoLimite++;
        }
    }
    console.log(`Dentro do limite temo: ${dentroDoLimite}, fora do limite temo : ${foraDoLimite}`);
}

contemNumero([0,1,2,10,15,20,25]);
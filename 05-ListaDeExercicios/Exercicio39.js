/*
39) ​Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o 
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente. 
Faça a troca sem utilizar uma variável auxiliar.
*/


function inverteNumeros(vetor1 , vetor2){
    debugger;
    let cont= 0;
    while(cont<vetor1.length){
        [vetor1[cont] , vetor2[cont]] = [vetor2[cont],vetor1[cont]]
        cont++;
    }
    console.log(vetor1)
    console.log(vetor2)
}

inverteNumeros([1,2,3,4,5],[6,7,8,9,10])
/*
Tarefas a serem realizadas

ele anota o novo valor 
comfere se é maior ou meno que seu melhor ponto e pior desempenho

*/



//preciso registrar as jogadas.
stringPontos = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

const verificaPontuacao = (string) => {
    //Transforma a string em um array de pontos
    const listaPontos = string.split(', ').map(Number)
    let maiorPonto = 0;
    let record = 0;
    let recordMenor = 0;
    let menorPonto = 0;
    for (i = 0; i < listaPontos.length ; i++){
        
        if(i>0 && listaPontos[i]>maiorPonto){
            maiorPonto=listaPontos[i]
            record++
        }else{
            if(i==0){
                menorPonto=listaPontos[i]
            }
            if(listaPontos[i]<menorPonto){
                menorPonto=listaPontos[i]
                recordMenor=i+1
            }
        }
    }

    return [record,recordMenor];
}


console.log(verificaPontuacao(stringPontos))

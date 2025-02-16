/**
 37) ​Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam 
como parâmetros um número n (número de termo), ​a1​ (o primeiro termo) e ​r​ (a razão) e escreva os ​n​ termos , 
bem como a soma dos elementos.
 * */

function progressaoAritimetica(n, a1 , r){
    let cont = 0;
    while(cont<=n){
        console.log(`a${cont+1} = ${a1} + ${r}*(${cont}) = ${a1 = a1+r*(cont)}`)
        cont++;
    }
}

function progressaOGeometrica(n , a1, r)
{
    let cont = 0
    while(cont<n){
        console.log(`a${cont+1} = ${a1} * ${r} = ${a1*=r}`)
        cont++;
    }

}

progressaoAritimetica(10, 10, 15)
progressaOGeometrica(10, 5, 3)
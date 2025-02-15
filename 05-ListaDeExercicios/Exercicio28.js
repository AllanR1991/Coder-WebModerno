//28) ​Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares. 

contaParesEImpares = (array) => {
    let pares = 0;
    let impares = 0;

    array.forEach(element => {
        if(element%2==0){
            pares++;
        }else{
            impares++;
        }        
    });

    console.log(`Temos ${pares} par(es) e ${impares} impar(es)`);
}

contaParesEImpares([1,2,3,4,5,6,7,9])
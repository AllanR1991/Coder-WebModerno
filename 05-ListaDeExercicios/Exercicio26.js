const numerosPares = () => {
    let numero = 1;
    let quantidade = 0;
    do{
        if( numero % 2 == 0 ){
            console.log(`O número é ${numero} é par.`)
            quantidade++
        }
        numero++
    }while(numero<=100)
    console.log(`Entre o numero 1 e 100 há ${quantidade} número(s) par(es)`)
}

numerosPares()
//Programa para calcular o valor do plano de saúde.

const calcPlanoSaude = (idade) => {
    let valor = 100;
    if(idade>60){
        valor+=130;
        console.log(`O valor a ser pago é ${valor}`)
    }else if(idade>30 && idade<=60){
        valor+=95;
        console.log(`O valor a ser pago é ${valor}`)
    }else if(idade>10 && idade<=30){
        valor+=50;
        console.log(`O valor a ser pago é ${valor}`)
    }else{
        valor+=80;
        console.log(`O valor a ser pago é ${valor}`)
    }
}

calcPlanoSaude(10)
calcPlanoSaude(15)
calcPlanoSaude(35)
calcPlanoSaude(60)
calcPlanoSaude(61)
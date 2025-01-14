const pagamentoAnuidade = (mes,valorAnuidade) => {
    // if(mes == 1){
    //     console.log(`O valor a ser pago é : ${valorAnuidade}`)
    // }
    // else{
        const capital = valorAnuidade;//valor inserido base
        const i = 0.05;//juros
        const t = mes-1;//periodo
        const montante = capital*(1+i)**t
        console.log(montante.toFixed(2))
    // }
}

pagamentoAnuidade(2,100)
pagamentoAnuidade(1,100)
pagamentoAnuidade(3,100)
pagamentoAnuidade(4,100)
pagamentoAnuidade(5,100)
pagamentoAnuidade(6,100)
pagamentoAnuidade(7,100)
pagamentoAnuidade(8,100)
pagamentoAnuidade(9,100)
pagamentoAnuidade(10,100)
pagamentoAnuidade(11,100)
pagamentoAnuidade(12,100)
//Programa onde inseri um valor e informa quanto de cada nota é necessario para dar o valor informado.

const devolucaoNota=(valor)=>{
    let nota = valor
    while(nota>0){
        if(nota>=100){
            console.log(`${parseInt(nota/100)} nota(s) de R$100`)
            nota = nota%100
        }else if(nota>=50){
            console.log(`${parseInt(nota/49)} nota(s) de R$50`)
            nota = nota%50
        }else if(nota>=10){
            console.log(`${parseInt(nota/10)} nota(s) de R$10`)
            nota = nota%10
        }else if(nota>=5){
            console.log(`${parseInt(nota/5)} nota(s) de R$5`)
            nota = nota%5
        }else{
            console.log(`${parseInt(nota/1)} nota(s) de R$1`)
            nota = nota%1
        }
        // console.log(`valor de nota ${nota}`)
    }
    console.log(``)
}

devolucaoNota(18)
devolucaoNota(256)
devolucaoNota(1956)
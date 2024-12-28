const notas = [100,30,38,88,61];

function arrendamento(notas){
    //aredondamento
    let notaAtualizada = notas.map(nota => {
        let multiplo = parseInt(nota/5)
        multiplo = multiplo+1
        let proximoMultiploDeCinco = multiplo*5
        diferenca = proximoMultiploDeCinco - nota
        if(diferenca<3 && nota>=38){
            return proximoMultiploDeCinco;
        }else{
            return nota;
        }
    });

    return notaAtualizada;
}

function classificaNota(notas){
    let notasAtualizadas = arrendamento(notas);
    notasAtualizadas.forEach(nota => {
        if(nota>=40){
            console.log(`Aprovado com nota ${nota}`);
        }else{
            console.log(`Reprovado com nota ${nota}`);
        }
    });
}

classificaNota(notas);
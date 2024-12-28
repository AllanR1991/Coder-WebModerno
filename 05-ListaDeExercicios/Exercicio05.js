const reais = (valor) => {
    if(valor != NaN){
        let stringNumero = valor.toFixed(2).toString()
        let stringCorreta = stringNumero.replace('.',',')
        return `R$ ${stringCorreta}`
    }
}

console.log(reais(0.1+0.2))
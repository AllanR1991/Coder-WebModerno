const jurosSimples = (capitalInicial, taxaJuros, tempoAplicacao) => {
    let juros = capitalInicial * taxaJuros * tempoAplicacao
    let montante = capitalInicial+juros
    return montante.toFixed(2)
}


const jurosComposto = ( capitalInicial, taxaJuros, tempoAplicacao ) => {
    return (capitalInicial*(1+taxaJuros)**tempoAplicacao).toFixed(2)
}
console.log(jurosSimples(1400,0.07,2))
console.log(jurosComposto(1400,0.07,2))
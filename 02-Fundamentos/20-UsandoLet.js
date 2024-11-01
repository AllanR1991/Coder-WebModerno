// Var tem escopo global e de função
// Let tem escopo glboal, função e de bloco


var numero = 1;
{
    let numero = 2 ;
    console.log("Dentro = ", numero)
}
console.log("Fora = ", numero)

let numero2 = 1;
{
    // let numero = 2 ; 
    // Caso não tenha a variavel no escopo em que foi chamado o js verifica nos escopos acima para obter o resultado.
    console.log("Dentro = ", numero2)
}
console.log("Fora = ", numero2)
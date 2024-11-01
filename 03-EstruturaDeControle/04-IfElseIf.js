/**
 * O Number.prototype em JavaScript é um objeto que permite adicionar métodos ou propriedades a todos os objetos do tipo Number. Quando adicionamos um método ao protótipo de Number, todos os números automaticamente têm acesso a esse método.
 * @param {*} inicio 
 * @param {*} fim 
 * @returns 
 */

Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota){
    if(nota.entre(9,10)){
        console.log('Quadro de Honra')
    } else if (nota.entre(7,8.99)){
        console.log('Aprovado')
    } else if (nota.entre(4,6.99)) {
        console.log('Recuperação')
    } else if (nota.entre(0,3.99)){
        console.log('Reprovado')
    } else {
        console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)
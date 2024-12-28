/**
 * Closure é o escopo criado quando uma função é declara
 * Esse escopo permite a função acessar e manipular variaveis externas à função
 * 
 * Closure é um conceito em programação, muito usado em linguagens como JavaScript e Python. Ele se refere a quando uma função "lembra" o contexto onde ela foi criada, mesmo que seja executada em outro momento ou lugar.
 */

// Contexto lexico em ação!

const x = 'Global'

function fora(){
    const x = "Local"
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())
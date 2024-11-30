
//This em uma função comum ele aponta para global.
let comparaComThis = function (param){
    console.log(this === param)
}

comparaComThis(global) // This aponta para global

const obj = {}
comparaComThis = comparaComThis.bind(obj) // Usamos o bind para especificar qual objeto é resolvido o This em funções normais.
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param) // Essa função foi definida dentro de um modulo no node neste caso o this é o proprio modulo.

comparaComThisArrow(global) // Em função arrow o this não aponta mais para global.
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj) // Bind não funciona em uma arrowFunction
comparaComThisArrow(obj)
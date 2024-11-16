let dibri = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //return implicito,  muito usado quando se usa apenas uma linha de codigo.

console.log(dobro(Math.PI))

let ola = function (){
    return 'Olá'
}

ola2 = () => 'Olá'
ola = _ => 'Olá' // possui um parametro porem podemos ignoralo
console.log(ola())

ola3 = a => 'Ola'
console.log(ola3())
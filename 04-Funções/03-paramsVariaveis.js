function soma() {
    let soma = 0 
    // Toda função tem o array arguments disponivel ele obtem todos os parametros passados para uma função
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}
console.log(soma())
console.log(soma(1))
console.log(soma(1.1,2.2,3.3))
console.log(soma('a', 'b', "c"))
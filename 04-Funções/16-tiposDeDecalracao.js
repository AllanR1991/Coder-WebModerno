console.log(soma(3,4)) // função com declaration não exibe erro

// function declarion
function soma ( x, y){
    return x+y
}

// function expression
const sub = function (x,y){
    return x-y
}
console.log(sub(3,4)) // function expression deve ser realizado chamada somente apos a declaração da função

// named function expression
const mult = function mult(x,y){
    return x*y
}
console.log(mult(3,4)) // named function expression deve ser realizado chamada somente apos a declaração da função
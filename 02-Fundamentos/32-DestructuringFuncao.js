// Neste caso retiramos do obj o min e max, sem precisar acessar o Obj.min ou Obj.max

function rand ({min = 0, max = 1000}){
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

const obj = {max:50, min: 40}
console.log(rand(obj))
console.log(rand({min: 955}))
console.log(rand({}))
//console.log(rand()) // ⚠️⚠️⚠️⚠️Nesse caso ele tenta desestruturar algo de undefined ou nulo acusando erro
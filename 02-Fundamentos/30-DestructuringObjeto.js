// Novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}
//Destructuring
// Explicando => Tire o nome e idade do objeto pessoa
const { nome, idade } = pessoa

console.log(nome ,idade)

// Explicando => Tire o nome e adiona em n  e idade adiciona em i do objeto pessoa
const { nome: n, idade: i } = pessoa
console.log(n,i);

// Caso não exista retorna undefined, podemos definir um valor padrao como feito em bemHumorada
const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada);

const {endereco: { logradouro, numero, cep }} = pessoa
console.log(logradouro, numero, cep)

// ⚠️⚠️⚠️⚠️ Cuidado somente o ultimo dado pode estar undefined e nao num pai e dentro dele o filho tambem.
// const { conta : { agencia, num}} = pessoa
// console.log(agencia,num)

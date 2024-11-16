// ForIn pode ser usado em objeto ou em array

const notas = [6.7,7.4,9.8,8.1,7.7]
for (i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    pessoa: 64
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
// Dessestruturação de array
// Aqui foi realizado destructuring de array onde o destructuring corresponde exatamente aos elementos da direita do sinal.

// desetruturação do lado esquerdo da atribuição, criando array do lado direito da atribuição
const [a] = [10]
console.log(a)

// Dessetruturando varios elementos do array
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1,n3,n5,n6)

// Podemos tambem dessetruturar elementos de arrays mutiplos.
const [ , [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)
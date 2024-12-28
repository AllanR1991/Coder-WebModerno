// criando função factory

const criarProduto = (nome,preço) => {
    return {
        nome,preço,desconto:0.1,
    }
}

console.log(criarProduto("Leite",10))
console.log(criarProduto("Arroz",25))
console.log(criarProduto("Tomate",6.58))
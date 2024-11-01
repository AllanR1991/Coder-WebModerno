let valor // não inicializada
console.log(valor); // undefined
//console.log(valor2); //Erro variavel nao definida

 // quando quisermos limpar a referencia de uma variavel utilizar null e deixar undefined para quando a linguagem identificar de forma automatica.

valor = null //ausencia de valor, use caso queira zera um variavel
console.log(valor)
// console.log(valor.toString()) //Errp ao acessar algo de null

const produto = {}
console.log(produto.preco);//Consegimos acessar algo que ainda nao foi definido mais nao algo alem dele sem definlo antes.
console.log(produto)

produto.preco = 3.50;
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
//delete produto.preco // sequiser excluir uma propriedade podemos usar delete
console.log(produto)

produto.preco = null // sem preço
console.log(produto)
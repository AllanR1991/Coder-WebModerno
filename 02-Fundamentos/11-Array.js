//Arrays sao um objeto

const valores = [ 7.7, 8.9, 6.3, 9.2 ]; // inserindo valores de forma literal
console.log(valores[0], valores[3]);
console.log(valores[4]); // Acessando um indece que nao existe exibe undefined, não gera erro.
valores [4] = 10;
valores [10] = 10;
console.log(valores);
console.log(valores.length);

valores.push({id:3}, false, null, 'teste')// adiciona novos itens no array.
console.log(valores)

console.log(valores.pop()) // remove o ultimo item do array

delete valores[0]; // Deleta um elemento do array
console.log(valores);

console.log(typeof valores)
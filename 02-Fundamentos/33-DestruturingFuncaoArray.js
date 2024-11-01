function rand([min = 0, max = 1000]) {
    // Aqui foi realizado destructuring de array onde o destructuring corresponde exatamente aos elementos da direita do sinal.
    // Forma facil de troca de valores.
    if (min > max) [min, max] = [max, min];
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand([50,40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))
// console.log(rand()) // Erro devido nao ter nenhum array para ser desestruturado.ds

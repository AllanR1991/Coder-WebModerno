//Função é um verbo que execulta uma função
//Função é um bloco de codigo.

//Função sem retorno

function imprimirSoma(a, b){
    console.log(a+b);
}

imprimirSoma(2,3);
imprimirSoma(2); // O primeiro numero exite e o segundo fica como undefined
imprimirSoma(2,3,4,5,6,7,8); // JS permite mas só pega o valor dos 2 primeiros parametros
imprimirSoma(); // O primeiro numero e o segundo numero fica como undefined


//Função com retorno e sendo o segundo parametro com valor padrao
function soma(a, b =0 ){
    return a+b
}


console.log(soma(2,3))
console.log(soma(2))
console.log(soma()) // como o primeiro número é undefined "undefined + 0 = NaN"
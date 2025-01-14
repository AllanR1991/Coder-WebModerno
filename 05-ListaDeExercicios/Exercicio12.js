//Fatorial sem recursividade
/*
Já aqui a cada iteração do laço, o valor de n é decrementado e multiplicado pelo valor de calc.
obtendo assim o fatorial de n.
*/
const fatorial = (n) => {
    if(n == 0 || n == 1){
        return 1;
    }
    let calc = n;
    while(n>1){
        n--;
        calc*=n;
    }
    return calc;
}

console.log(fatorial(5));

//Fatorial com recursividade

//Utlizando a recursividade, a função chama ela mesma até que a condição de parada seja atingida. E depois efetua o cálculo de todos os valores retornando um a um.
//Exemplo: fatorialRecursivo(5) = 5 * fatorialRecursivo(4) = 5 * 4 * fatorialRecursivo(3) = 5 * 4 * 3 * fatorialRecursivo(2) = 5 * 4 * 3 * 2 * fatorialRecursivo(1) = 5 * 4 * 3 * 2 * 1 = 120
function fatorialRecursivo(n){
    if(n == 0 || n == 1){
        return 1;
    }
    return n * fatorialRecursivo(n-1);
}

console.log(fatorialRecursivo(5));
// Destructuring




/**
 * Op1 + Op2 = inFix
 * Op++ = PosFix
 * ++Op = preFix
 * 
 * -op
 */
const [a,b,c,d] = [3,5,1,15]

const soma = a + b + c + d; // Operador Binario

const subtracao  = d - b;

const multiplicacao = a * b;

const divisao = d / a;

const modulo = a % 2;

console.log(soma, subtracao, multiplicacao, divisao, modulo);
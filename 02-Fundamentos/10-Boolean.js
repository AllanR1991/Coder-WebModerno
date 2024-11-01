let isAtivo = false;
console.log(isAtivo)

isAtivo = true;
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo)
console.log(!!isAtivo)

console.log('os verdadeiros...');
/**
 * O ! ele nega
 * O !! ele nega a negaçao voltando o valor boleano 
 * correto do item, isso foi o que foi realizado abaixo isso para quando
 * o dado nao e um boolean de fato.
 */
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))

let nome =  ''
console.log(nome || 'Desconhecido') // valor padrão
nome =  'Lucas'
console.log(nome || 'Desconhecido') // valor padrão
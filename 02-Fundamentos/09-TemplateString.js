const nome = 'Rebeca';

// Neste exemplo nao é possivel quebrar uma string para outra linha.
const concatenacao = 'Ola' + nome + '!';

//Template string permite quebr do texto
const template = `
    Olá 
    ${nome}!
`
console.log(concatenacao, template);

// expressoes...

console.log(`1 + 1 ${ 1 + 1 }`);

const up = texto => texto.toUpperCase()

console.log(`Ei... ${up('cuidado')}`)
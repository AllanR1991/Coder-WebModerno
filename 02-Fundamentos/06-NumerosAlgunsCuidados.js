console.log( 7 / 0 );

// Js tenta converter e resolve a equação
console.log( '10' / 2 );

// Como mais faz parte do mundo da string para concatenar ele concatena e nao soma
console.log( '3' + 2 );

console.log( '3' - 2 );

// Calculo com string resulta em NotANumber
console.log('Show!' * 2); 

// O resultado nao da 8 devido binary flooting point aritmetic usada pelo js
console.log(0.1 + 0.7);

//Não é possivel converte diretamento um literal para string
//console.log( 10.toString())

// Colocando dentro de um parenteses ele permite converter.
console.log( (10.345).toFixed(2))

/**
 * Em JavaScript, números são tipos primitivos e,
 *  normalmente, tipos primitivos não têm métodos.
 *  No entanto, quando você tenta acessar um método de um número
 *  (como toString() ou toFixed()), o JavaScript internamente "envolve" 
 * esse número em um objeto temporário do tipo Number, permitindo
 *  que o método seja chamado. Esse processo é chamado de autoboxing.
 * 
 */

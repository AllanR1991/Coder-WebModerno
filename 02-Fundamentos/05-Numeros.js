const peso1 = 1.0;
const peso2 = Number('2.0')
const peso3 = Number('2.1')

 console.log(peso1,peso2);
 console.log(Number.isInteger(peso1))
 console.log(Number.isInteger(peso2))
 console.log(Number.isInteger(peso3))

 const avaliacao1 = 9.871
 const avaliacao2 = 6.871

 const total = avaliacao1 * peso1 + avaliacao2 * peso2
 const media = total / ( peso1 +  peso2 );

 console.log(media);
 
 console.log(media.toFixed(2)); // Nao altera o valor de media ele cria um valor novo com 2 casa decimais
 console.log(typeof media.toFixed())

 console.log(media.toString()); // Converte um numero para uma string
 console.log(typeof media.toString())
 console.log(media.toString(2)); // Converte um numero para um valor binario
 console.log(typeof media.toString(2))

 console.log(typeof media)

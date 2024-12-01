// O que é um Callback?
// Um callback é uma função que é passada como argumento para outra função, e essa função chamada (a função "callback") é executada após a conclusão da função que a recebeu. É um conceito fundamental na programação assíncrona e funcional, especialmente em linguagens como JavaScript, mas pode ser usado em várias linguagens.

// Os callbacks são utilizados para executar código posteriormente, seja após a conclusão de uma operação assíncrona ou como parte de um fluxo de execução.

/**
 * CallBack é se dado quando passamos uma função como parametro e é executada quando um evento acontecer.
 * no caso o do foreach o evento é execultado a cada item percorrido.
*/

const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(a,b,c){ //
    console.log(`${a + 1}. ${b} 
        ${c}`)
}

fabricantes.forEach(imprimir)

fabricantes.forEach(fabricante => console.log(fabricante))
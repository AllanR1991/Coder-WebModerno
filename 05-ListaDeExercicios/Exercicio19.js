const calculaLanche = (codigo, quantidade) =>{
    switch (codigo) {
        case 100:
            console.log(`${quantidade} Cachorro Quente, custa ${quantidade*3}`)
            break;
        case 200:
            console.log(`${quantidade} Hambúger Simples, custa ${quantidade*4}`)
            break;
        case 300:
            console.log(`${quantidade} Cheeseburguer, custa ${quantidade*5.5}`)
            break;
        case 400:
            console.log(`${quantidade} Bauru, custa ${quantidade*7.5}`)
            break;
        case 500:
            console.log(`${quantidade} Refrigerante, custa ${quantidade*3.5}`)
            break;
        case 600:
            console.log(`${quantidade} Suco, custa ${quantidade*2.8}`)
            break;
        default:
            console.log('Produto não existe.')
            break;
    }
}


calculaLanche(100,4)
calculaLanche(200,4)
calculaLanche(300,4)
calculaLanche(400,4)
calculaLanche(500,4)
calculaLanche(600,4)
calculaLanche(603,4)
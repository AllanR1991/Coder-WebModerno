const veiculoCompra = (veiculo)=>{
    switch (veiculo){
        case 'hatch':
            return 'Compra efetuada com sucesso'
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            return 'Tem certeza que não prefere este modelo?'
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui'
    }
}

console.log(veiculoCompra('hatch'))
console.log(veiculoCompra('sedan'))
console.log(veiculoCompra('motocicleta'))
console.log(veiculoCompra('caminhonete'))
console.log(veiculoCompra('pickup'))
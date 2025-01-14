function planoDeAumento( plano, salario){
    switch (plano) {
        case 'A':
            console.log(salario*1.10)
            break;
        case 'B':
            console.log(salario*1.15)
            break;
        case 'C':
            console.log(salario*1.20)
            break;
        default:
            console.log('Plano inserido é invalido.')
            break;
    }
}

planoDeAumento('A',1000)
planoDeAumento('B',1000)
planoDeAumento('C',1000)
planoDeAumento('D',1000)
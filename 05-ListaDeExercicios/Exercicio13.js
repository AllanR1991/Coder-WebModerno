//Programa que verifica se um dia é útil , fim de semana ou inválido;

const diaUtil = (dia) => {
    switch (dia) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return `O dia ${dia} é um dia util.`    
        case 7:
        case 1:
            return `O dia ${dia} é um final de semana`    
        default:
            return `O dia ${dia} é um dia inválido`;
    }
}

console.log(diaUtil(1))
console.log(diaUtil(2))
console.log(diaUtil(4))
console.log(diaUtil(9))
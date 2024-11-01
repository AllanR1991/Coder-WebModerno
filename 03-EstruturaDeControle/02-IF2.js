function teste1 (num) {
    if(num>7)
        console.log(num);// Neste caso como nao tem chaves para delimitar o if apenas a primeira sentença de codigo seguida do if faz parte dele.
        console.log('Final');
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); { // Cuidado com ";", não usar com as estruturas de controle.
        console.log(num)
    }
}

teste2(6)
teste2(8)
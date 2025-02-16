/*
40) ​Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de 
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o 
conceito B e de 9,0 a 10,0 o conceito A.
*/

function conceitoNota(vetor){
    return vetor.map(element => {
        if(element>0 && element<5){
            return "D";
        }else if (element>=5 && element<7){
            return "C"
        }else if (element>=7 && element<9){
            return "B"
        }else if(element>=9 && element<11){
            return "A"
        }
    })
}

console.log(conceitoNota([3,5,6,7,10]))
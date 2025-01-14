//Calculo da media ponderada de um aluno e tres notas

const mediaPonderada = (x1, x2, x3) => {
    const maiorNota = 4;
    const nota = 3;
    resultado = ((x1 * maiorNota) + (x2 * nota) + (x3 * nota)) / (maiorNota + nota + nota)
    if (resultado < 5) {
       return `${resultado}, Reprovado`
    } else {
        return `${resultado}, Aprovado`
    }
}

const calcMediaPonderada = (codigoAluno, nota1, nota2, nota3) => {
    if (nota1 > nota2 && nota1 > nota3) {
       console.log(`Código do aluno:${codigoAluno}, notas: ${nota1} ${nota2} ${nota3}, média: ${mediaPonderada(nota1, nota2, nota3)}`)
    } else if (nota2 > nota1 && nota2 > nota3) {
        console.log(`Código do aluno:${codigoAluno}, notas: ${nota1} ${nota2} ${nota3}, média: ${mediaPonderada(nota2, nota1, nota3)}`)
    } else {
        console.log(`Código do aluno:${codigoAluno}, notas: ${nota1} ${nota2} ${nota3}, média: ${mediaPonderada(nota3, nota1, nota2)}`)
       
    }
}

calcMediaPonderada(123, 2.8, 6, 3.5)
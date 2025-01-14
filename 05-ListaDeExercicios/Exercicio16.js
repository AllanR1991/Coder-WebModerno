//programa de calculo

const calculadora = (num1, operador, num2) => {
    switch (operador) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            console.log(`A operação, selecionada não está disponivel.`)
            break;
    }
}

console.log(calculadora(5,'+',5))
console.log(calculadora(5,'-',5))
console.log(calculadora(5,'*',5))
console.log(calculadora(5,'/',5))
console.log(calculadora(5,',',5))
const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // Conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
//O método bind em JavaScript é usado para criar uma nova função que, quando chamada, terá seu this explicitamente definido para o valor fornecido. Isso é particularmente útil em situações em que o valor de this pode mudar devido ao contexto de execução.
falarDePessoa()

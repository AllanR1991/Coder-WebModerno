// Função em JS é First-Class Object (Citizens)
// Higher-Order function

// Criar de forma literal
function fun1() { } //Função sempre retorna undefined se nao tiver retorno;

// Armazenar em uma variavel
const fun2 = function () { }

// Armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3)) // acesando o elemento 0 e passando o valor de 2 e 3

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

// Passar função como parametro
function run(fun) {
    fun()
}

run(function () { console.log('Execultando...') })

// Uma Função pode retornar/conteer uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
// Aqui, estamos chamando soma(2, 3) e, imediatamente após, chamando o resultado dessa função com o argumento (4)
soma(2,3)(4)
const cincoMais = soma(2,3)
cincoMais(4) // Acessamos a função contida no retorno da função cincoMais.
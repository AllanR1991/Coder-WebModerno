const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao() // a função carrega com ela o local onde ela foi definida, entao ela foi procurar no escopo onde ela foi definia po isso trouxe global e nao local.
}

exec()
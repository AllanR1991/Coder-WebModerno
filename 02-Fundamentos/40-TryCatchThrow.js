function tratarErroELancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'Mensagem'
    throw {
        nome: error.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try{ //  Tenta execultar
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e) { // Se der erro 
        tratarErroELancar(e)
    } finally { // Sempre sera execultado
        console.log('final')
    }
}

const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)
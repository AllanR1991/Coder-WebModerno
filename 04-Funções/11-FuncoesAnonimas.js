const soma = function (x,y){
    return x+y;
}

const imprimirResultaso = function (a,b,operacao = soma){ 
    console.log(operacao(a,b))
}

imprimirResultaso(3,4)
imprimirResultaso(3,4, soma)
imprimirResultaso(3,4, function(x,y){
    return x-y
})

const pessoa = { 
    falar: function(){
        console.log('Opa')
    }
}

pessoa.falar()
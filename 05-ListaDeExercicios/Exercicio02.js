const classificacaoTriangulo = (a,b,c) =>{
    if(a == b && b == c && c==a){
        false, true, false
        console.log(`O triangulo é um Equilátero.`)
    }else if (a == b || b==c || c == a ){
        console.log(`O triangulo é um Isósceles.`)
    }else{
        console.log(`O triangulo é Ecaleno.`)
    }
}

classificacaoTriangulo(3,17,53)
classificacaoTriangulo(3,37,37)
classificacaoTriangulo(37,37,37)
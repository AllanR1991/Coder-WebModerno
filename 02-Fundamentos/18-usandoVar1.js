
// ⚠️⚠️⚠️⚠️ Atenção ⚠️⚠️⚠️⚠️⚠️
// ⚠️⚠️⚠️⚠️ Var dentro de apenas bloco de codigo pode ser acessado no mesmo bloco ou fora do bloco

{
    {
        {
            { var sera = 'Sera???' }
            console.log(sera)
        }
    }
}
console.log(sera)

// Var dentro de uma função só é visivel dentro da função
function teste(){
    var local =123;
    console.log(local)
}

teste()
console.log(local)

// No browser variavel global vai para window.
// No node variavel global vai para global.

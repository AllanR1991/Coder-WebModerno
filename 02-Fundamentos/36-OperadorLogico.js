/**
 * Operador Binario
 * V e V = V
 * V e F = F
 * F e ? = F
 * 
 * V ou ? = V
 * F ou V = V
 * F ou F = F
 * 
 * 
 * Os 2 tem que ser diferente
 * V XOR V = F
 * V XOR F = V
 * F XOR V = V
 * F XOR F = F
 * 
 * Operandor unario
 * !V = F
 * !F = V
 * 
 */

function compras(trabalho1, trabalho2)
{
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    // const comprarTv32 = !!(trabalho1 ^ trabalho2); //Operador Bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete
    // Forma mais facil de criar objeto, sendo o nome da variavel o nome da varivel e o valor seu proprio valor.
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))
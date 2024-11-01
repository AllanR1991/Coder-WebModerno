// ⚠️⚠️⚠️ Esse é um exemplo de que a var é do tipo global

var numero = 1;
{
    var numero = 2; // ⚠️ Com var é possivel fazer uma redeclaração da variavel.
    console.log('Dentro = ', numero)
}
console.log('Fora = ', numero)
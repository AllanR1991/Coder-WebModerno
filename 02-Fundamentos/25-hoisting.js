// Hoisting
console.log('a = ', a);
var a = 2;
console.log('a = ', a)

function teste() {
    console.log('a = ', a);
    var a = 2;
    console.log('a = ', a)
}

teste()

// ⚠️⚠️⚠️os exemplos acima é mesma coisa que se tivesse feito assim⚠️⚠️⚠️
// var a;
// console.log('a = ', a);
// a = 2;
// console.log('a = ',a)

// ⚠️⚠️⚠️Com let hoisting não acontece.⚠️⚠️⚠️
// console.log('b = ', b)
// let b = 2;
// console.log('b = ', b)


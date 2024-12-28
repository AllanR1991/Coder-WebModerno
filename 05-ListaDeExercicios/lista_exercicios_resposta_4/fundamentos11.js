function isYearBisexto (ano) {
    if (ano <= 0){
        return false
    } else if (ano % 400 == 0) {
        return true
    } else if (ano % 100 == 0) {
        return false
    } else if (ano % 4 == 0) {
        return true
    } else {
        return false
    }
}

console.log(isYearBisexto(0))
console.log(isYearBisexto(4))
console.log(isYearBisexto(100))
console.log(isYearBisexto(400))
console.log(isYearBisexto(800))
console.log(isYearBisexto(2020))
console.log(isYearBisexto(2021))



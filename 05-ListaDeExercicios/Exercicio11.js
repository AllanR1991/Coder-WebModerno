function isYearBixesto(ano) {
    if (ano <= 0) {
        return false;
    } else if (ano % 400 == 0) {
        return true;
    } else if (ano % 100 == 0) {
        return false;
    } else if (ano % 4 == 0) {
        return true;
    } else {
        return false;
    }

}

console.log(isYearBixesto(0))
console.log(isYearBixesto(4))
console.log(isYearBixesto(100))
console.log(isYearBixesto(400))
console.log(isYearBixesto(800))
console.log(isYearBixesto(2020))
console.log(isYearBixesto(2021))
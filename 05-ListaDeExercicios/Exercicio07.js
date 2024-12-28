const baskara = (ax2, bx, c) => {
    //baskaa 3x² - 5x + 12 = 0
    const determinante = bx ** 2 - 4 * ax2 * c
    if (determinante < 0) {
        return `Delta é negativo.`
    } else {
        const raizQuadrada = Math.sqrt(determinante)
        const divisor = 2*ax2
        const dividendoPositivo = -bx + raizQuadrada
        const dividendoNegativo = -bx - raizQuadrada
        const x1 = dividendoPositivo / divisor
        const x2 = dividendoNegativo / divisor
        return [(x1),(x2)]
    }
}

console.log(baskara(1,12,-13))
console.log(baskara(2,-16,-18))
console.log(baskara(1,2,2))
console.log(baskara(1, 3, 2))
console.log(baskara(3, 1, 2))

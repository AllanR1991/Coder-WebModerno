function Pessoa(){
    this.idade = 0

    const self = this // Maneira de evitar qe o this mude.
    setInterval(function (){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/,1000)
}

new Pessoa
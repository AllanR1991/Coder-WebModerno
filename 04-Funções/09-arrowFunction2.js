//This não varia em arrow function

function Pessoa(){
    this.idade = 0;
    setInterval(()=>{ //https://developer.mozilla.org/pt-BR/docs/Web/API/Window/setInterval
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa
/*
34)​ Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso 
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
*/


function comparaCaracteres(string1, string2){
    let caractesContem1 = true;
    let caractesContem2 = true;
    string1 = string1.toLowerCase().split('');
    string2 = string2.toLowerCase().split('');

    string1.forEach((letra) => {
        if(!string2.includes(letra)){
            return caractesContem2 = false;
        }
    })
    string2.forEach((letra) => {
        if(!string1.includes(letra)){
            return caractesContem1 = false;
        }
    })

    return caractesContem1 === caractesContem2 ? true : false;
}

console.log(comparaCaracteres('Allán','Állan'))
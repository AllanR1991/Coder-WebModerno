/*
Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas 
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em 
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/



const calcTaxaCrescimento = (altura1, tx1, altura2, tx2) => {
    console.log('Inciio\n\n')
    let alturaIgual = altura1 === altura2 ? true : false;
    let menorAltura = altura1 > altura2 ? altura2 : altura1;
    let anos = 0;
    console.log(menorAltura);
    
    if(alturaIgual){
        if(tx1 == tx2){
            console.log('As duas crianças crescen juntos');
        }else if(tx1 > tx2){
            console.log('A primeira criança passara a segunda criança em um ano.');
        }else{
            console.log('A segunda criança passara a primeira criança em um ano.');
        }
    }else if(menorAltura === altura1){
        if(tx1 > tx2){
            while(altura1<altura2){
                altura1+=tx1;
                altura2+=tx2;
                ++anos;
            };
            console.log(`A primeira criança sera maior em ${anos}`);
        }else{
            console.log('A primeira criança nunca será maior que a segunda criança.');
        }
    }else{
        if(tx2 > tx1){
            while(altura2<altura1){
                altura1+=tx1;
                altura2+=tx2;
                ++anos;
            };
            console.log(`A segunda criança sera maior em ${anos}`);
        }else{
            console.log('A segunda criança nunca será maior que a segunda criança.');
        }
    }
}
// Teste 1: Criança 1 é menor e tem taxa de crescimento maior
calcTaxaCrescimento(100, 10, 120, 5) 
// Esperado: A primeira criança será maior em X anos (dependendo do cálculo)

// Teste 2: Criança 2 é menor e tem taxa de crescimento maior
calcTaxaCrescimento(120, 5, 100, 10) 
// Esperado: A segunda criança será maior em X anos (dependendo do cálculo)

// Teste 3: Alturas iguais e taxas de crescimento iguais
calcTaxaCrescimento(100, 5, 100, 5)
// Esperado: As duas crianças crescem juntas

// Teste 4: Alturas iguais, mas taxa de crescimento da criança 1 é maior
calcTaxaCrescimento(100, 10, 100, 5) 
// Esperado: A primeira criança passará a segunda criança em um ano.

// Teste 5: Alturas iguais, mas taxa de crescimento da criança 2 é maior
calcTaxaCrescimento(100, 5, 100, 10) 
// Esperado: A segunda criança passará a primeira criança em um ano.

// Teste 6: Criança 1 é menor, mas taxa de crescimento menor
calcTaxaCrescimento(100, 2, 120, 5)
// Esperado: A primeira criança nunca será maior que a segunda criança.

// Teste 7: Criança 2 é menor, mas taxa de crescimento menor
calcTaxaCrescimento(120, 5, 100, 2)
// Esperado: A segunda criança nunca será maior que a primeira criança.

// Teste 8: Alturas diferentes, mas taxas de crescimento iguais
calcTaxaCrescimento(100, 5, 120, 5)
// Esperado: A criança menor nunca ultrapassará a maior.

// Teste 9: Criança 1 é menor e tem taxa de crescimento muito maior
calcTaxaCrescimento(100, 20, 120, 5) 
// Esperado: A primeira criança será maior em X anos (dependendo do cálculo)

// Teste 10: Criança 2 é menor e tem taxa de crescimento muito maior
calcTaxaCrescimento(120, 5, 100, 20) 
// Esperado: A segunda criança será maior em X anos (dependendo do cálculo)
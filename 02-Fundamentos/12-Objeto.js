// Definindo um Obnjeto.
// Objeto é uma coleção de chave e valor;
const prod1 = {};
// Propriedade criada dinamicamente.
prod1.nome = 'Celular Ultra Mega';
prod1.preço = 4998.90;

prod1['Desconto Legal'] = 0.40; // JS permite criar atributos com espaço, mas é bom evitar.

console.log(prod1)


// Criando objeto literal
const prod2 = {
    nome : 'Camisa Polo',
    preco : 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

console.log(prod2)

// transformando prod2 em json é um formato textual. 
'{"prod2" : {"nome" : "Camisa Polo", "preco" : 79.90, "obj": {"blabla": 1,"obj": {"blabla": 2}}}}'
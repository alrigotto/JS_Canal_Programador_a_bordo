console.log('======================================================');
console.log("============= Introdução ao destructuring ============");
console.log('======================================================');

// Novo método para acessar propriedades de objetos
var usuario = {
    nome: 'andre',
    cidade: 'Osasco',
    idade: 47,
    peso: 85,
    pais: 'Brasil'
}
// jeito tradicional de acessar propriedades de objetos.
var cidade = usuario.cidade;
console.log("Método antigo ->", cidade);


// Jeito novo de acessar objetos no ES6

var { idade } = usuario; // novo método
console.log("Método novo no ES6 ->", idade);

//pode-se acessar mais de uma propriedade ao mesmo tempo
var { nome, peso } = usuario;

console.log("Método novo acessando mais de uma propriedade ->", nome, peso);
console.log('-----------------------------------------------------------');

// ==================================================================================
//Se for querer usar um nome de variavel diferente da propriedade pode-se fazer assim:
var { pais: origem } = usuario; // foi extraído a propriedade 'pais' e armazenado na variavel 'origem'

console.log("Usando uma variavel com nome diferente da propriedade ->", origem);


console.log('-----------------------------------------------------------');
//========================================================================================
// Acessando objeto aninhados com este método:

var usuario2 = {
    nome: {
        primeiro: 'Neuza',
        ultimo: 'Meira'
    }
};

// jeito tradicional de acessar propriedades de objetos dentro de objeto:
var primeiro = usuario2.nome.primeiro;
console.log("Método antigo de acessar objeto dentro de objeto ->", primeiro);


// Jeito novo de acessar objeto dentro de objeto no ES6
var { nome: { primeiro } } = usuario2; // novo método
console.log("Método novo no ES6 ->", primeiro);

console.log('-----------------------------------------------------------');
// Usando valor default na propriedade, caso não exista 
var usuario3 = {
    nome: {
        primeiro: 'Rodrigo'
        // ultimo: 'não tem' // será usado 'Bedutti' como default.
    }
};
// 'Bedutti' é o valor default caso a propriedade não exista.
var { nome: { ultimo = 'Bedutti' } } = usuario3; 
console.log("Uso de valor default ->", ultimo);

console.log('-----------------------------------------------------------');

// Podemos aplicar destructuring em funções também, assim passamos somente as propriedades
// que desejamos e não o objeto inteiro.
function imprimiUsuario({nome, idade, sexo, pais = 'Argentina'}) { //'pais' é para exemplo de valor default 
// o mais comum seria 'function imprimiUsuario(user) {'     
    console.log(nome); // aqui seria 'user.nome'
    console.log(idade); //// aqui seria 'user.idade'
    console.log(sexo); // aqui seria 'user.sexo'
    console.log(pais); // 
}

var usuarioFunction = {
    nome: 'Eduardo',
    idade: 45,
    sexo: 'M',
    //pais: 'Brasil' // apenas para testar valor default.
}

imprimiUsuario (usuarioFunction)

console.log('-----------------------------------------------------------');

//Object.keys e Objects.values
console.log("O método 'Object.keys' retorna as propriedades:", Object.keys(usuarioFunction));
console.log("O método 'Object.values' retorna os valores:   ", Object.values(usuarioFunction));


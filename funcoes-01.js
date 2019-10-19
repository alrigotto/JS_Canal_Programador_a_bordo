
console.log();
console.log('======================================================');
console.log("Teste de variável dentro de funções e uso do 'Barra N'");
console.log('======================================================');
// Teste de variável dentro de funções.
function escreva() {
    console.log('Escrevendo aqui e na linha de\nbaixo'); // '\n' pula linha no console.
    var a1 = 10; // com 'var' a variável fica local.
    a2 = 20; // sem var esta variável fica global.
}

escreva();
// console.log(a1); // erro! "a1 is not defined" por causa do 'var' na função.
console.log(a2); // Sem o 'var' 'a2' virou global e não dá erro.

console.log();
console.log('===================================================');
console.log('===== Função com multiplos parâmetros (rest) ======');
console.log('===================================================');
//=========================================================================

// função com multiplos parâmetros, a, b e c são parametros normais, mas se forem
// passados mais parametros, eles ficarão armazenados em 'complementos'
// em formato de array
function multiplosParametros(a, b, c, ...complementos) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(complementos);
}

var parametrosTeste = multiplosParametros(10, 20, 30, 40, 50, 60, 70);

console.log(parametrosTeste);// resultado => 10, 20, 30, [ 40, 50, 60, 70 ]


console.log();
console.log('===================================================');
console.log('============ Função Auto-Executável ===============');
console.log('===================================================');
//=========================================================================

// A função auto-executavel serve para proteger variáveis, funções privadas, etc...
(function autoExecutavel(nome) { // A função auto-executavel tem que ser protegida por parenteses. 
    console.log('Executei!');
    console.log(nome);
}('Andre')); // O parâmetro fica antes de fechar o parenteses de proteção.


console.log();
console.log('===================================================');
console.log('===== Função guardada dentro de uma variável ======');
console.log('===================================================');
//=========================================================================

// Função guardada dentro de uma variável
var subtraiDoisNumero = function subtrai(a, b) {
    return a - b;
}
console.log(subtraiDoisNumero(10, 3));

// não precisa colocar nome, ela pode ser anonima.
var subtraiDoisNumero = function (a, b) {
    return a - b;
}
console.log(subtraiDoisNumero(5, 1));


// subtrai(10, 7) //vai dar erro!

console.log();
console.log('===================================================');
console.log('================= Função anonima ==================');
console.log('===================================================');
//=========================================================================

//Função anonima
var subtraiTresNumero = function (a, b, c) {
    return a - b - c;
}
console.log(subtraiTresNumero(10, 2, 4));


console.log();
console.log('===================================================');
console.log('============== Função de Callback =================');
console.log('===================================================');
//=========================================================================

function somaCallback(a, b, fnCallback) { // dois parametros e mais um que tem que ser uma função.
    return fnCallback(a + b);
}

var multiplica = function (valor) {
    return valor * 2;
}

var divide = function (valor) {
    return valor / 2;
}

console.log(somaCallback(10, 3, multiplica)); // 'multiplica' é a função de callback
console.log(somaCallback(10, 3, divide)); // 'divide' é a função de callback

console.log(somaCallback(10, 3, function (valor) { // callback dentro da chamada da função.
    return valor + 7;
}));



//=========================================================================
console.log();
console.log('===================================================');
console.log('================ Parâmetros Padrão ================');
console.log('===================================================');


function escreveNome(nome = 'André', idade = 47) { // 'André' pata nome e 47 para idade são o valores padrões,
    console.log(nome);                       //caso seja omitido na chamada da função.
    console.log(idade);
}

escreveNome(); // vai aparecer os valores padrões.
escreveNome('José', 70); // 


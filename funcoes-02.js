
console.log();
console.log('======================================================');
console.log("----- Manipulando o escopo de 'this' com o 'new' -----");
console.log('======================================================');


// this no escopo global (mais alto) é o próprio 'window' do navegador.
console.log("No navegador seria o próprio objeto 'window', mas no node é o Objeto Global ->",this);

function usuario(){
    console.log(this);
}

usuario(); // fazendo uma chamada simples da função, o 'this' ainda será global
console.log("--------------------------------------------------------");


// se usar o operador 'new' para chamar a função, o this mudará e será o próprio objeto
console.log("O 'this' de dentro da função foi mudado e agora é o\npróprio objeto por causa do operador 'new':");
new usuario();
console.log("--------------------------------------------------------");


function usuario2() {
    this.nome = 'André';
    this.idade = 47;
    this.soma = function (a, b) {
        return a + b;
    }
}

// O próprio VSCode sugeriu declarar a função como classe e funcionou normalmente.
// class usuario2 {
//     constructor() {
//         this.nome = 'André';
//         this.idade = 47;
//         this.soma = function (a, b) {
//             return a + b;
//         };
//     }
// }

//o escopo de 'this' dentro da função só muda quando a mesma é instânciada com o operador 'new'.

console.log("Sem instanciar com o 'new' o 'this' não\nse refere a própria função, o resultado é ->", usuario2.nome); //aqui fica undefined

var user = new usuario2; // instanciando a variavel com o operador 'new'

// após o 'new' o this de dentro da função vai se referir a própria função.
console.log("Após instanciar com o 'new' o this passa a se referir a função ->", user); 
console.log("Após instanciar com o 'new' o this passa a se referir a função ->",user.nome);
console.log("Após instanciar com o 'new' o this passa a se referir a função ->",user.idade);
console.log("Após instanciar com o 'new' o this passa a se referir a função ->",user.soma(2, 3));


console.log();
console.log('======================================================');
console.log("-------- Alterando 'this' com o método 'call' --------");
console.log('======================================================');

// usando o método 'call'
function recebeCall () {
    console.log("Valor do 'this' enviado pelo 'call' ->", this)
}

var ObjetoThis = { // objeto para teste que será enviado pelo método 'call'
    nome: 'Andre',
    idade: 47
}

// O método 'call' da função envia o valor de this para ser usada nela mesma
recebeCall.call(ObjetoThis); // objeto enviado como this da função
// além de um objeto, pode ser qualquer outra coisa...
recebeCall.call('teste de string'); // uma string 
recebeCall.call(10); // um número
recebeCall.call([1, 2, 4]); // um array
recebeCall.call(true); // um boolean

console.log("--------------------------------------------------------");

// Aqui é a mesma coisa, porém serão colocados parametros na função
function recebeCall2 (p1, p2, p3) {
    console.log("Parametros da função que vieram do 'call' ->", p1, p2, p3);
    console.log("Valor de 'this' que veio do 'call' ->", this)
}

var ObjetoThis2 = { // objeto enviado como this da função
    nome: 'Joseé',
    idade: 58
}

// após o parâmetro this, serão colocados os parametros da função (p1, p1, p3)
recebeCall2.call(ObjetoThis2, 'teste', 20, [2, 5]) 

console.log();
console.log('======================================================');
console.log("-------- Alterando 'this' com o método 'apply' -------");
console.log('======================================================');

// O método 'apply' é idêntico ao 'call' a única diferença é que quando há parametros,
// eles tem que serem passados dentro de um array.

function recebeApply (p1, p2, p3, p4) {
    console.log("Parametros da função que vieram do 'apply' ->", p1, p2, p3, p4);
    console.log("Valor de 'this' que veio do 'apply' ->", this)
}

var ObjetoThis3 = { // objeto enviado como this da função
    nome: 'Joseé',
    idade: 58
}

// após o parâmetro this, serão colocados os parametros da função (p1, p1, p3, p4), mas como
// estamos usando o método 'apply' esses parametros terão que estar dentro de um array. 
recebeApply.apply(ObjetoThis3, ['apply_teste', 44, [2, 5, 60], true]);
//outro exemplo usando string:
recebeApply.apply('teste', ['apply_teste', 44, [2, 5, 60], true]) 


console.log();
console.log('======================================================');
console.log("-------- Alterando 'this' com o método 'bind' --------");
console.log('======================================================');

// o bind é igual ao call, mas ele não invoca a função, ele apenas passa o
// 'this' e os parametros (se houverem) para uma nova instância que para ser 
// usada precisa ser atribuída a uma variavel, veja:

function recebeBind (p1, p2, p3) {
    console.log("Parametros da função que vieram do 'bind' ->", p1, p2, p3);
    console.log("Valor de 'this' que veio do 'bind' ->", this)
}

var ObjetoThis3 = { // objeto enviado como this da função
    nome: 'Márcia',
    idade: 53
}

// assim como no 'call', após o parâmetro this, serão colocados os parametros da função (p1, p1, p3) 
recebeBind.bind(ObjetoThis3, 'teste_bind', 15, [2, 100]) // nada acontece porque 'bind' não invoca a função.

//Para usar tem que colocar numa variavel:
var x = recebeBind.bind(ObjetoThis3, 'teste_bind', 15, [2, 100]);

x(); 

console.log("--------------------------------------------------------");
//É possível passar os parametros na chamada da função, ai não é
// necessário passar na chamada do bind. Pode também passar alguns
//parametros no bind e o restante na chamada da função.

var y = recebeBind.bind(ObjetoThis3);
y('parâmetro', 'passado', 'na_função');

console.log("--------------------------------------------------------");

var z = recebeBind.bind(ObjetoThis3, 'começa_aqui', 'no_bind');
z('acaba_na_função');



console.log();
console.log('======================================================');
console.log("------------------ Arrow function --------------------");
console.log('======================================================');

// OBS: não é possível alterar o 'this' de uma arrow function, nem mesmo usando 'call', 'bind' ou 'apply'


// exemplo de arrow function
var somar = (a, b) => {
    return a + b;
}
console.log(somar(9, 8));


// forma mais curta (sem return) caso seja retorno direto 
var somar2 = (a, b) => a + b; 
console.log(somar2(3, 5));


// retorno protegido por parenteses, para retornar um objeto
var retornaUsuario = () => (
    {
        nome: 'Sérgio',
        idade: 48
    }
)
console.log(retornaUsuario());

// para função com apenas um parâmetro é possível omitir os parenteses do parâmetro.
var retornaUsuario2 = cidade => (
    {
        nome: 'Sérgio',
        idade: 48,
        cidade
    }
)
console.log(retornaUsuario2('Osasco'));

// OBS: não é possível alterar o 'this' de uma arrow function, nem mesmo usando 'call', 'bind' ou 'apply'







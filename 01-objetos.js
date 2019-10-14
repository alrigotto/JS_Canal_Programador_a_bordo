
console.log('======================================================');
console.log("============== Criando e utilizando ==================");
console.log('======================================================');



// Criação de um objeto:
var usuario = {
    nome: 'André',
    sobrenome: 'Rigotto',
    idade: 47
}
console.log('Acessando valores de um objeto:');
console.log(usuario);
console.log(usuario.nome);
console.log(usuario.sobrenome)
console.log(usuario.idade);

// outra maneira de acessar o valor de uma propriedade de um objeto.
console.log("Usando colchetes para acessar um valor:", usuario['sobrenome']);

console.log();
console.log('======================================================');
console.log("============== Adicionando elementos =================");
console.log('======================================================');

//adicionando uma propriedade
usuario.ano = 1972;

console.log("propriedade 'ano' foi adicionada: ", usuario);
console.log('usuario.ano =', usuario.ano, 'ou', "usuario['ano'] =", usuario['ano']);

// Uma array pode ser adicionado a um objeto
console.log();
console.log("Adicionando um array:");
usuario.atividades = ['Programar', 'Trabalhar', 'Estudar'];
console.log("propriedade 'atividades' foi adicionada: ", usuario);
console.log('usuario.atividades =', usuario.atividades);

// Um objeto também pode ser adicionado a um objeto
console.log();
console.log("Adicionando um objeto:");
usuario.competencias = { // será um objeto dentro do objeto
    linguagens: ['Python', 'JavaScript', 'HTML'],
    profissao: 'Eletricista',
    experiencia: 25
}

console.log("Propriedade (objeto) 'competencias' foi adicionada: ", usuario);
console.log('usuario.competencias =', usuario.competencias);



console.log();
console.log('======================================================');
console.log("================ Deletando elementos =================");
console.log('======================================================');

// para remover uma propriedade:
delete usuario.idade;

console.log("propriedade 'idade' foi deletada: ", usuario);


console.log();
console.log('======================================================');
console.log("================ Funções em Objetos ==================");
console.log('======================================================');

// Um novo objeto que contém uma função:
var usuario2 = {
    digaOi: function (nome) {
        return `Olá ${nome}`;
    }
};
// A função pode ser encurtada.
var usuario2 = {
    digaOi(nome) {
        return `Olá ${nome}`;
    }
};

console.log(usuario2.digaOi('Teste'));
console.log(usuario2.digaOi('André'));
console.log(usuario2.digaOi('Neuza'));

console.log();
console.log('======================================================');
console.log("=== Variável como valor e propriedade de um objeto ===");
console.log('======================================================');

// uma variável pode ser colocada dentro de um objeto:

var cor = 'azul';
var idade = 47;
var nome = 'André';

var usuario3 = {
    cor,   // aqui já está na forma curta, antes do ES6 era desta foram: cor: cor
    idade, // aqui já está na forma curta, antes do ES6 era desta foram: idade: idade
    nome   // aqui já está na forma curta, antes do ES6 era desta foram: nome: nome
}

console.log(usuario3);
console.log(usuario3.cor);
console.log(usuario3.idade);
console.log(usuario3.nome);


console.log();
console.log('======================================================');
console.log("================= Merge de Objetos ===================");
console.log('======================================================');

// Mesclando dois objetos (poderia ser até mais).
var usuario4 = { // objeto 1
    nome: 'Andre',
    idade: 47
}

var extraInfo = { // objeto 2
    pais: 'Brasil',
    cidade: 'Osasco'
}

console.log("Mesclando o objeto 'extraInfo' com 'usuario4':");

// mesclou 'extraInfo' para dentro de 'usuario4'
Object.assign(usuario4, extraInfo);

console.log("usuario4:", usuario4);
console.log("'usuario4' foi modificado, mas extraInfo não:", extraInfo);
console.log();

console.log("Mesclando o objeto 'extraInfo' com 'usuario4' em um novo objeto:");

// mesclou os dois objetos num novo objeto
var novoUsuario = Object.assign({}, usuario4, extraInfo);
console.log("novoUsuario é:", novoUsuario);


console.log();
console.log('======================================================');
console.log("===== Merge de objetos com operador Spread (...) =====");
console.log('======================================================');

// colocando os objetos de de novoUsuario2 de forma manual:
var novoUsuario2 = { 
    usuario4, 
    extraInfo
}

// desta forma o merge não ficou como desejado, pois cada objeto virou uma propriedade.
console.log(novoUsuario2);
console.log();
//  Merge de objetos com operador Spread (...)
var novoUsuario2 = { 
    ...usuario4, // com o operador spread o objeto fica da forma correta.
    ...extraInfo
}

// desta vez o usuarioNovo recebeu corretamente as propriedades dos dois objetos.
console.log(novoUsuario2); 

console.log();
console.log('======================================================');
console.log("============ Passando variável como chave ============");
console.log('======================================================');

var nomeVariavel = 'estado';
// Se for querer que o valor de 'nomeVariavel' (estado) seja a propriedade
// tem que colocar no objeto a variavel entre colchetes.
var usuario5 = {
    nomeVariavel: 'São Paulo'
}

console.log(usuario5);

//Desta forma o valor da variavel será a propriedade.
var usuario5 = {
    [nomeVariavel]: 'São Paulo'
}

console.log(usuario5);
//---------------------------------------------------------------------

console.log();
console.log('======================================================');
console.log("================= Getters e Setters ==================");
console.log('======================================================');


// Array de usuários:
var users = [
    {
        nome: 'Andre',
        idade: 47
    },
    {
        nome: 'Neuza',
        idade: 46
    },
    {
        nome: 'Luciana',
        idade: 24
    }
];

// Objeto para navegar no array de usuários.
var userNav = {
    posicao: 0,
    // a função 'atual' é definida 2 vezes, isso só pode porque uma definição é para 'get' 
    // e a outra é para 'set'. 
    get atual() { // get é usado para que a função apenas retorne um valor
        return users[this.posicao]
    },
    set atual(posicao) { // set é usado para apenas definir um valor numa função
        this.posicao = posicao;
    },
    proximo() {  // conforme já visto mais acima, aqui poderia ser: 'proximo: function() {...'
        ++this.posicao;
    },
    anterior() {
        --this.posicao;
    }
}

console.log(userNav.atual); // users[0] através do 'get'
userNav.proximo();  // avança para o proximo usuário
console.log(userNav.atual);  // user[1] através do 'get'
userNav.proximo();  // avança para o proximo usuário
console.log(userNav.atual);  // user[2] através do 'get'

userNav.atual = 0;
console.log(userNav.atual); // através do 'get'

userNav.atual = 1;
console.log(userNav.atual); // através do 'get'

userNav.atual = 2;
console.log(userNav.atual); // através do 'get'


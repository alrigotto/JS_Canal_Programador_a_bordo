
console.log('===================================================');
console.log('=================== Closures ======================');
console.log('===================================================');
console.log();

console.log('========== Exemplo memorização de escopo ==========');
//demonstração de escopo
function imprimeNome() {
    let nome = 'André';
    return function () {
        // A variavel 'nome' foi memorizada a função pai 
        return nome;
    }
}


console.log(imprimeNome()); // aqui apenas uma função será retornada;

var func = imprimeNome(); // instanciando a função
console.log(func());



console.log();

// ==================================================================================
console.log('=============== Funções privadas ==================');

// Nesta função é demonstrada uma das características do closure. A função 'auxiliadora não será acessível
// do lado de fora, mas é usada internamente pelas outras funções, ou seja ela é um tipo equivalente de
// método privado.
function MinhaBiblioteca() {
    function auxiliar(valor) { // função privada, somente funções externas podem utilizá-la.
        return 10 + valor;
    }
    return {
        add5() {
            return auxiliar(5);
        },
        add7() {
            return auxiliar(7);
        }
    }
}

var biblioteca = MinhaBiblioteca();
console.log(biblioteca.add5());
console.log(biblioteca.add7());

//console.log(biblioteca.auxiliar()); // aqui da erro !!! pois ela é privada e não pode ser acessada de fora.

console.log();
console.log('=========== Evitando funções anônimas =============');

function inicializa() {
    let pessoa = 'Neuza';
     // 'setTimeout' executa uma função após um tempo pré definido.
    setTimeout(function () {  // aqui é uma função anônima e precisa ser evitada.
        console.log("Usando função anônima no 'setTimeout'");
        console.log('Passou um tempo setado em setTimeout ->', pessoa);
        console.log('---------------------------------------------------');
    }, 1000)
}

inicializa();


console.log();


// Criando uma função para ser usada pelo 'setTimeout' e evitar função anônima.
// function externa(){
//     console.log("Usando uma função externa no 'setTimeout'");
//     console.log('Passou um tempo setado em setTimeout ->', pessoa);
//     console.log('---------------------------------------------------');
// }

// function inicializa2() {
//     let pessoa = 'Mariana';
    // 'setTimeout' executa uma função após um tempo pré definido.
    // Um detalhe interessante é que não se pode invocar a função (Ex: externa()),
    // porque é o 'setTimeout' que vai invocar ela, portanto é necessário apenas colocar o nome da função.
    // setTimeout(externa, 4000) // não é para invocar com parênteses! 
// }

// inicializa2(); 
// O código acima foi comentado porque será gerado um erro pois na função 'externa' a variavel 'pessoa'
// não está definida, abaixo segue a função inicializa3 que tenta resolver isso:

//---------------------------------------------------------------------------------

// aqui coloquei 'pessoa' como parâmetro de 'externa2' para solucionar o problema de 'pessoa não declarada'
// function externa2(pessoa){
//     console.log("Usando uma função externa no 'setTimeout' com parâmetro.");
//     console.log('Passou um tempo setado em setTimeout ->', pessoa);
//     console.log('---------------------------------------------------');
// }

// function inicializa3() {
//     let pessoa = 'Luciana';
//     // Apesar da advertência acima, a função 'externa2' no 'setTimeout' foi invocada com o parâmetro 'pessoa',
//     // isso foi feito na tentativa de passar 'pessoa' para a função externa e evitar o erro na mesma como
//     // visto acima. 
//     setTimeout(externa2(pessoa), 2000) 
// }

// inicializa3()

// Ainda assim é gerado um erro, mas deu para perceber que a função 'externa3' chegou a ser executada
// instantaneamente, isso ocorre porque no formato que está ('externa2(pessoa)') ela não é executada 
// pelo 'setTimeout' ela é executada pela própria chamada.
// Abaixo segue a solução para isso:


// Aqui em 'externaFinal4' será retornado uma função, assim o 'setTimeout' será satisfeito, a função não
// será executada imediatamente, não será gerado erro e a variavel 'pessoa' será passada por causa da
// característica do 'closure'.
function externaFinal(pessoa){
    return function () {
        console.log("Usando uma função externa no 'setTimeout' com parâmetro, retornando uma função e usando closure.");
        console.log('Passou um tempo setado em setTimeout ->', pessoa);
        console.log('---------------------------------------------------');
    }
}

function inicializa4() {
    let pessoa = 'Débora';
    // Apesar da advertência acima, a função 'externa2' no 'setTimeout' foi invocada com o parâmetro 'pessoa',
    // isso foi feito na tentativa de passar 'pessoa' para a função externa e evitar o erro na mesma como
    // visto acima. 
    setTimeout(externaFinal(pessoa), 4000) 
}

inicializa4()

/******************************************************
 * Função DEBOUNCE
******************************************************/
// Nesse caso é mandatório o uso da lib readline-sync, para obtermos a escuta de cada letra digitada para execução da função debouce
const readline = require('readline');

function debounce(fn, delay) {
    let timer = null;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}



/********************
** Menu de navegação
********************/
const prompt = require('prompt-sync')({ sigint: true });

let selector = undefined;
let num1 = 0;
let num2 = 0;
let num3 = 0;

while (selector !== 0) {

    console.clear(); //limpar o terminal para melhor vizualização 

    console.log(`
    \x1b[31mSeção 1:\x1b[0m Estruturas de Controle Avançadas
        \x1b[33m1. Validação de Datas\x1b[0m 
            - Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores formarem uma data real (meses de 28-31 dias, ano bissexto para fevereiro) e false caso contrário.
        \x1b[33m2. Jogo de Adivinhação\x1b[0m 
            - Escreva um script que gere um número aleatório de 1 a 100 e peça ao usuário, para adivinhar. Use while para repetir até acertar, contando tentativas e exibindo “mais alto” ou “mais baixo”
              a cada palpite errado.
        \x1b[33m3. Palavras Únicas\x1b[0m 
            - Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair todas as palavras únicas e exibi-las em um array.
    \x1b[31mSeção 2:\x1b[0m Funções e Recursão
        \x1b[33m4. Fatorial Recursivo\x1b[0m 
            - Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando um Error, e n === 0 retornando 1. 
        \x1b[33m5. Debounce\x1b[0m 
            - Crie function debounce(fn, delay) que receba uma função fn e um delay em ms, retornando uma nova função que só executa fn se não for chamada novamente dentro do intervalo.
        \x1b[33m6. Memoization\x1b[0m 
            - Implemente function memoize(fn) que armazene em cache chamadas anteriores de fn (por argumentos), retornando resultados instantâneos em repetidas invocações. 
    \x1b[31mSeção 3:\x1b[0m Arrays e Objetos Complexos           
        \x1b[33m7. Mapeamento e Ordenação\x1b[0m
            - Dado um array produtos = [{ nome, preco }, …], crie uma função que retorne um novo array apenas com os nomes, ordenados por preço crescente, usando map, sort. 
        \x1b[33m8. Agrupamento por Propriedade\x1b[0m
            - Em vendas = [{ cliente, total }, …], use reduce para gerar um objeto onde cada chave é um cliente e o valor é a soma de todos os seus total.
        \x1b[33m9. Conversão Entre Formatos\x1b[0m 
            - Escreva duas funções: 
                ○ paresParaObjeto(pares) recebe um array de pares [ [chave, valor], … ] e retorna o objeto equivalente. 
                ○ objetoParaPares(obj) faz o inverso, retornando um array de pares. 
    `);

    selector = Number(prompt(`    Digite o número do exercício que deseja verificar/válidar: `));

    console.clear();

    switch (selector) {
        case 1:
            //Validador de datas

            function ehDataValida(dia, mes, ano) {
                // Verifica se os valores são números inteiros positivos
                if (!Number.isInteger(dia) || !Number.isInteger(mes) || !Number.isInteger(ano)) {
                    return false;
                }

                // Verifica se o mês está no intervalo válido
                if (mes < 1 || mes > 12) {
                    return false;
                }

                // Dias máximos por mês (fevereiro ajustado depois se necessário)
                const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

                // Ajusta fevereiro se for ano bissexto
                if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
                    diasPorMes[1] = 29;
                }

                // Verifica se o dia está dentro do limite do mês
                if (dia < 1 || dia > diasPorMes[mes - 1]) {
                    return false;
                }

                return true;
            }

            console.log(`Data 29/02/2024 (exemplo de ano bissexto): \x1b[33m${ehDataValida(29, 2, 2024)}\x1b[0m`); // true
            console.log(`Data 29/02/2023 (exemplo de ano \x1b[31mnão\x1b[0m bissexto): \x1b[31m${ehDataValida(29, 2, 2023)}\x1b[0m`); // false
            console.log(`Data 31/04/2022 (exemplo de dia inválido): \x1b[31m${ehDataValida(31, 4, 2022)}\x1b[0m`); // false
            console.log(`Data 30/06/2022: \x1b[33m${ehDataValida(30, 6, 2022)}\x1b[0m`); // true
            console.log(`Data 15/13/2022 (exemplo de mês inválido): \x1b[31m${ehDataValida(15, 13, 2022)}\x1b[0m`); // false

            console.log(`\n`);

            break;
        case 2:
            // Jogo da advinhação

            // num1 = 10; //descomentar para fins de teste
            num1 = Math.floor(Math.random() * 100) + 1;
            num2 = false;
            num3 = 0;

            let cont = 0;

            while (num2 != true) {

                cont++;

                num3 = Number(prompt(`Digite um número: `));

                if (num3 > num1) {
                    console.log(`Tentativa ${cont}, Mais baixo.`);
                }

                if (num3 < num1) {
                    console.log(`Tentativa ${cont}, Mais alto.`);
                }

                if (num3 === num1) {
                    num2 = true;
                    console.log(`Você acertou em ${cont} tentativas, \x1b[33m${num1}\x1b[0m`);
                }

            }

            console.log(`\n`);

            break;
        case 3:
            // Palavras únicas em uma frase

            texto = prompt(`Digite uma frase: `);

            const palavras = texto.split(" ");
            const unicas = [];

            for (let i = 0; i < palavras.length; i++) {
                let palavraAtual = palavras[i];
                let contagem = 0;

                // Conta quantas vezes a palavra aparece
                for (let j = 0; j < palavras.length; j++) {
                    if (palavraAtual === palavras[j]) {
                        contagem++;
                    }
                }

                // Se apareceu só uma vez, adiciona ao array de únicas
                if (contagem === 1) {
                    unicas.push(palavraAtual);
                }
            }

            console.log(`Palavras únicas na frase: \x1b[33m${unicas}\x1b[0m`);

            console.log(`\n`);

            break;
        case 4:
            //Farorial recursivo

            function fatorial(n) {
                if (n < 0) {
                    throw new Error("Fatorial não definido para números negativos.");
                }
                if (n === 0) {
                    return 1;
                } else {
                    return n * fatorial(n - 1);
                }
            }

            try {
                num1 = Number(prompt(`Digite um número para realizar se fatorial: `));
                console.log(`Fatorial de ${num1} é: ${fatorial(num1)}`);
            } catch (e) {
                console.error(`\x1b[31m${e.message}\x1b[0m`); // "Fatorial não definido para números negativos."
            }

            console.log(`\n`);

            break;
        case 5:

            // ========== Execução da funcionalidade debounce ==========
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
                prompt: 'Digite algo: '
            });

            let buffer = '';

            console.clear();
            console.log('Digite para buscar (debounce 2s). Pressione ESC para sair.\n');
            rl.prompt();

            const pesquisaDebounced = debounce((texto) => {
                console.log(`\nBuscando por: ${texto}`);
                console.log("\nBackspace para apagar o que foi digitado, Enter limpa o buffer ou siga digitando para buscar. ESC para sair.");
            }, 2000);

            process.stdin.setRawMode(true);
            process.stdin.resume();
            process.stdin.setEncoding('utf8');

            // Listener para digitação
            const keyListener = (key) => {
                if (key === '\u001b') { // Tecla ESC
                    process.stdin.setRawMode(false);
                    process.stdin.removeListener('data', keyListener);
                    rl.close(); // Fecha a interface readline
                } else if (key === '\u0003') {
                    process.exit(); // Ctrl+C para sair do app
                } else if (key === '\r') {
                    console.log('\nBuffer limpo');
                    buffer = '';
                } else if (key === '\u0008' || key === '\x7f') {
                    buffer = buffer.slice(0, -1);
                    readline.cursorTo(process.stdout, 0);
                    readline.clearLine(process.stdout, 0);
                    process.stdout.write(`Digitando algo: ${buffer}`);
                } else {
                    buffer += key;
                    readline.cursorTo(process.stdout, 0);
                    readline.clearLine(process.stdout, 0);
                    process.stdout.write(`Digitando algo: ${buffer}`);
                }

                pesquisaDebounced(buffer);

            };

            process.stdin.on('data', keyListener);

            // Espera o retorno do usuário via ESC
            let esperandoESC = true;
            while (esperandoESC) {
                const wait = require('deasync'); // Forma síncrona de bloquear
                wait.sleep(100); // Aguarda até que a interface readline feche (linha acima trata isso)
                if (rl.closed) esperandoESC = false;
            }

            console.log(`\n`);

            break;
        case 6:

            //Menoization

            function memoize(fn) {
                const cache = new Map(); // Armazena os resultados

                return function (...args) {
                    const key = JSON.stringify(args); // Converte os argumentos em uma chave única

                    if (cache.has(key)) {
                        console.log("Resultado em cache para:", args);
                        return cache.get(key);
                    }

                    const result = fn(...args);
                    cache.set(key, result);
                    console.log("Novo cálculo para:", args);
                    return result;
                };
            }

            // Função lenta simulada
            function slowAdd(a, b) {
                for (let i = 0; i < 1e9; i++) { } // Simula operação pesada
                return a + b;
            }

            // Memoização
            const memoizedAdd = memoize(slowAdd);

            console.time('Primeira vez');
            console.log(memoizedAdd(2, 3)); // Executa normalmente
            console.log(memoizedAdd(3, 4));
            console.log(memoizedAdd(4, 5));
            console.log(memoizedAdd(6, 7));
            console.timeEnd('Primeira vez');

            console.log(`\n`);

            console.time('Segunda vez');
            console.log(memoizedAdd(2, 3)); // Usa cache instantâneo
            console.log(memoizedAdd(3, 4));
            console.log(memoizedAdd(4, 5));
            console.log(memoizedAdd(6, 7));

            console.timeEnd('Segunda vez');

            console.log(`\n`);

            break;
        case 7:

            // Mapeamento e Ordenação

            function obterNomesOrdenadosPorPreco(produtos) {
                return produtos
                    .sort((a, b) => a.preco - b.preco) // ordena por preço crescente
                    .map(produto => produto.nome);     // extrai apenas os nomes
            }

            const produtos = [
                { nome: 'Mouse', preco: 50 },
                { nome: 'Teclado', preco: 80 },
                { nome: 'Monitor', preco: 900 },
                { nome: 'Cabo USB', preco: 20 }
            ];

            console.log("Array SEM ordenação: ");
            console.table(produtos); // Antes da ordenação

            console.log("\n");

            const nomesOrdenados = obterNomesOrdenadosPorPreco(produtos);
            console.log("Array COM ordenação: ");
            console.table(nomesOrdenados); // [ 'Cabo USB', 'Mouse', 'Teclado', 'Monitor' ]

            console.log(`\n`);

            break;
        case 8:

            // Agrupamento por Propriedade 
            const vendas = [
                { cliente: 'Ana', total: 100 },
                { cliente: 'João', total: 150 },
                { cliente: 'Ana', total: 200 },
                { cliente: 'João', total: 50 },
                { cliente: 'Carlos', total: 300 }
            ];

            console.log(`Vendas efetuadas por cliente:`);
            console.table(vendas);

            const totaisPorCliente = vendas.reduce((acumulador, venda) => {
                const { cliente, total } = venda;

                if (!acumulador[cliente]) {
                    acumulador[cliente] = 0;
                }

                acumulador[cliente] += total;
                return acumulador;
            }, {});

            console.log(`Total por cliente:`);
            console.table(totaisPorCliente);

            console.log(`\n`);

            break;
        case 9:
            // Conversão Entre Formatos

            function paresParaObjeto(pares) {
                return Object.fromEntries(pares);
            }

            function objetoParaPares(obj) {
                return Object.entries(obj);
            }

            let pares = [['nome', 'Ana'], ['idade', 30]];
            let obj = paresParaObjeto(pares);

            console.log("Conversão Entre Formatos:\n");
            console.log(pares);
            console.log("Convertido para obj: ")
            console.log(obj); // { nome: 'Ana', idade: 30 }

            console.log("\n=================================\n");

            obj = { nome: 'Ana', idade: 30 };
            pares = objetoParaPares(obj);
            console.log(obj);
            console.log("Convertido para Array: ")
            console.log(pares); // [['nome', 'Ana'], ['idade', 30]]

            console.log(`\n`);

            break;
        default:
            // Caso o valor não esteja entre 1 e 15
            if (selector !== 0) {
                console.log(`${selector} esta opção não existe.`);
                console.log(`\n`);
            }

            break;
    }

    if (selector !== 0) {
        selector = Number(prompt(`\x1b[33m1.\x1b[0m Listar exercícicos novamente ou \x1b[31m0.\x1b[0m Sair: `));
        console.clear();
    }

}

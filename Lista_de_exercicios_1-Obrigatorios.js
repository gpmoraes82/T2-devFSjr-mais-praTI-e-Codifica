const prompt = require('prompt-sync')({ sigint: true });

let selector = undefined;
let num1 = 0;
let num2 = 0;
let num3 = 0;

while (selector !== 0) {

    console.clear(); //limpar o terminal para melhor vizualização 

    console.log(`
    \x1b[33m1.\x1b[0m Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.
    \x1b[33m2.\x1b[0m Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.
    \x1b[33m3.\x1b[0m Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
    \x1b[33m4.\x1b[0m Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.
    \x1b[33m5.\x1b[0m Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.
    \x1b[33m6.\x1b[0m Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. 
       Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.
        - Para verificar se os lados fornecem um triângulo: A < B + C e B < A + C e C < A + B
        - Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B=C)
        - Triângulo escaleno: possui todos os lados diferentes (A≠B e B≠C)
        - Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
    \x1b[33m7.\x1b[0m As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze.
       Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
    \x1b[33m8.\x1b[0m Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.
    \x1b[33m9.\x1b[0m Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for.
    \x1b[33m10.\x1b[0m Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
    \x1b[33m11.\x1b[0m Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.
    \x1b[33m12.\x1b[0m Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.
    \x1b[33m13.\x1b[0m Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.
    \x1b[33m14.\x1b[0m Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.
    \x1b[33m15.\x1b[0m Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.
    \x1b[31m0.\x1b[0m Sair.
    `);

    selector = Number(prompt(`    Digite o número do exercício que deseja verificar/válidar: `));

    console.clear();

    switch (selector) {
        case 1:
            // Lógica para verificar se o número é par ou ímpar

            num1 = parseInt(prompt(`Verifique se o número é par ou ímpar: `));
            (num1 % 2 === 0) ? console.log(`${num1} é PAR`) : console.log(`${num1} é IMPAR`);
            console.log(`\n`);

            break;
        case 2:
            // Classificar idade em categorias

            num1 = parseInt(prompt(`Digite uma idade: `));

            if (num1 >= 0 && num1 <= 12) {
                console.log(`${num1} é criança`);
            } else if (num1 >= 13 && num1 <= 17) {
                console.log(`${num1} é adolescente`);
            } else if (num1 >= 18 && num1 <= 64) {
                console.log(`${num1} é adulto`);
            } else if (num1 > 64) {
                console.log(`${num1} é idoso`);
            } else {
                console.log(`   Idade não existe!`);
            }
            console.log(`\n`);

            break;
        case 3:
            // Classificar nota como Aprovado, Recuperação ou Reprovado

            num1 = Number(prompt(`Digite uma nota de 0 a 10: `));

            if (num1 >= 0 && num1 <= 3.9) {
                console.log(`${num1} Reprovado`);
            } else if (num1 >= 4 && num1 <= 6.9) {
                console.log(`${num1} Recuperação`);
            } else if (num1 >= 6.9 && num1 <= 10) {
                console.log(`${num1} Aprovado`);
            } else console.log(`Nota fora do padrão!`);
            console.log(`\n`);

            break;
        case 4:
            // Menu interativo com 3 opções

            console.log(`Escolha qual deseja rolar 2.Uma moeda | 4. Um dado de 4 lados | 6. Um dados de 6 lados:`);
            num1 = parseInt(prompt(`Digite o número do item que deseja rolar: `));

            switch (num1) {
                case 2:
                    console.log(Math.floor(Math.random() * num1) + 1);
                    break;
                case 4:
                    console.log(Math.floor(Math.random() * num1) + 1);
                    break;
                case 6:
                    console.log(Math.floor(Math.random() * num1) + 1);
                    break;
            }
            console.log(`\n`);

            break;
        case 5:
            // Calcular IMC e classificar peso
            num1 = Number(prompt(`Digite o seu peso (em kg): `));
            num2 = Number(prompt(`Digite a sua altura (em metros): `));
            let imc = num1 / (num2 * num2);

            if (imc < 18.5) {
                console.log('Abaixo do peso.');
            } else if (imc >= 18.5 && imc <= 24.9) {
                console.log('Peso normal.');
            } else if (imc >= 25 && imc <= 29.9) {
                console.log('Sobrepeso.');
            } else if (imc >= 30 && imc <= 34.9) {
                console.log('Obesidade grau 1.');
            } else if (imc >= 35 && imc <= 39.9) {
                console.log('Obesidade grau 2.');
            } else {
                console.log('Obesidade grau 3.');
            }

            console.log(`\n`);

            break;
        case 6:
            // Verificar tipo de triângulo
            console.log(`Digite 3 tamanhos de lado para formar um triângulo.`);
            num1 = Number(prompt(`Digite o lado A: `));
            num2 = Number(prompt(`Digite o lado B: `));
            num3 = Number(prompt(`Digite o lado C: `));

            let triangulo = NaN;

            if ((num1 < (num2 + num3)) && (num2 < (num1 + num3)) && (num3 < (num1 + num2))) {
                if ((num1 == num2) || (num1 == num3) || (num2 == num3)) triangulo = 1;
                if ((num1 != num2) && (num2 != num3)) triangulo = 2;
                if ((num1 == num2) && (num2 == num3)) triangulo = 3;
            }

            switch (triangulo) {
                case 1:
                    console.log(`Triângulo isósceles.`);
                    break;
                case 2:
                    console.log(`Triângulo escaleno.`);
                    break;
                case 3:
                    console.log(`Triângulo eqüilátero`);
                    break;
                default: console.log(`Não é um triângulo válido.`)
                    break;
            }
            console.log(`\n`);

            break;
        case 7:
            // Calcular valor da compra de maçãs
            console.log(`Opa, freguesia hoje é dia de promoção nas maçãs R$ 0,30 cada. Mas se você comprar 1 dúzia ou mais paga R$ 0,25 em cada.`);
            num1 = Number(prompt(`Digite quantas vão ser:`));

            if (num1 >= 12) num2 = num1 * 0.25;
            else num2 = num1 * 0.30;

            console.log(`Valor total de ${num1} é R$ ${num2.toFixed(2)}`);
            console.log(`\n`);

            break;

        case 8:
            // Escrever dois valores em ordem crescente
            console.log(`Digite 2 valores para descobrir quem é o maior.`);
            num1 = Number(prompt(`Digite o valor 1: `));
            num2 = Number(prompt(`Digite o valor 2: `));

            if (num1 > num2) console.log(`${num1} é o maior`);
            if (num1 < num2) console.log(`${num2} é o maior`);

            console.log(`\n`);

            break;

        case 9:
            // Contagem regressiva de 10 até 1
            console.log(`Contagem regressiva de 10 até 1`);

            for (let i = 10; i > 0; i--) {
                console.log(i);
            }

            console.log(`\n`);

            break;

        case 10:
            // Escrever um número inteiro 10 vezes
            num1 = parseInt(prompt(`Digite um número inteiro: `));

            for (let i = 10; i > 0; i--) {
                console.log(num1);
            }

            console.log(`\n`);

            break;

        case 11:
            // Somar 5 números fornecidos
            console.log(`Realize a soma de 5 números`);
            num1 = Number(prompt(`Digite um número : `));

            for (let i = 4; i > 0; i--) {
                num1 += Number(prompt(`Digite um novo número : `));
            }
            console.log(`A soma é: ${num1}`);

            console.log(`\n`);

            break;
        case 12:
            // Tabuada de um número
            num1 = Number(prompt("Digite um número para realizar a taboada de 1 a 10:"));

            for (let i = 1; i <= 10; i++) {
                num2 = num1 * i;
                console.log(`${num1} x ${i} = ${num2}`);
            }
            console.log(`\n`);

            break;
        case 13:
            // Média de números decimais até digitar 0
            console.log(`Digite números decimais para realizar a média aritmética destes. Digite 0 para mostra a média.`);

            num2 = 0;
            num3 = 0;
            do {
                num1 = Number(prompt(`Digite um novo número : `));

                num3 += num1;
                num2++;
            } while (num1 !== 0);

            console.log(`A soma é: ${num3 / (num2 - 1)}`);
            console.log(`\n`);

            break;
        case 14:
            // Calcular fatorial
            num1 = Number(prompt("Digite um número para calcular o seu fatorial: "));
            num2 = num1;
            for (let i = num1 - 1; i >= 1; i--) {
                num2 *= i;
            }
            console.log(`Fatorial de ${num1}! é ${num2}`);
            console.log(`\n`);

            break;
        case 15:
            // Gerar sequência de Fibonacci
            let num1 = 0;
            let num2 = 1;

            console.log('Sequência de Fibonacci (10 primeiros números):');
            for (let i = 0; i < 10; i++) {
                console.log(num1);

                num3 = num1 + num2; // soma para o próximo número da sequência
                num1 = num2;        // atribui o próximo número a ser mostrado da sequência
                num2 = num3;        // atribui a próximo número a ser somado
            }
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

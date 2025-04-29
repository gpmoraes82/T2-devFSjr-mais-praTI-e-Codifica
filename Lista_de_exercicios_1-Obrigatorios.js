//Arquivo "main"
// a partir deste .js acessaremos todos os demais exercicios

const prompt = require('prompt-sync')({ sigint: true });

let selector = undefined;
let num1 = 0;
let num2 = 0;

while (selector !== 0) {

    console.log(`
        1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.
        2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.
        3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
        4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.
        5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.
        6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.
        Para verificar se os lados fornecem um triângulo: A < B + C e B < A + C e C < A + B
        Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B=C)
        Triângulo escaleno: possui todos os lados diferentes (A≠B e B≠C)
        Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
        7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
        8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.
        9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for.
        10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
        11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.
        12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.
        13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.
        14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.
        15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.
        `);

    selector = Number(prompt("Digite o número do exercício que deseja verificar/válidar: "));

    switch (selector) {
        case 1:
            // Lógica para verificar se o número é par ou ímpar

            num1 = Number(prompt('Verifique se o número é par ou ímpar: '));
            (num1 % 2 === 0) ? console.log(`${num1} é PAR`) : console.log(`${num1} é IMPAR`);
            break;

        case 2:
            // Classificar idade em categorias
            
            num1 = Number(prompt('Digite uma idade: '));

            if (num1 >= 0 && num1 <= 12) {
                console.log(`${num1} é criança`);
            } else if (num1 >= 13 && num1 <= 17) {
                console.log(`${num1} é adolescente`);
            } else if (num1 >= 18 && num1 <= 64) {
                console.log(`${num1} é adulto`);
            } else if (num1 > 64) {
                console.log(`${num1} é idoso`);
            } else {
                console.log("Idade não existe!");
            }
            break;

        case 3:
            // Classificar nota como Aprovado, Recuperação ou Reprovado
            
            num1 = Number(prompt('Digite uma nota de 0 a 10: '));

            if (num1 >= 0 && num1 <= 3.9) {
                console.log(`${num1} Reprovado`);
            } else if (num1 >= 4 && num1 <= 6.9) {
                console.log(`${num1} Recuperação`);
            } else if (num1 >= 6.9 && num1 <=10) {
                console.log(`${num1} Aprovado`);
            } else console.log("Nota fora do padrão!");

            break;
        case 4:
            // Menu interativo com 3 opções
            break;
        case 5:
            // Calcular IMC e classificar peso
            break;
        case 6:
            // Verificar tipo de triângulo
            break;
        case 7:
            // Calcular valor da compra de maçãs
            break;
        case 8:
            // Escrever dois valores em ordem crescente
            break;
        case 9:
            // Contagem regressiva de 10 até 1
            break;
        case 10:
            // Escrever um número inteiro 10 vezes
            break;
        case 11:
            // Somar 5 números fornecidos
            break;
        case 12:
            // Tabuada de um número
            break;
        case 13:
            // Média de números decimais até digitar 0
            break;
        case 14:
            // Calcular fatorial
            break;
        case 15:
            // Gerar sequência de Fibonacci
            break;
        default:
            // Caso o valor não esteja entre 1 e 15
            break;
    }

    if (selector !== 0) selector = Number(prompt("\n1-Listar exercícicos novamente ou 0-Sair: "));
}
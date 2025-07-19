// Pega os elementos
const btnHamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

// Toggle ao clicar no hamburger
btnHamburger.addEventListener('click', () => {
    menu.classList.toggle('ativo'); // adiciona/remove a classe "ativo"
});
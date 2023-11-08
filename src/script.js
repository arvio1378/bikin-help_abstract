const menu = document.querySelector('#menu');
const navbar = document.querySelector('.navbar');

document.querySelector('#menu').onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('fa-xmark');
}
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('navbar--scrolled', window.scrollY > 50);
});

const toggle = document.getElementById('menu');
const overlay = document.querySelector('.navbar__overlay');

toggle.addEventListener('change', () => {
    overlay.classList.toggle('navbar__overlay--active', toggle.checked);
});
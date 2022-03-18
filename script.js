const menuBtn = document.querySelector('#menu-btn i');
const menu = document.querySelector('nav .menu');

menuBtn.addEventListener("click", () => {
    menu.classList.toggle('active');
})
const menu = document.querySelector('.menu');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const iconBars = document.querySelector('.icon-bars');
const iconXmark = document.querySelector('.icon-xmark');

hamburgerMenu.addEventListener('click', showHide);

function showHide(){
    if (menu.classList.contains('show')){
        menu.classList.remove('show');
    } else {
        menu.classList.add('show');
    }
}
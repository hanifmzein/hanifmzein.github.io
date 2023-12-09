const menuBar = document.querySelector('.menu');
const bars = document.querySelector('.btn-bar');
function showHide(){
    console.log('jalan');
    if (menuBar.classList.contains('show')){
        menuBar.classList.remove('show');
    } else {
        menuBar.classList.add('show');
    }
}

bars.addEventListener('click', showHide);
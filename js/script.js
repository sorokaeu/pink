let headerBurger = document.querySelector('.header__burger');
let headerMenu = document.querySelector('.header__menu');
let headerList = document.querySelector('.header__list');

headerBurger.onclick = function(){
    headerBurger.classList.toggle('active');
    headerMenu.classList.toggle('active');
    document.body.classList.toggle('lock');
}

headerList.onclick = function () {
    headerList.classList.remove('active');
    document.body.classList.toggle('lock');
}
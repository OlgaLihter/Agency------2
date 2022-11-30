'use strict'; 
let menuWrapper;
menuWrapper = document.querySelector('.popup-menu');
const menuButton = document.querySelector('.popup-menu__button');
const menuList = document.querySelector('.popup-menu__list');
menuButton.addEventListener('click', showMenu);

function showMenu() 
    {menuList.classList.toggle('hide')};

//document.addEventListener('click', closeMenu);
//function closeMenu(evt){
    //let outSide = menuWrapper.contains(evt.target)};
    //if (!outSide) {menuList.classList.add('hide')};



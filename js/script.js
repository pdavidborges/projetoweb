//Selecionando os elementos do HTML
const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');

//console.log(btnMenu);
//console.log(menu);

function menuMobile(){    
    //toggle -> alterna entre add uma classe e remover uma classe
    menu.classList.toggle('menu-open');    
    btnMenu.classList.toggle('x');
}

function fecharMenu(){
    menu.classList.remove('menu-open');   
    btnMenu.classList.remove('x'); 
}

btnMenu.addEventListener('click',menuMobile);
menu.addEventListener('click',fecharMenu);

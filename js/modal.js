'use strict';

const button = document.querySelector(".button__modal");
const body = document.querySelector('body');
const modal = document.querySelector('.modal');

button.addEventListener('click', function () {
    modal.setAttribute("class", "modal animation");
    body.setAttribute("style", "background-color: rgba(128, 128, 128, 0.5)");
    modal.setAttribute("style", "display: block");
    modal.focus();
})

const backToMain = (wichButton) => {
    console.log(wichButton);
    modal.setAttribute("class", "modal animation2");
    setTimeout(function () {
        body.setAttribute("style", "background-color: none");
        modal.setAttribute("style", "display: none");       
    }, 900);
}

const icon = document.querySelector("i");
icon.addEventListener('click', backToMain);

const cancel = document.querySelector(".modal__cancel");
cancel.addEventListener('click', ()=>backToMain('false'));

const okey = document.querySelector(".modal__okey");
okey.addEventListener('click', ()=>backToMain('true'));

/* window.addEventListener('click', function () {
        body.setAttribute("style", "background-color: red");
        modal.setAttribute("style", "display: none");

}); */


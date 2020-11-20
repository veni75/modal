'use strict';

const body = document.querySelector('body');
const button = document.querySelector(".button__modal");
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const icon = document.querySelector("i");
const okey = document.querySelector(".modal__okey");
const cancel = document.querySelector(".modal__cancel");

const modalWindow = () => {
    modal.setAttribute("class", "modal animation");
    modal.setAttribute("style", "display: block");
    overlay.setAttribute("style", "display: block");
    button.setAttribute("tabindex", "-1");
    modal.focus();
}

const backToMain = (wichButton) => {
    console.log(wichButton);
    modal.setAttribute("class", "modal animation2");
    setTimeout(function () {
        overlay.setAttribute("style", "display: none");
        modal.setAttribute("style", "display: none");
    }, 900);
}

button.addEventListener('click', modalWindow);
icon.addEventListener('click', backToMain);
cancel.addEventListener('click', () => backToMain('false'));
okey.addEventListener('click', () => backToMain('true'));
overlay.addEventListener('click', backToMain);


const button = document.querySelector(".button__modal");
const body = document.querySelector('body');
const modal = document.querySelector('.modal');
button.addEventListener('click', function () {
    body.setAttribute("style", "background-color: rgba(128, 128, 128, 0.5)");
    modal.setAttribute("style", "display: block");
    modal.focus();
    /*modal.setAttribute("style", "transform: translate(0px, 15vw)");
    modal.setAttribute("style", "-ms-transform: translate(0px, 15vw)");    
    modal.setAttribute("style", "transition: all 5s ease-in-out");  */    
})

const backToMain = () => {
    body.setAttribute("style", "background-color: none");
    modal.setAttribute("style", "display: none");
    
}

const icon = document.querySelector("i");
icon.addEventListener('click', backToMain);

const cancel = document.querySelector(".modal__cancel");
cancel.addEventListener('click', backToMain);

const okey = document.querySelector(".modal__okey");
okey.addEventListener('click', backToMain);
okey.addEventListener('click', function () {
    console.log('true');
})

//window.addEventListener("click", backToMain);
/* if (modal.style.display === 'block') {
    window.addEventListener("click", () => {
        body.setAttribute("style", "background-color: none");
        modal.setAttribute("style", "display: none");
    });
} */


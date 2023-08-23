const controls = document.querySelectorAll('.imagem-control');

let currentImagem = 0;
const imagens = document.querySelectorAll(".imagem");
const maxImagens = imagens.length;

const leftButton = document.querySelector(".imagem-arrow-left");
const rightButton = document.querySelector(".imagem-arrow-right");

/*

function imagens(, type){

    let currentItem = 0;
    const leftButton = document.querySelector(".arrow-left");
    const rightButton = document.querySelector(".arrow-right");

    const isLeft = e.target.classList.contains("arrow-left");
    items = type;

    if (isLeft) {
        currentItem = currentItem - 4;
    } else {
        currentItem = currentItem + 4;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
        behavior: "smooth",
        inline: "center"
    });

    items[currentItem].classList.add("current-item");

};
*/
controls.forEach(control => {

    control.addEventListener('click', () => {

        const isLeft = control.classList.contains("imagem-arrow-left");

        if (isLeft) {
            currentImagem = currentImagem - 4;
        } else {
            currentImagem = currentImagem + 4;
        }

        /* CHECAGEM DOS BOTÕES */

        if (currentImagem == 0) {
            leftButton.classList.add('hidden')
        } else {
            leftButton.classList.remove('hidden')
        }
        if (currentImagem == 8) {
            rightButton.classList.add('hidden')
        } else {
            rightButton.classList.remove('hidden')
        }

        imagens.forEach((imagem) => imagem.classList.remove("current-imagem"));

        imagens[currentImagem].scrollIntoView({
            inline: "start",
            behavior: "smooth",
            block: "nearest"
        });
        console.log(currentImagem, maxImagens)

    });

});
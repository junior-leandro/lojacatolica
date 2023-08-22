const controls = document.querySelectorAll('.imagem-control');

let currentImagem = 0;
const imagens = document.querySelectorAll(".imagem");
const maxImagens =  imagens.length;

const leftButton = document.querySelector(".imagem-arrow-left");
const rightButton = document.querySelector(".imagem-arrow-right");


controls.forEach(control => {    

    control.addEventListener('click', () =>{

        const isLeft = control.classList.contains("imagem-arrow-left");
        
        if (isLeft){
            currentImagem = currentImagem - 4;
        } else {
            currentImagem = currentImagem + 4;
        }
        if (currentImagem >= maxImagens){
            currentImagem = 0;
        }
        if (currentImagem < 0) {
            currentImagem = maxImagens - 1;
        }     
       
        /* CHECAGEM DOS BOTÕES */

        if (currentImagem == 0){
            leftButton.classList.add('hidden')
        } else {
            leftButton.classList.remove('hidden')
        }
        if (currentImagem == 8){
            rightButton.classList.add('hidden')
        } else {
            rightButton.classList.remove('hidden')
        }

        imagens.forEach((imagem) => imagem.classList.remove("current-imagem"));

        imagens[currentImagem].scrollIntoView({
            inline:"start",
            behavior: "smooth",
            block: "nearest"
        });
        console.log (currentImagem, maxImagens)
        
    });

    if (currentImagem == 0){
        leftButton.classList.add('hidden')
    }

});
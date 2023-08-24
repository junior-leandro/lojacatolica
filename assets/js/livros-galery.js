const livrosControl = document.querySelectorAll('.livros-control');
  let livrosCurrentItem = 0;
const livrosItems = document.querySelectorAll(".livros");
const livrosMaxItems = livrosItems.length;
const livrosLeftButton = document.querySelector(".livros-arrow-left");
const livrosRightButton = document.querySelector(".livros-arrow-right");


livrosControl.forEach(livrosControl => {

    livrosControl.addEventListener('click', () => {

        const livrosIsLeft = livrosControl.classList.contains("livros-arrow-left");

        if (livrosIsLeft) {
            livrosCurrentItem = livrosCurrentItem - 4;
        } else {
            livrosCurrentItem = livrosCurrentItem + 4;
        }


        /* CHECAGEM DOS BOTÕES */

        if (livrosCurrentItem == 0) {
            livrosLeftButton.classList.add('hidden');
        } else {
            livrosLeftButton.classList.remove('hidden');
        }
        if (livrosCurrentItem == 8) {
            livrosRightButton.classList.add('hidden')
        } else {
            livrosRightButton.classList.remove('hidden')
        }

        livrosItems.forEach((livrosItem) => livrosItem.classList.remove("current-livro"));

        livrosItems[livrosCurrentItem].scrollIntoView({
            inline: "start",
            behavior: "smooth",
            block: "nearest"
        });
        
        console.log (livrosCurrentItem, livrosMaxItems)

    });

});
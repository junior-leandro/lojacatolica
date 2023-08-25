const vendidosControl = document.querySelectorAll('.vendidos-control');
  let vendidosCurrentItem = 0;
const vendidosItems = document.querySelectorAll(".vendidos");
const vendidosMaxItems = vendidosItems.length;
const vendidosLeftButton = document.querySelector(".vendidos-arrow-left");
const vendidosRightButton = document.querySelector(".vendidos-arrow-right");


vendidosControl.forEach(vendidosControl => {

    vendidosControl.addEventListener('click', () => {

        const vendidosIsLeft = vendidosControl.classList.contains("vendidos-arrow-left");

        if (vendidosIsLeft) {
            vendidosCurrentItem = vendidosCurrentItem - 4;
        } else {
            vendidosCurrentItem = vendidosCurrentItem + 4;
        }


        /* CHECAGEM DOS BOTÕES */

        if (vendidosCurrentItem == 0) {
            vendidosLeftButton.classList.add('hidden');
        } else {
            vendidosLeftButton.classList.remove('hidden');
        }
        if (vendidosCurrentItem == 8) {
            vendidosRightButton.classList.add('hidden')
        } else {
            vendidosRightButton.classList.remove('hidden')
        }

        vendidosItems.forEach((vendidosItem) => vendidosItem.classList.remove("current-vendido"));

        vendidosItems[vendidosCurrentItem].scrollIntoView({
            inline: "start",
            behavior: "smooth",
            block: "nearest"
        });
        

    });

});
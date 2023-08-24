const bibliaControl = document.querySelectorAll('.biblia-control');
  let bibliaCurrentItem = 0;
const bibliaItems = document.querySelectorAll(".biblia");
const bibliaMaxItems = bibliaItems.length;
const bibliaLeftButton = document.querySelector(".biblia-arrow-left");
const bibliaRightButton = document.querySelector(".biblia-arrow-right");


bibliaControl.forEach(bibliaControl => {

    bibliaControl.addEventListener('click', () => {

        const bibliaIsLeft = bibliaControl.classList.contains("biblia-arrow-left");

        if (bibliaIsLeft) {
            bibliaCurrentItem = bibliaCurrentItem - 4;
        } else {
            bibliaCurrentItem = bibliaCurrentItem + 4;
        }


        /* CHECAGEM DOS BOTÕES */

        if (bibliaCurrentItem == 0) {
            bibliaLeftButton.classList.add('hidden');
        } else {
            bibliaLeftButton.classList.remove('hidden');
        }
        if (bibliaCurrentItem == 8) {
            bibliaRightButton.classList.add('hidden')
        } else {
            bibliaRightButton.classList.remove('hidden')
        }

        bibliaItems.forEach((bibliaItem) => bibliaItem.classList.remove("current-biblia"));

        bibliaItems[bibliaCurrentItem].scrollIntoView({
            inline: "start",
            behavior: "smooth",
            block: "nearest"
        });
        

    });

});
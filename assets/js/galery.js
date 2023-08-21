const controls = document.querySelectorAll('.control');

let currentItem = 2;
const items = document.querySelectorAll(".item");
const maxItems =  items.length;

const leftButton = document.querySelector(".arrow-left");
const rightButton = document.querySelector(".arrow-right");


controls.forEach(control => {
    

    control.addEventListener('click', () =>{
        const isLeft = control.classList.contains("arrow-left");
        
        if (isLeft){
            currentItem -=4;
        } else {
            currentItem +=4;
        }
        if (currentItem >= maxItems){
            currentItem = 0;
        }
        if (currentItem < 0) {
            currentItem = maxItems - 1;
        }
        items.forEach((item) => item.classList.remove("current-item"));

        items[currentItem].scrollIntoView({
            inline:"start",
            behavior: "smooth",
            block: "nearest"
        });
        console.log (currentItem, maxItems)
        
    });
});
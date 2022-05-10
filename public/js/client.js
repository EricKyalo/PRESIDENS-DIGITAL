const cards = document.querySelectorAll(".card");
const arrowDown = document.querySelector(".fa-angle-down");
const lists = document.querySelectorAll(".list");

cards.forEach((card) =>{
    card.addEventListener("click", () => {
        list.classList.toggle("hide");
        arrowDown.classList.toggle("rotate");
    }) 
           
})
    

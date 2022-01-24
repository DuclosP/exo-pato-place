//pour le menu burger
let aside = document.querySelector(".aside");
let btn = document.querySelectorAll(".btn-menu")

btn.forEach(element => {
    element.addEventListener("click", () => {
        aside.classList.toggle("apparition")
    } )
});







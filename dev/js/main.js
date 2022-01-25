//pour le menu burger
let aside = document.querySelector(".aside");
let btn = document.querySelectorAll(".btn-menu")

btn.forEach(element => {
    element.addEventListener("click", () => {
        aside.classList.toggle("apparition")
    } )
});
//le sticky
let nav = document.querySelector(".nav-bg");
let ancre = document.querySelector(".anchor-menu");
let logo = document.getElementById('logo');

//récuperé la distance de la nav
let navTop = nav.offsetTop;
//ajout de l'évent sur le scrolling de windows
window.addEventListener('scroll', () => {
    //comparé la position du scroll avec la navtop
    if (window.scrollY > navTop) {
        //ajouter la classe sticky
        nav.classList.add("sticky");
        ancre.classList.add("sticky");
        logo.setAttribute("src", "/img/logo2.png")
    } else {
        //remove la classe sticky
        nav.classList.remove("sticky");
        ancre.classList.remove("sticky")
        logo.setAttribute("src", "/img/logo.png")
    }
})
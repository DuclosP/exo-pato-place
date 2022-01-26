//-------------//
//pour le menu burger
//-------------//
let aside = document.querySelector(".aside");
let btn = document.querySelectorAll(".btn-menu")

btn.forEach(element => {
    element.addEventListener("click", () => {
        aside.classList.toggle("apparition")
    } )
});
//-------------//
//le sticky
//-------------//
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
//-------------//
//select custom
//-------------//
let div1 = document.querySelectorAll(".div1 div");
let div2 = document.querySelectorAll(".div2 div");
let menu = document.querySelectorAll(".fa-caret-up");
let selectMenu = document.querySelectorAll(".select-menu");
let input = document.querySelectorAll(".selection");

//ajouter une valeur de la liste
div1.forEach(element => {
    element.addEventListener("click" , () => {
        input[0].value = element.textContent;
    })
});
div2.forEach(element => {
    element.addEventListener("click" , () => {
        input[1].value = element.textContent;
    })
});
//pour afficher/cacher le menu déroulant
function openClose(e, f) {
    e.addEventListener("click", () => {
        selectMenu[f].classList.toggle("show");
        menu[f].classList.toggle("rotate");
    })
}
for(let i =0; i<menu.length; i++){
    openClose(menu[i], i);
    openClose(input[i], i);
    openClose(selectMenu[i], i);
}

//-------------//
// fake load //
//-------------//

let load = document.querySelector(".loader");

setInterval( () => {
    load.style.display = "none"
}, 500)


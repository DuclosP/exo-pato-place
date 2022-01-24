//l'horloge
let clock = setInterval(() => {
    let datum = new Date;
    let date = document.querySelector(".date");
    let hours = document.querySelector(".hours");
    let minutes = document.querySelector(".minutes");
    let secondes = document.querySelector(".secondes");
    //condition pour check si la case a changé
    if(parseInt(date.textContent) != datum.getDate()){
        //condition pour l'ajout d'un 0 ou non
        if(datum.getDate() < 10){
            date.textContent = "0" + datum.getDate();
        }else {
            date.textContent = datum.getDate();
        }
    }
    if(parseInt(hours.textContent) != datum.getHours()){
        if(datum.getHours() < 10){
            hours.textContent = "0" + datum.getHours();
        }else {
            hours.textContent = datum.getHours();
        }
    }
    if(parseInt(minutes.textContent) != datum.getMinutes()){
        if(datum.getMinutes() < 10){
            minutes.textContent = "0" + datum.getMinutes();
        }else {
            minutes.textContent = datum.getMinutes();
        }
    }
    if(parseInt(secondes.textContent) != datum.getSeconds()){
        if(datum.getSeconds() < 10){
            secondes.textContent = "0" + datum.getSeconds()
        }else {
            secondes.textContent = datum.getSeconds();
        }
    }
}, 1000)


const buttons = document.querySelectorAll(".button")
const submitButton = document.getElementById("submit-button")
const ratingSection = document.getElementById("rating-component")
const statsSection = document.getElementById("state")
const ratingPara = document.getElementById("rating-para")

var actualRating = -1
var contador = 0
for (let button of buttons) {
    button.addEventListener("click" , ()=> {
        if (actualRating!== -1){
            buttons[actualRating-1].classList.remove("active-button")
        }
        let arrayBotones = Array.from(buttons)
        
        button.classList.add("active-button")
        actualRating = arrayBotones.indexOf(button) + 1
    })
}

submitButton.addEventListener("click", showStats)

function showStats(){
    if (actualRating===-1) {
        alert("Please select a rating")
    } else {
        ratingSection.style.display="none";
        statsSection.style.display="flex";
        ratingPara.textContent="You selected " + actualRating + " out of 5"
    }
}
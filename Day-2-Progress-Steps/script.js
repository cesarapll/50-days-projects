const prevButton = document.getElementById("prev")
const nextButton = document.getElementById("next")
const progressLine = document.querySelector(".progress-line")
const circles = document.querySelectorAll(".step")

const MAX_STEP = 4;
const MIN_STEP = 1
let currentStep = MIN_STEP;

nextButton.addEventListener('click', () => {
    currentStep++;
    progressLine.style.width = `${(currentStep - 1) * 33}%`
    updateSteps()
})

prevButton.addEventListener('click', () => {
    currentStep--;
    progressLine.style.width = `${(currentStep - 1) * 33}%`
    updateSteps()
})


function updateSteps() {

    circles.forEach((circle, index) => {
        if(index + 1 == currentStep){
            circle.classList.add('active')
        } else if (index + 1 > currentStep){
            circle.classList.remove('active')
        }
    })

    if(currentStep == MAX_STEP){
        nextButton.disabled = true
    } else if (currentStep == MIN_STEP){
        prevButton.disabled = true
    } else {
        prevButton.disabled = false
        nextButton.disabled = false
    }
}

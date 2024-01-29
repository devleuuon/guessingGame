//Variaveis
const screen1 = document.querySelector('.screenOne')
const screen2 = document.querySelector('.screenTwo')
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1


// eventos

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)


// function callback

function handleTryClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector('#inputNumber')

    if(Number(inputNumber.value) == randomNumber) {

        screen1.classList.add("hide")
        screen2.classList.remove("hide")

        screen2.querySelector("h1").innerText = `Acertou em ${xAttempts} tentativas!`
    }

    if(inputNumber.value == ""){
        alert("Digite um número!")
    }

    if(inputNumber.value < 0){
        alert("Digite um número entre 0 e 10!")
    }

    if(inputNumber.value > 10){
        alert("Digite um número entre 0 e 10!")
    }

    inputNumber.value = ""

    xAttempts++
}

function handleResetClick(){
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
    xAttempts = 1
}
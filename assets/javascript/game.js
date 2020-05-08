//team one

let shotsOne = document.querySelector('#teamone-shoot-button')
let teamOneShots = document.querySelector('#teamone-numshots')

shotsOne.addEventListener('click', function () {

    let teamOneNum = parseInt(teamOneShots.innerText) + 1
    teamOneShots.innerText = teamOneNum
    let random = Math.random() * 100
    if (random > 50) {
        document.getElementById("demo").innerHTML = "team scores"
    }
    else {
        document.getElementById("demo").innerHTML = "team missed"
    }

    let tmOneGoals = document.querySelector('#teamone-numgoals')
    let tmOneScore = parseInt(tmoneGoals.innerText) + (Math.random)
    tmOneGoals.innerText = tmOneScore


})
//team two

let shotsTwo = document.querySelector('#teamtwo-shoot-button')
let teamTwoShots = document.querySelector('#teamtwo-numshots')

shotsTwo.addEventListener('click', function () {

    let teamTwoNum = parseInt(teamTwoShots.innerText) + 1
    teamTwoShots.innerText = teamTwoNum
    let random = Math.random() * 100
    if (random > 50) {
        document.getElementById("demo").innerHTML = "team scores"
    }
    else {
        document.getElementById("demo").innerHTML = "team missed"
    }

    let tmTwoGoals = document.querySelector('#teamtwo-numgoals')
    let tmTwoScore = parseInt(tmTwoGoals.innerText) + (Math.random)
    tmTwoGoals.innerText = tmTwoScore

})
// reset button

let reset = document.querySelector('#reset-button')
let resetNum = document.querySelector('#num-reset')
reset.addEventListener('click', function () {
    let startOver = parseInt(resetNum.innerText) + 1
    resetNum.innerText = startover

})

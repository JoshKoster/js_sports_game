//  team one

let shotsOne = document.querySelector('#teamone-shoot-button')
let teamOneShots = document.querySelector('#teamone-numshots')
let tmOneGoals = document.querySelector('#teamone-numgoals')
shotsOne.addEventListener('click', function () {

    let teamOneNum = parseInt(teamOneShots.innerText) + 1
    teamOneShots.innerText = teamOneNum


    let tmOneScore = parseInt(tmOneGoals.innerText) + Math.floor(Math.random() * 4)
    tmOneGoals.innerText = tmOneScore




})
// team two

let shotsTwo = document.querySelector('#teamtwo-shoot-button')
const teamTwoShots = document.querySelector('#teamtwo-numshots')
const tmTwoGoals = document.querySelector('#teamtwo-numgoals')

shotsTwo.addEventListener('click', function () {

    let teamTwoNum = parseInt(teamTwoShots.innerText) + 1
    teamTwoShots.innerText = teamTwoNum

    let tmTwoScore = parseInt(tmTwoGoals.innerText) + Math.floor(Math.random() * 4) 
    tmTwoGoals.innerText = tmTwoScore

})
// reset button

let reset = document.querySelector('#reset-button')
let resetNum = document.querySelector('#num-resets')
reset.addEventListener('click', function () {
    let startOver = parseInt(resetNum.innerText) + 1
    resetNum.innerText = startOver

    if (tmOneGoals.innerText > tmTwoGoals.innerText) {
        alert('Team one wins!!!')
    
    } else if(tmOneGoals.innerText === tmTwoGoals.innerText)  {
        alert('Tie!!!')
    }
        else { alert('Team two wins!!!')
    }

    teamOneShots.innerText = 0
    tmOneGoals.innerText = 0
    teamTwoShots.innerText = 0
    tmTwoGoals.innerText = 0
})

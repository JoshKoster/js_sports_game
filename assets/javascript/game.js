let teamoneShootButton = document.querySelector('#teamone-shoot-button');
let teamoneNumshots = document.querySelector('#teamone-numshots');
let teamoneNumgoals = document.querySelector('#teamone-numgoals');
let resetButton = document.querySelector('#reset-button');
let numResets = document.querySelector('#num-resets');



resetButton.addEventListener("click", function(){
    console.log("reset button");

    let newNumberRest = Number(numResets.innerHTML) +1;
    numResets.innerHTML = newNumberRest
    teamoneNumshots.innerHTML = 0;
    teamtwoNumberShots.innerHTML = 0;
    teamoneNumgoals.innerHTML = 0;
    teamtwoNumgoals.innerHTML = 0;
})


teamoneShootButton.addEventListener("click", function(){
    console.log(" team one  button clicked");

   let newshotValue = Number(teamoneNumshots.innerHTML) +1; 
    teamoneNumshots.innerHTML = newshotValue;
    
    


    if (Math.random() < .3 ){
        console.log('I did math.random')
        let newgoalValue= Number(teamoneNumgoals.innerHTML) +1;
        teamoneNumgoals.innerHTML = newgoalValue;
    }

})



let teamtwoShootButton = document.querySelector('#teamtwo-shoot-button');
let teamtwoNumberShots = document.querySelector('#teamtwo-numbershots');
let teamtwoNumgoals = document.querySelector('#teamtwo-numgoals');



teamtwoShootButton.addEventListener("click", function () {
   
    console.log(" team two  button clicked");

  
    let newshotValue = Number(teamtwoNumberShots.innerHTML) +1; 
    teamtwoNumberShots.innerHTML = newshotValue;



   
    
      
        if (Math.random() < .3 ){
            console.log('I did math.random')
            let newtwogoalValue= Number(teamtwoNumgoals.innerHTML) +1;
            teamtwoNumgoals.innerHTML = newtwogoalValue;
        }
    })

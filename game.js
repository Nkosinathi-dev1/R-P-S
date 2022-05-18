const displayUserChoice=document.getElementById('user-choice')
const displayCompChoice=document.getElementById('comp-choice')
const displayResults=document.getElementById('results')

const selectedChoice=document.querySelectorAll('button')

let userChoice 
let compChoice 
let results



//click event for each item
selectedChoice.forEach(item=>item.addEventListener('click',(x)=>{
    userChoice=x.target.id 
    displayUserChoice.innerHTML=userChoice
    
    //calling functions 
    generateCompChoice()
    getResults()

    displayCompChoice.innerHTML=compChoice
    displayResults.innerHTML=results
}))

//generate random choice
function generateCompChoice(){
    const randomNums=Math.floor(Math.random()*selectedChoice.length+1)
    if(randomNums===1){
        compChoice='rock'
    }
    if(randomNums===2){
        compChoice='paper'
    }
    if(randomNums===3){
        compChoice='scissors'
    }
}

//determine the winner
function getResults(){
    results=''//refresh the variable
    //draw
    if(userChoice==compChoice){
        results='Draw'
    }
    //win
    if(userChoice==='rock' && compChoice==='scissors'){
        results='win'
    }
    if(userChoice==='scissors' && compChoice==='paper'){
        results='win'
    }
    if(userChoice==='paper' && compChoice==='rock'){
        results='win'
    }
    //loose
    if(userChoice==='rock' && compChoice==='paper'){
        results='lose'
    }
    if(userChoice==='scissors' && compChoice==='rock'){
        results='lose'
    }
    if(userChoice==='paper' && compChoice==='scissors'){
        results='lose'
    }

    console.log(compChoice+' '+ userChoice+' '+results)
}
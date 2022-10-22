const computerchoicedisplay= document.getElementById('computer_choice')
const userchoicedisplay= document.getElementById('user_choice')
const resultdisplay= document.getElementById('result')
const possiblechoices= document.querySelectorAll('button')
let userchoice //bcz we need global variable
let computerchoice
let result
possiblechoices.forEach(possiblechoices => possiblechoices.addEventListener("click", (e) =>{
    userchoice= e.target.id
    userchoicedisplay.innerHTML= userchoice
    generatecomputerchoice()
    getresult()
}) )
 function generatecomputerchoice(){
    const randomnumber= Math.floor(Math.random() * 3)+1 // or use possiblechoices.length which is also 3
    if(randomnumber=== 1){
        computerchoice = 'Rock'
    }
    if(randomnumber=== 2){
        computerchoice = 'Paper'
    }
    if(randomnumber=== 3){
        computerchoice = 'Scissor'
    }
    computerchoicedisplay.innerHTML= computerchoice
 }
 function getresult(){
if(userchoice===computerchoice){
  result= "It's a draw! "
}
if(userchoice=== 'Rock' && computerchoice==='Paper'){
  result= "You Lose "
}
if(userchoice=== 'Rock' && computerchoice==='Scissor'){
  result= "You Win "
}
if(userchoice=== 'Scissor' && computerchoice==='Paper'){
  result= "You Win "
}
if(userchoice=== 'Paper' && computerchoice==='Rock'){
  result= "You Win "
}
if(userchoice=== 'Paper' && computerchoice==='Scissor'){
  result= "You Lose "
}
if(userchoice=== 'Scissor' && computerchoice==='Rock'){
  result= "You Lose "
}
resultdisplay.innerHTML= result
 }
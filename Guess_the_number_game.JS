const c=console
const d=document
const lucky=Math.floor(Math.random()*20)
let score=10
c.log(lucky)
//math.floor=parseInt-converts decimal into integer.
const userinputfiled=d.getElementById('guessing')
const checkbutton=d.getElementById('check')
const messagebox=d.getElementById('message')
const main1=d.getElementById('main')
const scorecard=d.getElementById('score')
const checkfunction=()=>{
    const userguess=Number(userinputfiled.value)
    if(userguess>=20 || userguess<0){
        messagebox.textContent='Please enter a number between 0-20'
        main1.style.backgroundColor='red'  
        score=score-1 
        return
    }else if(userguess==lucky){
        messagebox.textContent='You won'
        main1.style.backgroundColor='green' 
    }else if(userguess>lucky){
        messagebox.textContent='Too high'
        main1.style.backgroundColor='red'
        score=score-1
    }else if(userguess<lucky){
        messagebox.textContent='Too low'
        main1.style.backgroundColor='red'
        score=score-1
    }
    scorecard.textContent=score
}
//Number converts string into int form.
checkbutton.addEventListener('click',checkfunction)


























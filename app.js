const userScore = 0;
const computerScore= 0;
const userScore_span= document.getElementById("user-score")
const computerScore_span= document.getElementById("computer-score")
const scoreBoard_div=document.querySelector(".score-board")
const result_div=document.querySelector(".result")
const rock_div=document.getElementById("r")
const paper_div=document.getElementById("p")
const scissors_div=document.getElementById("s")
const choices=document.querySelectorAll('.choice')
const comp_choice = document.querySelector(".comp-choice")
const user_choice = document.querySelector(".user-choice")
let comp_random=0

const getComputerChoice= ()=>{
    const choices=['r','p','s']
    const choice= choices[Math.floor(Math.random()*3)]
    if(choice=='r'){
        comp_choice.children[0].classList.remove('hidden')
        comp_choice.children[1].classList.add('hidden')
        comp_choice.children[2].classList.add('hidden')
    }
    else if(choice=='p'){
        comp_choice.children[0].classList.add('hidden')
        comp_choice.children[1].classList.remove('hidden')
        comp_choice.children[2].classList.add('hidden')
    }
    else{
        comp_choice.children[0].classList.add('hidden')
        comp_choice.children[1].classList.add('hidden')
        comp_choice.children[2].classList.remove('hidden')
    }
    return choice
}

let randomcomp= setInterval(() => {
            if(comp_random==0){
                comp_choice.children[comp_random].classList.remove('hidden')
                comp_choice.children[comp_random+1].classList.add('hidden')
                comp_choice.children[comp_random+2].classList.add('hidden')
                comp_random++
            }
            else if(comp_random==1){
                comp_choice.children[comp_random].classList.remove('hidden')
                comp_choice.children[comp_random+1].classList.add('hidden')
                comp_choice.children[comp_random-1].classList.add('hidden')
                comp_random++
            }
            else{
                comp_choice.children[comp_random].classList.remove('hidden')
                comp_choice.children[comp_random-2].classList.add('hidden')
                comp_choice.children[comp_random-1].classList.add('hidden')
                comp_random=0
            }
            
        }, 200);

const game = (userChoice) => {
    removemain()
    clearInterval(randomcomp)
    if(userChoice=='r'){
        user_choice.children[0].classList.add('hidden')
        user_choice.children[1].classList.remove('hidden')
        user_choice.children[2].classList.add('hidden')
        user_choice.children[3].classList.add('hidden')
    }
    else if(userChoice=='p'){
        user_choice.children[0].classList.add('hidden')
        user_choice.children[1].classList.add('hidden')
        user_choice.children[2].classList.remove('hidden')
        user_choice.children[3].classList.add('hidden')
    }
    else{
        user_choice.children[0].classList.add('hidden')
        user_choice.children[1].classList.add('hidden')
        user_choice.children[2].classList.add('hidden')
        user_choice.children[3].classList.remove('hidden')
    }
    setTimeout(()=>{

        randomcomp= setInterval(() => {
            if(comp_random==0){
                comp_choice.children[comp_random].classList.remove('hidden')
                comp_choice.children[comp_random+1].classList.add('hidden')
                comp_choice.children[comp_random+2].classList.add('hidden')
                comp_random++
            }
            else if(comp_random==1){
                comp_choice.children[comp_random].classList.remove('hidden')
                comp_choice.children[comp_random+1].classList.add('hidden')
                comp_choice.children[comp_random-1].classList.add('hidden')
                comp_random++
            }
            else{
                comp_choice.children[comp_random].classList.remove('hidden')
                comp_choice.children[comp_random-2].classList.add('hidden')
                comp_choice.children[comp_random-1].classList.add('hidden')
                comp_random=0
            }
            
        }, 200)
        user_choice.children[0].classList.remove('hidden')
        user_choice.children[1].classList.add('hidden')
        user_choice.children[2].classList.add('hidden')
        user_choice.children[3].classList.add('hidden')
    }, 2000);
    const computerChoice = getComputerChoice()
    if(userChoice=='p' && computerChoice=='p'){
        result_div.textContent='Your choices are the same. Draw'

        paper_div.classList.add('gray-glow')
        choices.forEach(e =>e.classList.add('choice-not'));
        setTimeout(() => {
                 choices.forEach(e =>e.classList.remove('choice-not'));
             paper_div.classList.remove('gray-glow')
             main()
        }, 2000);
    }
    else if(userChoice=='p' && computerChoice=='r'){
        result_div.textContent='Paper covers the rock You win!'
        userScore_span.textContent=Number(userScore_span.textContent)+1

        paper_div.classList.add('green-glow')
        choices.forEach(e =>e.classList.add('choice-not'));
        setTimeout(() => {
                 choices.forEach(e =>e.classList.remove('choice-not'));
             paper_div.classList.remove('green-glow')
             main()
        }, 2000);
        
    }
    else if(userChoice=='p' && computerChoice=='s'){
        result_div.textContent='Scissors cuts paper You lost :('
        computerScore_span.textContent=Number(computerScore_span.textContent)+1

        paper_div.classList.add('red-glow')
        choices.forEach(e =>e.classList.add('choice-not'));
        setTimeout(() => {
                 choices.forEach(e =>e.classList.remove('choice-not'));
             paper_div.classList.remove('red-glow')
             main()
        }, 2000);
    }
    else if(userChoice=='r' && computerChoice=='r'){
        result_div.textContent='Your choices are the same. Draw'

        rock_div.classList.add('gray-glow')
        choices.forEach(e =>e.classList.add('choice-not'));
        setTimeout(() => {
            rock_div.classList.remove('gray-glow')
                 choices.forEach(e =>e.classList.remove('choice-not'));
             main()
        }, 2000);
    }
    else if(userChoice=='r' && computerChoice=='p'){
        result_div.textContent='Paper covers the rock You lost :('
        computerScore_span.textContent=Number(computerScore_span.textContent)+1

        rock_div.classList.add('red-glow')
        choices.forEach(e =>e.classList.add('choice-not'));
        setTimeout(() => {
            rock_div.classList.remove('red-glow')
                choices.forEach(e =>e.classList.remove('choice-not'));
            main()
        }, 2000);
    }
    else if(userChoice=='r' && computerChoice=='s'){
        result_div.textContent='Stone breaks scissors You win!'
        userScore_span.textContent=Number(userScore_span.textContent)+1

        rock_div.classList.add('green-glow')
        choices.forEach(e =>e.classList.add('choice-not'));
        setTimeout(() => {
                 choices.forEach(e =>e.classList.remove('choice-not'));
             rock_div.classList.remove('green-glow')
             main()
        }, 2000);
    }
    else if(userChoice=='s' && computerChoice=='s'){
        result_div.textContent='Your choices are the same. Draw'

        scissors_div.classList.add('gray-glow')
        choices.forEach(e =>e.classList.add('choice-not'));
        setTimeout(() => {
                 choices.forEach(e =>e.classList.remove('choice-not'));
             scissors_div.classList.remove('gray-glow')
             main()
        }, 2000);
        
    }
    else if(userChoice=='s' && computerChoice=='r'){
        result_div.textContent='Stone breaks scissors You lost :('
        computerScore_span.textContent=Number(computerScore_span.textContent)+1

        scissors_div.classList.add('red-glow')
        choices.forEach(e =>e.classList.add('choice-not'));
        setTimeout(() => {
                 choices.forEach(e =>e.classList.remove('choice-not'));
             scissors_div.classList.remove('red-glow')
             main()
        }, 2000);
    }
    else if(userChoice=='s' && computerChoice=='p'){
        result_div.textContent='Scissors cuts paper You win!'
        userScore_span.textContent=Number(userScore_span.textContent)+1

        scissors_div.classList.add('green-glow')
        choices.forEach(e =>e.classList.add('choice-not'));
        setTimeout(() => {
            choices.forEach(e =>e.classList.remove('choice-not'));
             scissors_div.classList.remove('green-glow')
             main()
        }, 2000);
    }
}

const  rockf= () => {
    game('r')
}
const paperf = () => {
    game('p')
}

const scissorsf = () => {
    game('s')
}


const main = () => {
    rock_div.addEventListener('click',rockf)
    paper_div.addEventListener('click',paperf)
    scissors_div.addEventListener('click',scissorsf)
}
const removemain=()=>{
    rock_div.removeEventListener('click',rockf)
    paper_div.removeEventListener('click',paperf)
    scissors_div.removeEventListener('click',scissorsf)
}
main()
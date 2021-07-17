'use strict;'


var secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
document.querySelector('.number').textContent=secretNumber;

document.querySelector('.check').addEventListener('click',function(){
    var guess = document.querySelector('.guess').value;
    if(!guess){
        document.querySelector('.message').textContent="No value";
    }
    else if(guess==secretNumber){
        document.querySelector(".message").textContent="Correct Number";
        score++;
        document.querySelector('.score').textContent=score;
    }
    else if(guess>secretNumber){
        if(score>1){
            document.querySelector(".message").textContent="too high";
            score--;
            document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector(".message").textContent="lost the game";
            document.querySelector('.score').textContent=0;
        }
       
    }
    else if (guess<secretNumber){
        if(score>1){
            document.querySelector(".message").textContent="too high";
            score--;
            document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector(".message").textContent="lost the game";
            document.querySelector('.score').textContent=0;
        }
    }
})
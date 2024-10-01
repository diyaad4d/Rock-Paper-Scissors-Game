// by : Diyaa Daifi - d4d
//  d4d

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    draw: 0
};


updateScore();


const trans = (playerMove) => {

    let hands = document.querySelector(".hands");
    hands.style.display = "none";

    let contest = document.querySelector(".window-result");
    contest.style.display = "flex";

    console.log(playerMove);
    let img = document.querySelector('.box-hand-user');
    img.innerHTML = `<img src="images/${playerMove}.png" />`;

};
function playGame(playMove){

    let computer=computerMove();
    let result='';

    let img = document.querySelector('.box-hand-computer');
    img.innerHTML = `<img src="images/${computer}.png" />`;

    if(playMove==='rock'){
        if(computer==='rock'){
            result='draw';
        }
        else if(computer==='paper'){
            result='lose';
        }
        else{
            result='win';
        }
    }
    else if(playMove==='paper'){
        if(computer==='rock'){
            result='win';
        }
        else if(computer==='paper'){
            result='draw';
        }
        else{
            result='lose';
        }
    }
    else if(playMove==='scissor'){
        if(computer==='rock'){
            result='lose';
        }
        else if(computer==='paper'){
            result='win';
        }
        else{
            result='draw';
        }
    }
    calScore(result);
    updateScore();
   appearResult(result);
}
function playAgain(){
    let window=document.querySelector('.window-result');
    window.style.display = 'none';

    let hands = document.querySelector(".hands");
    hands.style.display = 'flex';
}

function appearResult(result){
    let n='';
    if(result==='win'){
        n='YOU WIN!🫡';
    }
    else if(result==='lose'){
        n='YOU LOSE 😂';
    }
    else{
        n='Draw ½';
    }
    let appear=document.querySelector(".the-result");
    appear.innerHTML=n;

}

function calScore(result){
    if(result==='win') {
        score.wins++;
    }
    else if(result==='lose'){
        score.losses++;
    }
    else{
        score.draw++;
    }
    localStorage.setItem('score',JSON.stringify(score));
}
function updateScore(){
    document.querySelector('.js-result')
        .innerHTML=`Wins: ${score.wins} ||  Losses: ${score.losses}  ||  Draws: ${score.draw}`;
}

function computerMove(){
    let random=Math.floor(Math.random() *3);
    if(random===0){
        return 'rock';
    }
    else if(random===1){
        return 'paper';
    }
    else {
        return 'scissor';
    }

}
function resetScore(){
    score.wins = 0;
    score.losses = 0;
    score.draw = 0;
    localStorage.removeItem('score');
    updateScore();
}

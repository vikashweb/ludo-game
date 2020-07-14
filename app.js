/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 20 points on GLOBAL score wins the game

*/
var player1Score, Player2Score, dice, diceRoll, final, zero, score, activePlayer, currentPlayerscore;


var zero = 0;
var final = 0;
var score = [0, 0];
var activePlayer = 0;
var currentPlayerscore;
document.querySelector('.dice').style.display = 'none';
document.querySelector('#score-0').textContent = zero;
document.querySelector('#score-1').textContent = zero;
document.querySelector('#current-0').textContent = zero;
document.querySelector('#current-1').textContent = zero;



document.querySelector('.btn-roll').addEventListener('click', function () {



    dice = Math.floor(Math.random() * 6) + 1;
    //change image according randam number
    diceRoll = document.querySelector('.dice');
    diceRoll.style.display = 'block';
    diceRoll.src = 'dice-' + dice + '.png';
    //if number will be 1 then it will change the active player
    if (dice !== 1) {
        currentPlayerscore = document.querySelector('#current-' + activePlayer);
        currentPlayerscore.textContent = dice;
    }

    else {
        nextplayer();
    }

});



document.querySelector('.btn-hold').addEventListener('click', function () {

    // add current with player score;
    score[activePlayer] += dice;
     dice=0;
    document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];

    if (score[activePlayer] >= 20) {
        document.querySelector('#name-' + activePlayer).textContent = "winner!";
        alert('Game over');

  
         

    }
    else {
        nextplayer();

    };



});

function nextplayer() {
    currentPlayerscore.textContent = 0;
    activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    diceRoll.style.display = 'none';

};


// this one is for new game
document.querySelector('.btn-new').addEventListener('click', function () {

   zero = 0;
     final = 0;
score=[0,0];
     activePlayer = 0;
  
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('#score-0').textContent = zero;
    document.querySelector('#score-1').textContent = zero;
    document.querySelector('#current-0').textContent = zero;
    document.querySelector('#current-1').textContent = zero;
    document.querySelector('#name-1').textContent='Player 2';
    document.querySelector('#name-0').textContent='Player 1';


})






















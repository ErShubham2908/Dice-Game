let item_roll = document.getElementById('item_roll');
let secondBtn = document.getElementById('item_dice2');
let playerChance = 1;
let playerOneScore = 0;
let playerTwoScore = 0;
(function(){
    item_roll.style.display = "none"
    secondBtn.style.display = "none"
})()

function playerOne(){
    let item_playerOne = document.getElementById('item_player1').value;
    document.getElementById('item_player1').style.display = 'none'
    let playerOne = document.getElementById('playerOne');
    playerOne.innerText = item_playerOne;
    document.getElementById('item_dice1').style.display = 'none'
    secondBtn.style.display = "inline-block"
}

function playerTwo(){
    let item_playerTwo = document.getElementById('item_player2').value;
    document.getElementById('item_player2').style.display = 'none'
    let playerOne = document.getElementById('playerTwo');
    playerOne.innerText = item_playerTwo;
    document.getElementById('item_dice2').style.display = 'none';
    item_roll.style.display = 'block'
}

function rollDice(){
    // let item_resultOne = document.getElementById('item_resultOne');
    let item_resultTwo = document.getElementById('item_resultTwo');

    let randomNumber = Math.floor(Math.random()*6 + 1);
    if(playerChance % 2 === 1 && playerOneScore < 30){
        // playerOneScore +=randomNumber;
        playerChance++;
        if(randomNumber ===1 || randomNumber === 2 || randomNumber === 3 || randomNumber === 4 || randomNumber === 5 || randomNumber === 6){
            const diceImage = 'Asset/'+ randomNumber + '.jpg';
            document.getElementById('item_dice_img').setAttribute('src',diceImage)
            playerOneScore += randomNumber;
            document.getElementById('item_resultOne').innerText = playerOneScore;
            // console the value of player one
            console.log(`Player chance ${playerChance}, Player 1 Random Number ${randomNumber}`);
            console.log(`player 1 score ${playerOneScore}`);
        }
    }
    else if(playerChance % 2 === 0 && playerTwoScore < 30){
        playerChance++;
        if(randomNumber ===1 || randomNumber === 2 || randomNumber === 3 || randomNumber === 4 || randomNumber === 5 || randomNumber === 6){
            playerTwoScore += randomNumber;
            const diceImage = 'Asset/'+ randomNumber + '.jpg';
            document.getElementById('item_dice_img').setAttribute('src',diceImage);
            document.getElementById('item_resultTwo').innerText = playerTwoScore;

            // console the value of player 2
            console.log(`Player chance ${playerChance}, Player 2 Random Number ${randomNumber}`);
            console.log(`player 2 score ${playerOneScore}`);
        }
    }
}
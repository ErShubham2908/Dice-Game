let item_roll = document.getElementById('item_roll');
(function(){
    item_roll.style.display = "none"
})

function playerOne(){
    let item_playerOne = document.getElementById('item_player1').value;
    document.getElementById('item_player1').style.display = 'none'
    let playerOne = document.getElementById('playerOne');
    playerOne.innerText = item_playerOne;
    document.getElementById('item_dice1').style.display = 'none'
}

function playerTwo(){
    let item_playerTwo = document.getElementById('item_player2').value;
    document.getElementById('item_player2').style.display = 'none'
    let playerOne = document.getElementById('playerTwo');
    playerOne.innerText = item_playerTwo;
    document.getElementById('item_dice2').style.display = 'none'
}


console.log("Hello")
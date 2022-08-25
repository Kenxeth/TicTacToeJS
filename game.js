const switchBackground = document.querySelector(".switch")
const gameBoardBackground = document.querySelector(".gameboard")


switchBackground.onclick = function(){
    if(gameBoardBackground.style.backgroundColor === "black"){
        gameBoardBackground.style.backgroundColor = "#ADD8E6"
    }else {
        gameBoardBackground.style.backgroundColor = "black"

    }
}
// switchBackground.addEventListener("click", switchBackgrounds)



const buttonMultiplayer = document.getElementById("btnMultiplayer")


document.querySelector(".bg-modal").style.display = "flex";

buttonMultiplayer.addEventListener("click", function () {
    document.querySelector(".bg-modal").style.display = "none";
    gameOn = true;
    gameLive();

})


const winningPossibilities = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const columns = document.querySelectorAll(".col")

let gameOn = false;
let player1 = true;
let player2 = false;
let playerXWon;
// if player 1 won, set to true
// if player 2 won, set to false
let gameBoard = new Array(9)


const restart = () => {
    document.querySelector(".bg-modal2").style.display = "flex";
    const restart = document.getElementById("restart")
    restart.onclick = function () {
        document.querySelector(".bg-modal2").style.display = "none";
        gameOn = true;
        gameBoard = new Array(9)
        for (let i = 0; i < columns.length; i++) {
            columns[i].innerHTML = `${i+1}`;
            columns[i].style.pointerEvents = "auto"
        }


    }
}
// checks if game is live
const gameLive = () => {
    gameOn == true ? switchPlayer() : restart()
}
// makes sure X and O takes turns
const takeTurn = () => {
    if (player1) {
        player1 = false
        player2 = true;
    } else {
        player1 = true;
        player2 = false;
    }
}
// checks for any game winning possibilities
const checkWinPossibility = (callback) => {

    for (i = 0; i < winningPossibilities.length; i++) {
        const winningPossibility = winningPossibilities[i]

        const possibilityIndexOne = gameBoard[winningPossibility[0]]
        const possibilityIndexTwo = gameBoard[winningPossibility[1]]
        const possibilityIndexThree = gameBoard[winningPossibility[2]]


        if (possibilityIndexOne == possibilityIndexTwo && possibilityIndexTwo == possibilityIndexThree && possibilityIndexOne != "") {
            callback()
            gameOn = false;
            gameLive();
            break
        }

    }


}
//  checks which player won
const checkPlayerWon = () => {

    if(player1){
        document.getElementById("playerWon").innerHTML = "Player O has won"
        playerXWon = false
        
    }else{
        document.getElementById("playerWon").innerHTML = "Player X has won"
        playerXWon = true
    }
}

// takes in all the functions
const updateGameboard = (column) => {
    column.style.pointerEvents = "none"
    if (player1) {
        column.innerHTML = "X"
        document.getElementById("playerTurn").innerHTML = "Player O's Turn"
    } else {
        column.innerHTML = "O"
        document.getElementById("playerTurn").innerHTML = "Player X's Turn"
    }
    // from here on out were updating the actual gameboard array and not the columns itself 
    for (i = 0; i < gameBoard.length; i++) {
        gameBoard[i] = document.querySelector(`.column-${i}`).innerHTML
    }

   takeTurn()

   checkWinPossibility(checkPlayerWon)

//    if all the spaces in gameboard are filled then bring the modal up 
}
// checks for each 
const switchPlayer = () => {
    // this is the actual columns and not the array
    columns.forEach(column => {
        column.addEventListener("click", () => updateGameboard(column))
    })
}

// SINGLE PLAYER

const buttonSingleplayer = document.getElementById("btnSingleplayer")



/*
functions i will be needing:

computerMove() = computer move that has the minimax algorithm  
playerMove() = player move, gets updated onto singleplayergameboard() 
singleplayerGameboard() = the gameboard itself, makes sure player and computer takes turns

*/


function computerMove(){
    /*

    1) we have to make sure the computer knows where an empty spot may be 
        empty spot -> spot is avaliable 
        if(board) = ' '
    2)  go through all the possibilities (with the minimax algorithm) of all the avaliable spaces and find the best move 
        bestScore = -infinity 
        if (score > bestScore) then replace the bestScore with the new bestScore (score in this case)
        set the bestmove to that specific index 
    3) 



    */
}


// minimax algorithm 
// gameBoard = board 


function score(game){
    if(playerXWon){
        return 10;
    }
    else if(playerXWon == false){
        return -10
    }
    else{
        return 0;
    }
}


function minimax(position, depth, maximizingPlayer){
    if(depth == 0 || gameOn == false){

    }
}
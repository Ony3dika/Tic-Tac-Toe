
var origBoard;

let huPlayer='x',
    ai='o',
    winComb=[
        [0,1,2], 
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [6,4,2]
    ];

let cell=document.querySelectorAll(".tile")

game();

function game(){
    origBoard=Array.from(Array(9).keys())
    for (let i=0; i<cell.length; i++){
        cell[i].innerText = ''
        cell[i].addEventListener('click', nextTurn)
        
    }
}

nextTurn()

function nextTurn(square){
    if (typeof origBoard[square.target.id] == 'number'){
        turn(square.target.id, huPlayer) 
    if (!checkTie()) turn(bestSpot(), aiPlayer)
    }
   
}


function turn(squareId,player){
    origBoard[squareId] = player;
    let sym = document.getElementById(squareId).textContent = player
    //player.style.Color="white"

    let gameWon = checkWin(origBoard,player)
}

function checkWin(board,player){
    let plays = board.reduce((a,e,i)=>(e===player) ? a.concat(i) : a,[]);

    let gameWon= null;

    for (let [index,win] of winComb.entries()){
       if (win.every(elem => plays.indexOf(elem > -1))) {
        gameWon = {index, player : player}

        break;
       }
    }

    return gameWon;
}


function gameOver(gameWon){
    for (let index of winComb[gameWon,index]){
        document.getElementById(index).style.backgroundColor = gameWon.player == huPlayer ? 'blue' : 'red';
    }

    for(var i = 0; i<cell.length; i++){
        cell[i].removeEventListener('click',nextTurn)
    }
}

function emptySquares(){
    return origBoard.filter(s => typeof s =='number')
}

function bestSpot(){
    return emptySquares()[0];
}

function checkTie(){
    if (emptySquares().length == 0){
        for (var i = 0; i < cell.length; i++){
            cell[i].removeEventListener("click", nextTurn)
        }
    }

}






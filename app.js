// console.log("Muna")

// window.addEventListener("DOMContentLoaded",game)

// function game(){
//     let tiles=Array.from(document.querySelectorAll(".tile")),
//         playerTurn=document.querySelector(".player-turn"),
//         restart=document.querySelector(".retry"),
//         decide=document.querySelector(".decision");

//         let board=['','','','','','','','',''],
//             currentPlayer = "X",
//             gameActive = true;


//     const winConditions = [
//         [0,1,2],
//         [3,4,5],
//         [6,7,8],
//         [0,3,6],
//         [1,4,7],
//         [2,5,8],
//         [0,4,8],
//         [2,4,6], 
//     ]

//     function handleResultValidation(){
//         let roundWon =false;
//         for (let i=0; i<=7; i++){
//             let winCondition= winConditions[i],
//                 a= board[winCondition[0]],
//                 b= board[winCondition[1]],
//                 c= board[winCondition[2]];
//         if (a === '' || b === '' || c === ''){
//             continue;
//         }  

//         if (a === b && b === c){
//             roundWon= true;
//             break
//         }
//         }
//     }

//     let changePlayer = function(){
//         playerTurn.classList.remove(`player${currentPlayer}`);
//         currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
//         playerTurn.innerText=currentPlayer
//         playerTurn.classList.add(`player${currentPlayer}`)
//     }

//     tiles.forEach(function(tile,index){
//         tile.addEventListener("click",function(tile,index){
//             if (isValid(tile) && isgameActive){
//                 tile.innerText= currentPlayer;
//                 tile.classList.add(`player${currentPlayer}`);
//                 updateboard(index);
//                 handleResultValidation();
//                 changePlayer();
//             }
//         })
//     })

// restart.addEventListener("click", reset)
// }
document.addEventListener('DOMContentLoaded', () => {
    let tiles = Array.from(document.querySelectorAll('.tile')),
        playerDisplay = document.querySelector('.player-turn'),
        resetButton = document.querySelector('.retry'),
        show=document.querySelector('.mess'),
        quit=document.querySelector('.quit'),
        nxt=document.querySelector('.next'),
        PX=document.querySelector('.rx'),
        PO=document.querySelector('.ro'),
        PT=document.querySelector('.rt'),
        announcer = document.querySelector('.winner');

    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let isGameActive = true;

    const PLAYERX_WON = 'PLAYERX_WON';
    const PLAYERO_WON = 'PLAYERO_WON';
    const TIE = 'TIE';


    /*
        Indexes within the board
        [0] [1] [2]
        [3] [4] [5]
        [6] [7] [8]
    */

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function handleResultValidation() {
        let roundWon = false;
        for (let i = 0; i <= 7; i++) {
            const winCondition = winningConditions[i];
            const a = board[winCondition[0]];
            const b = board[winCondition[1]];
            const c = board[winCondition[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }

    if (roundWon) {
            announce(currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON);
            isGameActive = false;
            return;
        }

    if (!board.includes(''))
        announce(TIE);
    }

    const announce = function(type){
        show.style.display='block'
        switch(type){
            case PLAYERO_WON:
                announcer.innerHTML = 'Player <span class="playerO">O</span> Won';
                PO.innerText += +1
                break;
            case PLAYERX_WON:
                announcer.innerHTML = 'Player <span class="playerX">X</span> Won';
                PX.innerText += +1
                break;
            case TIE:
                announcer.innerText = 'Tie';
                PT.innerText += +1
        }
        announcer.classList.remove('hide');
    };

    quit.addEventListener('click',function(e){
        window.location.href ='https://www.google.com'
    })

    nxt.addEventListener('click',function(e){
        resetBoard()
        show.style.display='none'
    })

    const isValidAction = function(tile) {
        if (tile.innerText === 'X' || tile.innerText === 'O'){
            return false;
        }

        return true;
    };

    const updateBoard =  function(index) {
        board[index] = currentPlayer;
    }

    const changePlayer = function(){
       // playerDisplay.classList.remove(`player${currentPlayer}`);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        playerDisplay.textContent =`${currentPlayer}'s Turn`;
        playerDisplay.style.color='rgb(168, 190, 201)'
        playerDisplay.style.paddingTop='0.7rem'
        //playerDisplay.classList.add(`player${currentPlayer}`);
    }

    const userAction = function (tile, index){
        if(isValidAction(tile) && isGameActive) {
            tile.innerText = currentPlayer;
            tile.classList.add(`player${currentPlayer}`);
            updateBoard(index);
            handleResultValidation();
            changePlayer();
        }
    }
    
    const resetBoard = function() {
        board = ['', '', '', '', '', '', '', '', ''];
        isGameActive = true;
        announcer.classList.add('hide');

        if (currentPlayer === 'O') {
            changePlayer();
        }

        tiles.forEach(function(tile) {
            tile.innerText = '';
            tile.classList.remove('playerX');
            tile.classList.remove('playerO');
        });
    }

    tiles.forEach(function (tile, index) {
        tile.addEventListener('click', () => userAction(tile, index));
    });

    resetButton.addEventListener('click', resetBoard);

});





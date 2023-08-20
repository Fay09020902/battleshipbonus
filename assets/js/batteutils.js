import Board from "./board.js";

// Function to generate a random integer between min (inclusive) and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate a random row and column for a 9x9 grid
function generateRandomCoordinates() {
    const numRows = 9;
    const numCols = 9;
    const row = getRandomInt(0, numRows - 1);
    const col = getRandomInt(0, numCols - 1);
    return [row, col];
}



function ifexists(row, col,existedSquare) {
    let ifexist = false;

    for (const e of existedSquare) {
        if((e[0] === row) && (e[1]=== col)){
            return true
        }
    }
    if (!ifexist) {
        return false
    }
}

function addCoordi(row, col,existedSquare){

        if(!existedSquare) {
            existedSquare.push([row, col])
        }
        else {
              if (!ifexist(row, col,existedSquare)) {
                    existedSquare.push([row, col])
                }
    }
}

export function newBoard() {
    let board = new Board(); // creates a new game board

    // Examine the grid of the game board in the browser console.
    // Create the UI of the game using HTML elements based on this grid.
    console.log(board.grid);
    return board
    }

    //game-board
export const createBoard = (gameBoard) => {
    const createGrid = () =>{
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                const square = createSquare(row, col);
                gameBoard.appendChild(square);
            }
        }
        document.body.appendChild(gameBoard);
    }
    createGrid()
}

//squares
export const createSquare = (row,col) => {
     const square = document.createElement("div");
    square.setAttribute("data-row", `${row}`);
    square.setAttribute("data-col", `${col}`);
    //
    //square.setAttribute("data-hit", true or false)
    square.setAttribute("class", "square");
    return square;
}


//when a user clicks a square action
export function clicksquareHuman(gameBoard, board, turn, comp){
    gameBoard.addEventListener('click', (event) => {
        turn = 1;
    const square = event.target;

        const row = square.dataset.row;
        const col = square.dataset.col;
        //console.log(`row: ${row}; col: ${col}`);
        square.innerText = board.makeHit(row,col);
        //console.log("numRemaining" + board.numRemaining);
        if(square.innerText){
            //square.id = `${square.innerText}`;
            square.setAttribute("data-value", `${square.innerText}`);
            square.style.backgroundColor = 'green';
        } else if(!square.innerText){
            square.style.backgroundColor ='red';
        }
        turn = 1
        //computer run
        if(turn === 1){
            comp.clicksquareComp(comp.gameBoard, comp.board,turn, comp.existedSquare)
        }
})
}

export function clicksquareComp(gameBoard, board, turn, existedSquare) {
    //generate coordi
    const arr = generateRandomCoordinates()
    let row = arr[0]
    let col = arr[1]
    //add cor to comp board
    //if cor exists, generate another pair and see if exists
    while(ifexists(row, col, existedSquare)){
        [row, col] = generateRandomCoordinates()
    }
    //not exists, select the square and add pattern
    const compboard = document.querySelector("#gameBoardComp")
    const square = compboard.querySelector(`[data-row="${row}"][data-col="${col}"]`)
    square.innerText = board.makeHit(row,col);
        if(square.innerText){
            //square.id = `${square.innerText}`;
            square.setAttribute("data-value", `${square.innerText}`);
            square.style.backgroundColor = 'green';
        } else if(!square.innerText){
            square.style.backgroundColor ='red';
        }
    //switch player
    turn = 0
    //console.log(turn)
}


export function buttonlisten() {
    const button = document.querySelector("button")
    button.addEventListener("click", (e) =>{
        //console.log("current button being clicked: ", e.target)
        const board = document.getElementById("gameBoard")
        //console.log(board)
         button.remove()
        board.remove()
        onload()
    }
    )
}

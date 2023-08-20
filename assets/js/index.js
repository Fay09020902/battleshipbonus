import Board from "./board.js";


window.onload = () => {
    onload()

}

function onload() {
    let board = new Board();
    const gameBoard = document.createElement("div");
    gameBoard.setAttribute("id", "gameBoard");
    document.body.appendChild(gameBoard)
    createmessageandBut()
    createBoard(gameBoard, createSquare)
    clicksquare(gameBoard, board)
    buttonlisten()
}


function newBoard() {
let board = new Board(); // creates a new game board

// Examine the grid of the game board in the browser console.
// Create the UI of the game using HTML elements based on this grid.
console.log(board.grid);
}



//player is loser or winner
//add gamemessage and reset button
function createmessageandBut() {
        let playerLost = false;
    const gameMessage = document.createElement("div");
    gameMessage.innerHTML = ""
    gameMessage.setAttribute("id", "message");
    document.body.appendChild(gameMessage)
    const button = document.createElement("button")
    button.innerText = "Reset Game"
    document.body.appendChild(button)
}


//game-board
const createBoard = (gameBoard) => {
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
const createSquare = (row,col) => {
    const square = document.createElement("div");
    square.setAttribute("data-row", `${row}`);
    square.setAttribute("data-col", `${col}`);
    //
    //square.setAttribute("data-hit", true or false)
    square.setAttribute("class", "square");
    return square;
}


//when a user clicks a square action
function clicksquare(gameBoard, board){
    gameBoard.addEventListener('click', (event) => {
    const square = event.target;
    if(!board.isGameOver()){
        const row = square.dataset.row;
        const col = square.dataset.col;
        console.log(`row: ${row}; col: ${col}`);
        square.innerText = board.makeHit(row,col);
        //console.log("numRemaining" + board.numRemaining);
        if(square.innerText){
            //square.id = `${square.innerText}`;
            square.setAttribute("data-value", `${square.innerText}`);
            square.style.backgroundColor = 'green';
        } else if(!square.innerText){
            square.style.backgroundColor ='red';
        }
    }else{
        gameMessage.innerText = "YOU WON!"
    }
})
}


function buttonlisten() {
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

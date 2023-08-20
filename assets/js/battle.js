import {newBoard, createBoard, createSquare, clicksquareHuman, clicksquareComp, buttonlisten} from "./batteutils.js";
import Board from "./board.js";

const boardHuman = newBoard()
const gameBoardHuman = document.createElement("div");
gameBoardHuman.setAttribute("id", "gameBoardHuman");
gameBoardHuman.setAttribute("class", "gameBoard");
document.body.appendChild(gameBoardHuman)
createBoard(gameBoardHuman)

const seperator = document.createElement("div");
seperator.innerHTML = "\n Computer "
document.body.appendChild(seperator)

const boardComp = newBoard()
const gameBoardComp = document.createElement("div");
gameBoardComp.setAttribute("id", "gameBoardComp");
gameBoardComp.setAttribute("class", "gameBoard");
document.body.appendChild(gameBoardComp)
createBoard(gameBoardComp)

//start with player turn
let turn = 0;
//compter start with no squares
const existedSquare = []

// user pick a place:
// a random Number,if game not Over, place that movement in board

// a random number if game not over, place that movement in board


class ComputerPlayer  {
    constructor(gameBoard, board, existedSquare,clicksquareComp) {
      this.board = board;
      this.gameBoard = gameBoard;
     this.existedSquare = existedSquare //[[row,col]...]
     this.clicksquareComp = clicksquareComp
    }
    }

const comp = new ComputerPlayer(gameBoardComp,boardComp, existedSquare, clicksquareComp)

class HumanPlayer  {
    constructor(gameBoard, board, comp) {
      this.board = board;
      this.gameBoard = gameBoard
      this.comp = comp
     //this.existedSquare = [] //{row:col, row:col}
    }
    placeships() {
        clicksquareHuman(this.gameBoard,this.board, turn, this.comp)
    }
}

const human = new HumanPlayer(gameBoardHuman,boardHuman,comp)
//attach the clicksquare event to click
human.placeships()


//attach the clicksquare event to click

// while(!boardHuman.isGameOver() || !gameBoardComp.isGameOver() ){
//     if(turn == 1) {
//         comp.clicksquareComp(comp.gameBoard, comp.board,turn, comp.existedSquare)
//     }
// }




//while game is not over, continue the game
// while(!boardHuman.isGameOver() || !gameBoardComp.isGameOver() ) {
//     if(turn === 1) {
//        // ComputerPlayer.placeships()



//     }


// }

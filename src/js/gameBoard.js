import { Ship } from "./ship.js";

class gameBoard {
    constructor() {
    this.board = Array(10).fill(null).map(() => Array(10).fill(null));
    this.ships = [];
    this.hits = [];
    this.misses = [];
  }

  placeShip(ship, coordinates, orientation) {
    const boardSize = 10; 
    const [ x , y ] = coordinates;

    if (orientation === 'x' && x + ship.length > boardSize){
    throw new Error("Ship goes out of bounds horizontally");}
    if (orientation === 'y' && y + ship.length > boardSize){
    throw new Error("Ship goes out of bounds vertically");}

    for(let i = 0; i < ship.length; i++){
        let x = coordinates[0] + ( orientation == "x" ? i : 0 )
        let y = coordinates[1] + ( orientation == "y" ? i : 0 )
        this.board[x][y] = ship;
    }

    this.ships.push(ship)

  }

  receiveAttack(coordinates) {

    const [ x , y ] = coordinates;
    const BoardPiece = this.board[x][y]
    if(BoardPiece === null ){
        this.misses.push(coordinates)
        return false
    } else {
        BoardPiece.hit();
        this.hits.push(coordinates)
        return true
    }
  }

  allShipsSunk() {
    return this.ships.every(ship => ship.isSunk());
  }
}

export {
    gameBoard,
}
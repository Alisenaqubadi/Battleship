import { gameBoard } from "../js/gameBoard.js";
import { Ship } from "../js/ship.js";

let newShip;
let newGameBoard;


beforeEach(()=>{
    newGameBoard = new gameBoard()
    newShip = new Ship("BattleShip",3)
})

it("testing the placing function",() => {
    newGameBoard.placeShip(newShip,[3,2],"y")
    expect(newGameBoard.ships[0]).toEqual(
    {
        name: "BattleShip",
        length: 3,
        hits: 0,
        sunk: false,
    }  
    )

    newGameBoard.receiveAttack([3,2])
    newGameBoard.receiveAttack([3,3])
    newGameBoard.receiveAttack([3,4])


    expect(newGameBoard.ships[0]).toEqual(
    {
        name: "BattleShip",
        length: 3,
        hits: 3,
        sunk: true,
    }   
    )
})
import { Ship } from "../js/ship.js";

let newShip;

beforeEach(() => {
    newShip = new Ship("BattleShip",3)
})

it("test the new ship class",()=> {
    expect(newShip.name).toBe("BattleShip")
    expect(newShip.length).toBe(3)
})

it("test the new ship's functions",()=>{
    newShip.hit()
    newShip.hit()
    newShip.hit()
    expect(newShip.hits).toBe(3)
    expect(newShip.isSunk()).toBeTruthy()
})
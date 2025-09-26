import { ship } from "../js/ship.js";

let shipClass;

beforeEach(() => {
    shipClass = new ship() 
})

it("test placing function", ()=> {
    shipClass.place("Destroyer",[5,5],"y")
    expect( shipClass.Destroyer ).toEqual( {
    name: "Destroyer",
    length: 2,
    head: [5,5],
    orientation: "y",
    squares: [[5,5],[5,6]]
  } )
})

it("test placing function", ()=> {
    shipClass.place("Destroyer",[5,5],"x")
    expect( shipClass.Destroyer ).toEqual( {
    name: "Destroyer",
    length: 2,
    head: [5,5],
    orientation: "x",
    squares: [[5,5],[6,5]]
  } )
})

it("test hit function", ()=> {
    shipClass.place("Destroyer",[5,5],"x")
    expect( shipClass.hit([6,5]) ).toEqual( {
          ship: "Destroyer",
          where: [6,5],
          hit: true
        } )
    expect(shipClass.BoardHits).toEqual([{
          ship: "Destroyer",
          where: [6,5],
          hit: true
        }])
})

it("test isSunk function", () => {
  shipClass.place("Destroyer",[5,5],"x")
  shipClass.hit([6,5])
  shipClass.hit([5,5])
  expect(shipClass.isSunk("Destroyer")).toBeTruthy()
})

it("test placing function if error condition is meet", ()=> { 
    expect(()=>{shipClass.place("Destroyer",[10,5],"x")}).toThrow(new Error("Ship goes out of bounds horizontally"))
    expect(()=>{shipClass.place("Destroyer",[5,10],"y")}).toThrow(new Error("Ship goes out of bounds vertically"))
})
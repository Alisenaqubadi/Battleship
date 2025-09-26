class ship {
  Carrier = {
    name: "Carrier",
    length: 5,
    head: false,
    orientation: false,
    squares: []
  }
  Battleship = {
    name: "Battleship",
    length: 4,
    head: false,
    orientation: false,
    squares: []
  }
  Cruiser = {
    name: "Cruiser",
    length: 3,
    head: false,
    orientation: false,
    squares: []
  }
  Submarine = {
    name: "Submarine",
    length: 3,
    head: false,
    orientation: false,
    squares: []
  }
  Destroyer = {
    name: "Destroyer",
    length: 2,
    head: false,
    orientation: false,
    squares: []
  }

  BoardMisses = [];
  BoardHits = [];


  place(shipName, where, orientation) {
    
  const ships = {
    Carrier: this.Carrier,
    Battleship: this.Battleship,
    Cruiser: this.Cruiser,
    Submarine: this.Submarine,
    Destroyer: this.Destroyer
  };

  const ship = ships[shipName];
  if (!ship) throw new Error("Unknown ship");

  let [x, y] = where.map(Number);

  const boardSize = 10; 
  if (orientation === 'x' && x + ship.length > boardSize)
    throw new Error("Ship goes out of bounds horizontally");
  if (orientation === 'y' && y + ship.length > boardSize)
    throw new Error("Ship goes out of bounds vertically");

  ship.head = [x, y];
  ship.orientation = orientation;
  ship.squares = [];

  for (let i = 0; i < ship.length; i++) {
    if (orientation === 'x') ship.squares.push([x + i, y]);
    else ship.squares.push([x, y + i]);
  }
}

  hit( where ){
    const check = this.checkHits(where);
    if(check.hit) { 
    this.BoardHits.push(check)
    return check
    }
    else{ 
      this.BoardMisses.push(where)
      return check.hit
    }
  }

  checkHits(where) {
    const ships = [this.Carrier,this.Battleship,this.Submarine,this.Carrier,this.Destroyer]

    for (let i = 0; i < ships.length; i++) {
      if(ships[i].squares.map(String).includes(String(where))){
        return {
          ship: ships[i].name,
          where: where,
          hit: true
        }
      }
    }

    
    return {hit: false}
  }

  isSunk(ship){
    const ships = {
    Carrier: this.Carrier,
    Battleship: this.Battleship,
    Cruiser: this.Cruiser,
    Submarine: this.Submarine,
    Destroyer: this.Destroyer
  };

    const currentShip = ships[ship].squares
    const newHits = this.BoardHits.map(hit => hit.where);

    return currentShip.every(square =>
    newHits.some(hit => hit[0] === square[0] && hit[1] === square[1])
  );
  }

}

export { ship }

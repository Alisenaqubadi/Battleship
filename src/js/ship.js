class ship {
  Carrier = {
    length: 5,
    head: false,
    orientation: false,
    squares: []
  }
  Battleship = {
    length: 4,
    head: false,
    orientation: false,
    squares: []
  }
  Cruiser = {
    length: 3,
    head: false,
    orientation: false,
    squares: []
  }
  Submarine = {
    length: 3,
    head: false,
    orientation: false,
    squares: []
  }
  Destroyer = {
    length: 2,
    head: false,
    orientation: false,
    squares: []
  }

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

}

export { ship }

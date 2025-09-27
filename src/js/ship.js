class Ship {
  constructor(name, length) {
    this.name = name;
    this.length = length;
    this.hits = 0;
    this.sunk = false;
  }

  hit() {
    this.hits++;
    if (this.hits >= this.length) {
      this.sunk = true;
    }
  }

  isSunk() {
    return this.sunk;
  }
}


export { Ship }

class Ship {
  constructor(length) {
    // this.pos = [1, 2, 3] // just example
    this.length = length; // just example
    this.hit = []; //
    this.sunk = false;
  }
  hit(num) {
    this.hit.push({ num, hit: true });
  }
  isSunk() {
    if (this.hit.length >= this.length) this.sunk = true;
  }
}

const ShipFactory = {
  makeShip: (length) => new Ship(length),
};

exports.ShipFactory = ShipFactory;

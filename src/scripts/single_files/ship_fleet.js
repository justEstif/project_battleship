class Fleet {
  constructor() {
    this.sunk = false;
    this.ships = [];
  }
  addShip(ship) {
    if (ship instanceof Ship) {
      this.ships.push(ship);
    }
  }
  isFleetSunk() {
    this.sunk = true;
    this.ships.map((ship) => {
      ship.isShipSunk();
      if (!ship.sunk) this.sunk = false;
    });
    return this.sunk;
  }
}
class Ship {
  constructor(length) {
    this.length = length;
    this.sunk = false;
  }
  addNewSquares(squares) {
    if (squares.length !== this.length) return;
    this.squaresOfShip = squares;
  }
  isShipSunk() {
    this.sunk = true;
    this.squaresOfShip.map((square) => {
      if (!square.hit) this.sunk = false;
    });
    // it would need to call isFleetSunk()
    return this.sunk;
  }
}

const ShipFactory = {
  makeShip: (length) => new Ship(length),
};
const FleetFactory = {
  makeFleet: () => new Fleet(),
};
exports.ShipFactory = ShipFactory;
exports.FleetFactory = FleetFactory;

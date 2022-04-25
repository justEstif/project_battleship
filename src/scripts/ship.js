class Ship {
  constructor(length) {
    this.length = length;
    this.sunk = false;
    this.squaresOfShip = [];
  }
  addNewSquares(squares) {
    if (squares.length !== this.length) return;
    this.squaresOfShip = squares;
  }
  isShipSunk() {
    this.sunk = true
    this.squaresOfShip.map(square => {
      if (!square.hit) this.sunk = false
    })
    return this.sunk
  }
}
const ShipFactory = {
  makeShip: (length) => new Ship(length),
};

exports.ShipFactory = ShipFactory;

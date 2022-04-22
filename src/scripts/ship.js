class Ship {
  constructor(length) {
    this.length = length;
    this.sunk = false;
    this.squaresOfShip = [];
  }
  markSquareHit(...args) {
    args.forEach(square => square.hit = true)
    // runs checkAllSquares
  }
  addNewSquares(squares) {
    if (squares.length !== this.length) return;
    this.squaresOfShip = [];
    this.squaresOfShip = squares;
  }
  isShipSunk() {
    this.sunk = true
    console.log(this.squaresOfShip)
    for (let square of this.squaresOfShip) {
      if (!square.hit) {
        this.sunk = false; break
      }
    }
    return this.sunk
  }
}
const ShipFactory = {
  makeShip: (length) => new Ship(length),
};

exports.ShipFactory = ShipFactory;

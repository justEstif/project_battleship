class Player {
  constructor() {
    this.turn = false
  }
  createFleet() { }
  createGameBoard() { }
}
class Gameboard {
  constructor() {
    this.squares = []
    this.hitAndMiss = []
  }
}
class Square {
  constructor() {
    this.coordinate = [];
    this.ship = false;
    this.hit = false;
  }

}
class Fleet {
  constructor() {
    this.sunk = false;
    this.ships = []
  }
  addShip(ship) {
    if (ship instanceof Ship) {
      this.ships.push(ship)
    }
  }
  isFleetSunk() {
    this.sunk = true
    this.ships.map((ship) => {
      ship.isShipSunk()
      if (!ship.sunk) this.sunk = false
    })
    return this.sunk
  }
}
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
    this.sunk = true;
    this.squaresOfShip.map((square) => {
      if (!square.hit) this.sunk = false;
    });
    // it would need to call isFleetSunk()
    return this.sunk;
  }
}

const SquareFactory = {
  makeSquare: () => new Square(),
};
const PlayerFactory = {
  makePlayer: () => new Player()
}
const GameboardFactory = {
  makeGameboard: () => new Gameboard(),
};
const ShipFactory = {
  makeShip: (length) => new Ship(length),
};
const FleetFactory = {
  makeFleet: () => new Fleet()
}
exports.ShipFactory = ShipFactory;
exports.FleetFactory = FleetFactory
exports.PlayerFactory = PlayerFactory
exports.GameboardFactory = GameboardFactory;
exports.SquareFactory = SquareFactory

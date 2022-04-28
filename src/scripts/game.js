class Player {
  constructor() {
    this.turn = false
  }
}

class Gameboard {
  constructor() {
    this.squares = []
    this.hitAndMiss = []
  }
}

class Fleet {
  constructor() {
    this.sunk = false;
    this.ships = []
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

class Square {
  constructor() {
    this.coordinate = [];
    this.ship = false;
    this.hit = false;
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

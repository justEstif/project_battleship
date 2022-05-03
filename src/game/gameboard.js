const { FleetFactory } = require("./fleet.js");
class Gameboard {
  constructor(boardSize = 7) {
    this.boardSize = boardSize;
    this.fleet = FleetFactory.makeFleet();
  }
  randomLocation() {
    let direction = Math.floor(Math.random() * 2);
    let row, col;
    if (direction === 1) {
      // horizontal
      row = Math.floor(Math.random() * this.boardSize);
      col = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
    } else {
      // vertical
      row = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
      col = Math.floor(Math.random() * this.boardSize);
    }
    return [row, col]
  }


  randomizeFleet() {
    let newShipLocations = [];

    for (let i = 0; i < this.shipLength; i++) {
      if (direction === 1) {
        newShipLocations.push(row + "" + (col + i));
      } else {
        newShipLocations.push(row + i + "" + col);
      }
    }
    return newShipLocations;
  }



  randomizeFleet() {
    let locations;
    for (let i = 0; i < this.fleet.numShips; i++) {
      do {
        locations = this.randomizeLocation();
      } while (this.disallowLocation(locations));
      this.fleet.ships[i].locations = locations;
    }
  }
}

const GameboardFactory = {
  makeFleet: (boardSize) => new Gameboard(boardSize),
};

exports.GameboardFactory = GameboardFactory;

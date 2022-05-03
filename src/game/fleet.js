const { ShipFactory } = require("./ship.js")
class Fleet {
  constructor(numShips = 3) {
    this.boardSize = 7
    this.numShips = numShips
    this.shipsSunk = 0
    this.ships = this.createFleet()
  }
  createFleet() {
    let ships = []
    for (let i = 0; i < this.numShips; i++) {
      ships.push(ShipFactory.makeShip())
    }
    return ships
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
    return `${row}${col}`
  }

  disallowLocation(guessedLocation) {
    this.ships.map((ship) => {
      ship.locations.map((location) => {
        if (guessedLocation === location) return true;
      });
    });
    return false;
  }

  randomizeFleet() {
    let locations;
    for (let i = 0; i < this.numShips; i++) {
      do {
        locations = this.randomizeLocation();
      } while (this.disallowLocation(locations));
      this.ships[i].locations = locations;
    }
  }
  // randomizeShips
  // check horizontal and vertical
  // change the ships locations
}
// TODO randomize the location of the ships location


const FleetFactory = {
  makeFleet: (shipAmount) => new Fleet(shipAmount)
}

exports.FleetFactory = FleetFactory

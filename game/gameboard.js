const { ShipFactory } = require("./ship.js");
class Gameboard {
  constructor(shipAmount = 3, boardSize = 7) {
    this.miss = [];
    this.boardSize = boardSize;
    this.shipAmount = shipAmount;
    this.shipsSunk = 0;
    this.ships = this.createShips();
  }
  createShips() {
    let shipAmount = [];
    for (let i = 0; i < this.shipAmount; i++) {
      shipAmount.push(ShipFactory.makeShip());
    }
    return shipAmount;
  }
  setLocation(index, newLocations) {
    if (this.validChange(index, newLocations)) {
      this.ships[index].setLocation(newLocations);
    }
  }
  validChange(index, newLocations) {
    // NOTE: invalid if the length of new and ship don't match
    if (newLocations.length !== this.ships[index].length) return false;

    // NOTE: if the coodinates are not in the grid
    for (let i = 0; i < newLocations.length; i++) {
      if (
        newLocations[i].location.x >= this.boardSize ||
        newLocations[i].location.x < 0 ||
        newLocations[i].location.y >= this.boardSize ||
        newLocations[i].location.y < 0
      )
        return false;
    }

    // NOTE: if  not horizontal or not vertical
    let xs = [];
    let ys = [];
    for (let location in newLocations) {
      xs.push(location.x);
      ys.push(location.y);
    }
    if (xs.some((x) => x != xs[0]) || ys.some((y) => y != ys[0])) return false;

    // NOTE if the locations have not been taken by any other ship
    for (const ship of this.ships) {
      for (const location of ship.locations) {
        for (const newLocation of newLocations) {
          if (location === newLocation) return false
        }
      }
    }
    // else
    if (newLocations) return true;
  }

  receiveAttack(guess) {
    this.ships.map((ship) => {
      ship.locations.map((location) => {
        if (location === guess) {
          ship.hit(guess);
          if (ship.isShipSunk()) {
            this.shipsSunk++;
            this.checkShips()
            // TODO some game logic -> checkShips
            // NOTE end game || keep turn || pass turn
          }
          return;
        }
      });
    });
    this.miss.map((miss) => {
      if (miss === guess) return;
    });
    this.miss.push(guess);
  }

  checkShips() {
    return (this.shipsSunk >= this.shipAmount)
  }
}

const GameboardFactory = {
  makeGameboard: () => new Gameboard(),
};

exports.GameboardFactory = GameboardFactory;

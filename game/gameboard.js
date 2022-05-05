const { ShipFactory } = require("./ship.js");
class Gameboard {
  constructor(shipAmount = 3) {
    this.miss = [];
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
  validChange(index, newLocations) {
    // TODO can add logic if required
    // check if any of the locations are in ships.[i].loctaionso
    // check if the locations are horizontal or vertical
    // check if the length is fine
    // check if the value is valid -> all the locations exist
    // check if the locations have not been taken by any other ship
    // pass the value
    if (newLocations) return true;
  }
  setLocation(index, newLocations) {
    if (this.validChange(index, newLocations)) {
      this.ships[index].setLocation(newLocations)
    }
  }
  receiveAttack(guess) {
    // TODO decouple this function
    // check if in ships
    this.ships.map(ship => {
      ship.locations.map(location => {
        if (location === guess) {
          ship.hit(guess);
          if (ship.isShipSunk()) {
            this.shipsSunk++;
            this.isFleetDown()
            // TODO some game logic -> checkShips
            // NOTE end game || keep turn || pass turn
          }
          return
        }
      })
    })
    this.miss.map(miss => {
      if (miss === guess) return
    })
    this.miss.push(guess)
  }
}

const GameboardFactory = {
  makeGameboard: () => new Gameboard(),
};

exports.GameboardFactory = GameboardFactory;

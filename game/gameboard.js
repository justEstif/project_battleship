const { ShipFactory } = require("./ship.js");
class Gameboard {
  constructor(shipAmount = 3) {
    this.miss = [];
    this.shipAmount = shipAmount;
    this.shipSunk = 0;
    this.ships = this.createShips();
  }
  createShips() {
    let shipAmount = [];
    for (let i = 0; i < this.shipAmount; i++) {
      shipAmount.push(ShipFactory.makeShip());
    }
    return shipAmount;
  }
  validChange(newLocations) {
    // TODO add proper logic
    if (newLocations) return true;
  }
  setLocation(index, newLocations) {
    // TODO can add logic if required
    // some type of validation maybe
    if (this.validChange(newLocations)) {
      this.ships[index].locations = newLocations;
    }
  }
  checkGameStatus() {
    if (this.shipSunk === this.shipAmount) {
      // TODO gameover logic
    }
    else {
      // TODO something
    }
  }
  receiveAttack(guess) {
    // check if in ships
    this.ships.map(ship => {
      ship.locations.map(location => {
        if (location === guess) {
          ship.hit(guess);
          if (ship.isShipSunk()) {
            this.shipSunk++;
            this.checkGameStatus();
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

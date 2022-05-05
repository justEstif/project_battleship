class Ship {
  /**
     Ship object
     {
     length,
     sunk,
     locations:{
     [location{x,y}, hit],
     [location{x,y}, hit],
     [location{x,y}, hit],
     }

     }
   */
  constructor(length = 3) {
    this.length = length;
    this.sunk = false;
    this.locations = this.setInital();
  }
  setInital() {
    let initalValue = [];
    for (let i = 0; i < this.length; i++)
      initalValue.push({ location: {}, hit: false });
    return initalValue;
  }
  setLocation(newLocations) {
    // NOTE the logic will be placed in the Gameboard
    // it will compare the attempt with the other ships before passing to ship
    this.locations = newLocations;
  }
  hit(target) {
    for (let coordinate of this.locations) {
      if (
        coordinate.location.x === target.x &&
        coordinate.location.y === target.y &&
        !coordinate.hit // NOTE do I need this?
      ) {
        coordinate.hit = true;
        this.isShipSunk();
        return;
      }
    }
  }
  isShipSunk() {
    for (let coordinate of this.locations) {
      if (!coordinate.hit) return (this.sunk = false);
    }
    return (this.sunk = true);
  }
}

const ShipFactory = {
  makeShip: (length) => new Ship(length),
};

exports.ShipFactory = ShipFactory;

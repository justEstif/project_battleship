class Ship {
  // properties
  // functions
  constructor(length = 3) {
    this.length = length;
    this.sunk = false;
    this.locations = this.setInital().locations;
    this.hits = this.setInital().hits;
  }
  setInital() {
    let initalValues = { locations: [], hits: [] };
    for (let i = 0; i < this.length; i++) {
      initalValues.hits.push("");
      initalValues.locations.push("");
    }
    return initalValues;
  }
  setLocation(locations) {
    this.locations = locations;
  }
  hit(guess) {
    this.locations.map((location, index) => {
      if (location === guess && this.hits[index] !== "hit") {
        this.hits[index] = "hit";
        this.isShipSunk();
      }
    });
  }
  isShipSunk() {
    for (const hit of this.hits) {
      if (!hit) { return this.sunk }
    }
    this.sunk = true
    return this.sunk
  }
}

const ShipFactory = {
  makeShip: (length) => new Ship(length),
};

exports.ShipFactory = ShipFactory;

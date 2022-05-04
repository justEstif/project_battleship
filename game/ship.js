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
/**
 * create a ship
 * the ship should have a certain length
 * the default length should be 3
 * the locations and hits would be arrays of the squares
 * hit(guess)
 * * if guess is hit ->
 * * * if not hit -> set hit -> isShipSunk()
 * * * if hit -> do nothing -> keep turn ??
 * * else -> report miss
 *
 * */

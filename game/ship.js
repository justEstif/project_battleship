class Ship {
  // properties
  // functions
  constructor() {
    this.length = 3;
    this.sunk = false;
    this.locations = this.setInital().locations
    this.hits = this.setInital().hits
  }
  setInital() {
    let initalValues = { locations: [], hits: [] }
    for (let i = 0; i < this.length; i++) {
      initalValues.hits.push("")
      initalValues.locations.push("")
    }
    return initalValues
  }
  setLocation(locations) {
    // TODO can add logic if required
    // some type of validation maybebe
    this.locations = locations
  }
  hit(guess) {
    this.locations.map((location, index) => {
      if (location === guess) {
        switch (this.hits[index]) {
          case "hit":
            // TODO displayMessage on UI
            break; // do nothing
          default:
            this.hits[index] = "hit"
            this.isShipSunk()
        }
      }
    })
  }
  isShipSunk() {
    for (let i = 0; i < this.length; i++) {
      if (this.hits[i] !== "hit") {
        this.sunk = false
      }
      this.sunk = true
    }
    return this.sunk
  }
}

const ShipFactory = {
  makeShip: () => new Ship(),
};

exports.ShipFactory = ShipFactory
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

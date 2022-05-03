class Ship {
  constructor(length = 3) {
    this.length = length;
    this.sunk = false
    this.locations = []
    this.hits = []
  }
  setLocations(newLocations) {
    this.locations = newLocations
  }
  hit(guess) {
    this.locations.map((element, index) => {
      if (element === guess) {
        switch (this.hits[index]) {
          case "hit":
            // TODO message
            break
          default:
            // TODO Message
            this.hits[index] = "hit"
            this.isSunk()
        }
      }
    })
  }
  isSunk() {
    for (let i = 0; i < this.length; i++) {
      if (this.hits[i] !== "hit") {
        return
      }
      this.sunk = true
      // TODO do something next
    }
  }
}

const ShipFactory = {
  makeShip: (length) => new Ship(length)
}
exports.ShipFactory = ShipFactory

class Fleet {
  constructor() {
    this.sunk = false;
    this.ships = []
  }
}

const FleetFactory = {
  makeFleet: () => new Fleet()
}
exports.FleetFactory = FleetFactory

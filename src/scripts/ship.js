class Ship {
  constructor(length) {
    this.length = length
    this.sunk = false
    this.striked = []
    this.coordinates = []

  }
  strike(number) {
    // this feels like an abstraction to be distilled out
    if (number <= this.length
      && number >= 1
      && !this.striked.includes(number)
    ) {
      this.striked.push(number);
      this.isSunk()
    }
  }
  isSunk() {
    if (this.striked.length === this.length) this.sunk = true;
    return this.sunk;
  }
  setCoordinate(coordinates) {
    this.coordinates = coordinates
  }

}
exports.Ship = Ship

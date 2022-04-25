class Square {
  constructor() {
    this.coordinate = [];
    this.ship = [];
    this.hit = false;
  }
}
const SquareFactory = {
  makeSquare: () => new Square(),
};
exports.SquareFactory = SquareFactory

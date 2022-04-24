class Gameboard {
  constructor() {
    this.squares = []
    this.notShips = []
  }
}

const GameboardFactory = {
  makeGameboard: () => new Gameboard(),
};
exports.GameboardFactory = GameboardFactory;

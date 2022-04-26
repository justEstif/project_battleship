class Gameboard {
  constructor() {
    this.squares = []
    this.notShips = []
  }
  passTurn() {
    this.player.turn = false
  }
}

const GameboardFactory = {
  makeGameboard: () => new Gameboard(),
};
exports.GameboardFactory = GameboardFactory;

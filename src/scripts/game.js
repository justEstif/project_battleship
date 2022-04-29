class Gameboard {
  constructor() {
    this.missedAttacks = [];
    this.ships = [];
  }
  setShip(ship, coordinates) {
    // there should be some way to make sure the coordinate can pass
    ship.setCoordinate(coordinates);
    this.ships.push(ship);
  }
  receiveAttack(coordinate) {
    for (const ship of this.ships) {
      if (ship.coordinates.includes(coordinate)) {
        let number = this.ships.indexOf(ship) + 1
        ship.strike(number)
      }
    }
  }

  // createShips(numberOfships, arrayOfLength){
  // create ships of certain amount and length and put them in the ships array
  // }
  // changeShipCoordinate(){
  // check if the coordinate doesn't belong to one of the ships
  //
  // }
}

exports.Gameboard = Gameboard;

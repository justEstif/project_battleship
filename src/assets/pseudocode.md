# Project Battleship

- Gameboard
  - [x] squares
  - [x] hitAndMiss: [ ] // squares hit but ships miss
  - [ ] receiveAttack(square)
    - [x] set square.hit to true
    - [ ] call isFleetSunk()
  - [ ] passTurn()
- Player
  - [x] turn: boolean
  - [ ] fleet: Fleet{ }
  - [ ] gameboard: Gameboard { }
- Fleet
  - [x] sunk: boolean
  - [x] ships: [ ]
  - *[ ] createFleet(Player)*
  - [x] addShip(ship): added to ships object
    - [ ] rewrite this test, i don't think this should have the right to addShips
  - [x] isFleetSunk
- Ship
  - [x] length: number
  - [x] sunk: boolean
  - [x] squaresOfShip: [ ]
  - [x] addNewSquares()
  - [ ] isShipSunk()
    - [ ] get Fleet class to work
- Square
  - [x] coordinates: [x, y]
  - [x] isShip: boolean
  - [x] hit: boolean
  - [ ] setCoordinates() // seems unnecessary
- Thoughts
  - [ ] a game factory functions that creates and passes the objects
- small steps

- there should be some array that tells what the length is going to be of each ship
  - when we create ship, we would just take one of those values
- I think the factory and player objects are basically the samething
  - createFleet function takes in an array of length and creates ships of those length

 
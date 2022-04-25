# Project Battleship
- Ship
  - /id/: ships should have an id
  - length: number
  - sunk: boolean
  - squaresOfShip: [] 
  - addNewSquares([squares]): this.squaresOfShip
  - isShipSunk(): this.sunk
- Gameboard
  - squares: []
  - notShips: []: squares that are have no ships that were attacked
  - receiveAttack(square): 
    - set square to hit 
    - if the square has a ship pass square to ship using ID 
    - else pass to notShips
  - passTurn()
- Player
  - turn: boolean
  - fleet: Fleet
  - gameboard: GameBoard
  - Function
- Fleet
  - sunk: boolean
  - ships: [] 
  - createFleet(Player)
- Square
  - x: string
  - y: number
  - ship:[shipID] || null
  - hit: boolean
- Missing:
  - a way to identify the ships a square is part of
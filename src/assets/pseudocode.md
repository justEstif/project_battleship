# Project Battleship

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
- Missing:
  - a way to identify the ships a square is part of

- Square: complete -> just an object with coordinates and ship and hit
  - x: string
  - y: number
  - ship:[shipID] || null
  - hit: boolean

- Ship
  - length: number
  - sunk: boolean
  - squaresOfShip: [] 
  - addNewSquares([squares]): this.squaresOfShip 
  - isShipSunk(): this.sunk
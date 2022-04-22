**Player**
*Properties*
turn: boolean
	tells if it is the players turn or not
fleet: array
	each player have their own Fleet
	it is used to tell the main game loop if the player has lost
	more information in the Fleet and ships section
gameBoard: object
	the Player gameBoard on which the Fleat would be placed
*Functions*
no function currently

**Fleet**
*Properties*
sunk: boolean
	have all the ships sunk?
ships: array
	all the Ship object of the Player
*Functions*
createFleet(Player)
	create a fleat for the Player on GameBoard
	returns a fleat object for 5 ships, which would be passed to the GameBoard 
		it would random place the Ships on different coordinates

**Ship**
*Properties*
length: number
	length of the ship
	used when place Ship
sunk: boolean
	default is null
	update to true if all the Squares of Ship are hit
squaresOfShip: array
	holds all the Squares that this Ship is in
	used to check if Ship has been hit and if sunk
*Functions*
~~markSquareHit(square)~~
	marks the square as hit
	needs more discussion
isShipSunk()
	if all the Squares in the squaresOfShip have been hit
	returns a boolean

**GameBoard**
*Properties*
squares: array
	all the Square object on the array are placed here
notShipArray: array
	all the attacks on this Gameboard that hit a Square that didn't have a ship
*Functions*
receiveAttack(Square)
	sets the Square hit to true
	if the Square is part of a Ship, check isShipSunk()
passTurn()
	passes the turn to the correct Player
	probably a simple if Player1.true: change CSS and HTMl interactability
~~randomShipCoordinates()~~
	returns all the legal coordinates for Ships
	rather we just not allow drag and drop on Square where there is a isShip is true
// some way to check which Ship is a part of
// there should be some way to make sure only horizontal or vertical Squares are allowed

**Square**
{hit, isShipSquare, coordinate: coordinateObj}
*Properties*
isShipSquare: boolean
	if one of the squaresOfShip
	used to check if the place is allowed
coordinate: a coordinateObj
hit: boolean
	changes if hit
*Functions*
~~updateSquareShip():~~
	if Ship is moved or add it should change the property

**Coordinate**
*Properties*
this.x = x
this.y = y

coordinate -> Square -> GameBoard -> Player
coordinate -> Ship -> Fleet -> Player
	

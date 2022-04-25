const { ShipFactory } = require('./ship.js')
import { it, expect, describe, afterEach } from "@jest/globals";

describe('testing the ShipFactory', () => {
  let parameter = 5; // length
  let shipObj = ShipFactory.makeShip(parameter);

  afterEach(() => {  // setting the reset
    parameter = 5;
    shipObj = ShipFactory.makeShip(parameter);
  })
  it("checking if the Ship object has all properties", () => {
    let expectedObj = { //
      length: parameter, // the length we passed in
      sunk: false, // initally not sunk
      squaresOfShip: [], // not placed anywhere on gameboard
    }
    expect(shipObj).toEqual(expectedObj) // the returned object should match
  })
  it("testing addNewSquares with correct values", () => {
    let newSquares = [  // pass in an array of new squares
      { hit: false },
      { hit: false },
      { hit: false },
      { hit: false },
      { hit: false },
    ]
    shipObj.addNewSquares(newSquares)
    expect(shipObj.squaresOfShip).toEqual(newSquares)
  })
  it("testing isShipSunk", () => {
    let newSquares = [
      { hit: true },
      { hit: true },
      { hit: true },
      { hit: true },
      { hit: true },
    ]
    shipObj.addNewSquares(newSquares)
    shipObj.isShipSunk()  // checks if any one the square are not hit
    expect(shipObj.isShipSunk()).toBe(true)
  })
  it("testing isShipSunk, when not sunk", () => {
    let newSquares = [
      { hit: false },
      { hit: true },
      { hit: true },
      { hit: true },
      { hit: true },
    ]
    shipObj.addNewSquares(newSquares)
    shipObj.isShipSunk()
    expect(shipObj.isShipSunk()).toBe(false)
  })

  it.todo("testing markSquareHit") // check if ship is sunk
})

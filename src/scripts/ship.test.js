const { ShipFactory } = require('./ship.js')
import { it, expect, describe, afterEach } from "@jest/globals";

describe('testing the ShipFactory', () => {
  let parameter = 5;
  let shipObj = ShipFactory.makeShip(parameter);

  afterEach(() => {
    parameter = 5;
    shipObj = ShipFactory.makeShip(parameter);
  })
  it("checking if the Ship object has all properties", () => {
    let expectedObj = {
      length: parameter,
      sunk: false,
      squaresOfShip: [],
    }
    expect(shipObj).toEqual(expectedObj)
  })
  it("testing markSquareHit", () => {
    let square = { hit: false }
    shipObj.markSquareHit(square)
    expect(square.hit).toBeTruthy()
  })
  it("testing addNewSquares with correct values", () => {
    let newSquares = [
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
    shipObj.isShipSunk()
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
})

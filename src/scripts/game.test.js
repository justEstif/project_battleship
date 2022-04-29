const { Gameboard } = require("./game.js")
const { Ship } = require("./ship.js")
import { it, expect, describe, afterEach } from "@jest/globals";

describe("testing the Gameboard", () => {
  it("testing the setShip function with valid coordinates", () => {
    let gameboard = new Gameboard()
    let ship = new Ship(2)
    let coordinates = [
      { x: 1, y: 1 },
      { x: 2, y: 1 },
    ]
    gameboard.setShip(ship, coordinates)
    expect(ship.coordinates).toEqual(coordinates)
  })
  it("receiveAttack, ship is hit, ship.striked", () => {
    let gameboard = new Gameboard()
    let ship = new Ship(2)
    let coordinates = [
      { x: 1, y: 1 },
      { x: 2, y: 1 },
    ]
    gameboard.setShip(ship, coordinates)
    gameboard.receiveAttack({ x: 1, y: 1 })
    expect(ship.striked).toEqual([1])
  })
  // it("receiveAttack, ship isn't hit, ship.striked", () => {
  //   let gameboard = new Gameboard()
  //   let ship = new Ship(4)
  //   let coordinates = [
  //     { x: 1, y: 1 },
  //     { x: 2, y: 1 },
  //     { x: 3, y: 1 },
  //     { x: 4, y: 1 },
  //   ]
  //   gameboard.setShip(ship, coordinates)
  //   gameboard.receiveAttack({ x: 5, y: 1 })
  //   expect(ship.striked).toEqual([])
  // })
  // it("receiveAttack, ship isn't hit, gameboard.missedAttacks", () => {
  //   let gameboard = new Gameboard()
  //   let ship = new Ship(4)
  //   let coordinates = [
  //     { x: 1, y: 1 },
  //     { x: 2, y: 1 },
  //     { x: 3, y: 1 },
  //     { x: 4, y: 1 },
  //   ]
  //   gameboard.setShip(ship, coordinates)
  //   gameboard.receiveAttack({ x: 5, y: 1 })
  //   expect(ship.striked).toEqual([])
  // })
  // it("receiveAttack function, ship is hit, gameboard.missedAttacks", () => {
  //   let gameboard = new Gameboard()
  //   let ship = new Ship(2)
  //   let coordinates = [
  //     { x: 1, y: 1 },
  //     { x: 2, y: 1 },
  //   ]
  //   gameboard.setShip(ship, coordinates)
  //   gameboard.receiveAttack({ x: 2, y: 1 })
  //   expect(gameboard.missedAttacks).toEqual([])
  // })
  it.todo("testing the receiveAttack function when ship isn't hit")
  it.todo("testing isGameOver function, if all ships have sunk")
  it.todo("testing isGameOver function, if some ships have sunk")
})


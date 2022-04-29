const { Ship, Gameboard } = require("./game.js")
import { it, expect, describe, afterEach } from "@jest/globals";

describe("testing the Gameboard", () => {
  it("checking the constructor of the Gameboard class", () => {
    let gameboard = new Gameboard()
    let expectedObj = {
      missedAttacks: [],
      ships: []
    }
    expect(gameboard).toEqual(expectedObj)
  })
})

describe('testing Gameboard and Ship class interaction', () => {
  it("the Gameboard starts with 5 ships placed at random coordinates")
  // it("checking the placeShip function of Gameboard works", () => { })
  // it("checking if the receiveAttack function of the Gameboard works", () => { })
  // it("checking if gameOver function of Gameboard works", () => { })
})

const { GameboardFactory } = require('./gameboard.js')
import { it, expect, describe, afterEach } from "@jest/globals";

describe("testing the GameboardFactory", () => {
  let gameboard = GameboardFactory.makeGameboard() // creating a gameboard
  afterEach(() => {
    gameboard = GameboardFactory.makeGameboard() // reseting the gameboard
  })
  it("checking if the gameboard object has all the properties", () => {
    let expectedObj = {  // 2 properties, both 0
      squares: [],
      notShips: [],
    }
    expect(gameboard).toEqual(expectedObj)
  })
  // change sq to hit and  change the isShipSunk function
  it.todo("checking if receiveAttack would call isFleetSunk")
  it.todo("checking if passTurn would set Player.turn false, depending on whether player hit a ship or not")
})

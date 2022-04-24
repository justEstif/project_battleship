const { GameboardFactory } = require('./gameboard.js')
import { it, expect, describe, afterEach } from "@jest/globals";

describe("testing the GameboardFactory", () => {
  let gameboard = GameboardFactory.makeGameboard()
  afterEach(() => {
    gameboard = GameboardFactory.makeGameboard()
  })
  it("checking if the gameboard object has all the properties", () => {
    let expectedObj = {
      squares: [],
      notShips: [],
    }
    expect(gameboard).toEqual(expectedObj)
  })
  it('testing receiveAttack function', () => {
    let testSquare = { hit: false }
  })
})

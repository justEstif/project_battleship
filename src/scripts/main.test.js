const { PlayerFactory } = require('./main.js')
import { it, expect, describe } from "@jest/globals";
describe('make sure that PlayerFactory return a Player object', () => {
  let playerObj = PlayerFactory.makePerson();
  it("should return a person object", () => {
    let expectedObj = {}
    expect(playerObj).toEqual(expectedObj)
  })
})

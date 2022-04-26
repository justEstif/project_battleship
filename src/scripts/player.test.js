const { PlayerFactory } = require("./player.js");
import { it, expect, describe, afterEach } from "@jest/globals";

describe("testing the PlayerFactory", () => {
  let playerObj = PlayerFactory.makePlayer()
  afterEach(()=>{
    playerObj = PlayerFactory.makePlayer()
  })
  it("checking if the Player object has all the inital properties", ()=>{
    let expectedObj = {
      turn: false, 
      fleet: {
        sunk: false,
        ships: []
      },
      gameboard: {
        squares: [],
        notShips: []
      }
    }
    expect(playerObj).toEqual()
  })
  it.only.todo("boom");
  it.todo("checking if the Player object has all the properties");
  it.todo("check another function")
});

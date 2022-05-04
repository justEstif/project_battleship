const { GameboardFactory } = require("./gameboard.js");
const { ShipFactory } = require("./ship.js");
const { PlayerFactory } = require("./player.js")
import { it, expect, describe, afterEach } from "@jest/globals";

describe("testing the Player", () => {
  it("testing the inital properties of the Player", () => {
    let player = PlayerFactory.makePlayer()
    let gameboardObj = GameboardFactory.makeGameboard()
    let expected = {
      turn: false,
      gameboard: gameboardObj
    }
    expect(player).toEqual(expected)
  })
})

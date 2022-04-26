const { GameboardFactory } = require("./gameboard.js");
import { it, expect, describe, afterEach } from "@jest/globals";

describe("testing the GameboardFactory", () => {
  let gameboard = GameboardFactory.makeGameboard();
  afterEach(() => {
    gameboard = GameboardFactory.makeGameboard();
  });
  it("checking if the gameboard object has all the properties", () => {
    let expectedObj = {
      squares: [],
      notShips: [],
    };
    expect(gameboard).toEqual(expectedObj);
  });
  /*
  // i can only test this when we bring the different pieces together
  it("check if receiveAttack would call isFleetSunk", () => {
    let sq = { hit: false, ship: true }
    expect(gameboard.receiveAttack(sq)).toBeFalsy()
  })
   */
  it.todo("checking if passTurn would set Player.turn false, depending on whether player hit a ship or not");
  it.todo("checking the receiveAttack function")
  it.todo("checking the createSquares function")
});


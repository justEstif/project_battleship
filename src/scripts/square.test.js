const { SquareFactory } = require("./square.js");
import { it, expect, describe, afterEach } from "@jest/globals";

describe("testing the SquareFactory", () => {
  let squareObj = SquareFactory.makeSquare();
  afterEach(() => {
    squareObj = SquareFactory.makeSquare(); // reset
  });
  it("checking if the square object has all the properties", () => {
    let expectedObj = {
      // 2 properties, both 0
      coordinate: [],
      ship: [],
      hit: false,
    };
    expect(squareObj).toEqual(expectedObj);
  });
  // change sq to hit and  change the isShipSunk function
  it.todo("checking if receiveAttack would call isFleetSunk");
  it.todo(
    "checking if passTurn would set Player.turn false, depending on whether player hit a ship or not"
  );
  it.todo("checking if we can coordinates to square")
});

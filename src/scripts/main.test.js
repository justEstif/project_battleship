const { ShipFactory } = require("./main.js");
import { it, expect, describe } from "@jest/globals";
describe("make sure that ShipFactory returns a ship object", () => {
  let obj = ShipFactory.makeShip(4);
  it("should return a ship object with the expected properties and methods", () => {
    let expectedObj = { "hit": [], "length": 4, "sunk": false };
    expect(obj).toEqual(expectedObj);
  });
});

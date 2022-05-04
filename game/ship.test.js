const { ShipFactory } = require("./ship.js");
import { it, expect, describe, afterEach } from "@jest/globals";

describe("checking the ship", () => {
  it("inital properties of ship", () => {
    let ship = ShipFactory.makeShip()
    let expected = {
      length: 3,
      sunk: false,
      locations: ["", "", ""],
      hits: ["", "", ""]
    }
    expect(ship).toEqual(expected)
  })
})

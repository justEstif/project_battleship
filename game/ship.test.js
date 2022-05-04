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
  it("setLocation test", () => {
    // check if the new locations are horizontal or vertical
    // check if the new location isn't one of the ships
    // j
    let ship = ShipFactory.makeShip()
    let newLocation = ["01, 11, 21"]
    ship.setLocation(newLocation)
    expect(ship.locations).toEqual(newLocation)
  })
  it('hit test', () => {
    let ship = ShipFactory.makeShip()
    let newLocation = ["01", "11", "21"]
    ship.setLocation(newLocation)
    ship.hit("11")
    expect(ship.hits).toEqual(["", "hit", ""])
  })
  it("isShipSunk test", () => {

    let ship = ShipFactory.makeShip()
    let newLocation = ["01", "11", "21"]
    ship.setLocation(newLocation)
    ship.hit("21")
    ship.hit("11")
    ship.hit("01")
    expect(ship.sunk).toBe(true)
  })
  it("isShipSunk test", () => {
    let ship = ShipFactory.makeShip()
    let newLocation = ["01", "11", "21"]
    ship.setLocation(newLocation)
    ship.hit("22")
    ship.hit("11")
    ship.hit("01")
    expect(ship.sunk).toBe(false)
  })

})

// TODO setLocation logic should be in the Gameboard so that it is compared with the other Ships the the player has

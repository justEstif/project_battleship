const { ShipFactory } = require("./ship.js")
const { FleetFactory } = require("./fleet.js");
import { it, expect, describe } from "@jest/globals";
describe("testing the FleetFactory", () => {
  it("testing the inital properties", () => {
    let fleet = FleetFactory.makeFleet();
    let ship1 = ShipFactory.makeShip()
    let ship2 = ShipFactory.makeShip()
    let ship3 = ShipFactory.makeShip()
    let expected = {
      numShips: 3,
      shipsSunk: 0,
      ships: [ship1, ship2, ship3]
    }
    expect(fleet).toEqual(expected)
  })
  it("testing the randomizeLocation", () => {

    let fleet = FleetFactory.makeFleet();
    fleet.randomize();
    let ship1 = ShipFactory.makeShip()
    expect(fleet.ships[0]).not.toEqual(ship1)
  })
})

const { ShipFactory } = require("./ship.js");
import { it, expect, describe, afterEach } from "@jest/globals";

describe("checking the ship", () => {
  it("inital properties of ship", () => {
    let ship = ShipFactory.makeShip()
    let expected = {
      length: 3,
      sunk: false,
      locations: [
        { location: {}, hit: false },
        { location: {}, hit: false },
        { location: {}, hit: false },
      ],
    }
    expect(ship).toEqual(expected)
  })
  it("setLocation test", () => {
    let ship = ShipFactory.makeShip()
    let newLocations = [
      { location: { x: 0, y: 0 }, hit: false },
      { location: { x: 0, y: 1 }, hit: false },
      { location: { x: 0, y: 2 }, hit: false },
    ]
    ship.setLocation(newLocations)
    expect(ship.locations).toEqual(newLocations)
  })
  it("hit() test", () => {
    let ship = ShipFactory.makeShip()
    let newLocations = [
      { location: { x: 0, y: 0 }, hit: false },
      { location: { x: 0, y: 1 }, hit: false },
      { location: { x: 0, y: 2 }, hit: false },
    ]
    let expected = [
      { location: { x: 0, y: 0 }, hit: true },
      { location: { x: 0, y: 1 }, hit: false },
      { location: { x: 0, y: 2 }, hit: false },
    ]
    ship.setLocation(newLocations)
    ship.hit({ x: 0, y: 0 })
    expect(ship.locations).toEqual(expected)
  })
  it("isShipSunk test", () => {

    let ship = ShipFactory.makeShip()
    let newLocations = [
      { location: { x: 0, y: 0 }, hit: false },
      { location: { x: 0, y: 1 }, hit: false },
      { location: { x: 0, y: 2 }, hit: false },
    ]
    ship.setLocation(newLocations)
    ship.hit({ x: 0, y: 0 })
    ship.hit({ x: 0, y: 1 })
    ship.hit({ x: 0, y: 2 })
    expect(ship.sunk).toBe(true)
  })
  it("isShipSunk test", () => {
    let ship = ShipFactory.makeShip()
    let newLocations = [
      { location: { x: 0, y: 0 }, hit: false },
      { location: { x: 0, y: 1 }, hit: false },
      { location: { x: 0, y: 2 }, hit: false },
    ]
    ship.setLocation(newLocations)
    ship.hit({ y: 0, x: 0 })
    ship.hit({ y: 0, x: 1 })
    ship.hit({ y: 0, x: 2 })
    expect(ship.sunk).toBe(false)
  })
})

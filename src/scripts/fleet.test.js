const { FleetFactory } = require('./fleet.js')
import { it, expect, describe, afterEach } from '@jest/globals'

describe("testing the ShipFactory", () => {
  let fleetObj = FleetFactory.makeFleet()
  afterEach(() => {
    fleetObj = FleetFactory.makeFleet()
  })
  it("checking if the Fleet object is created with all the inital properties", () => {
    let expectedObj = {
      sunk: false,
      ships: []
    }
    expect(fleetObj).toEqual(expectedObj)
  })
  it.todo("make sure the fleet has all the properties")
  it.todo("make sure that fleet has a createFleet method that creates 5 ships")
})

// the fleet would import the ship class
// the ship class would be hidden
// the game is dependent on the player's fleet not being sunk
// there needs to be some function to randomly assign the
// just do the smallest step at a time
//
// what is the smallest step I could take right now?
// // I could check that the fleet is created with two empty properties

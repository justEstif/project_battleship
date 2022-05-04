const { GameboardFactory } = require("./gameboard.js");
const { ShipFactory } = require("./ship.js");
import { it, expect, describe, afterEach } from "@jest/globals";

describe("checking the ship", () => {
  it("inital properties", () => {
    let gameboard = GameboardFactory.makeGameboard()
    let ship = ShipFactory.makeShip()
    let expected = {
      miss: [],
      shipAmount: 3,
      shipSunk: 0,
      ships: [ship, ship, ship]
    }
    expect(gameboard).toEqual(expected)
  })
  it("setLocation", () => {
    let gameboard = GameboardFactory.makeGameboard()
    let newLocations = ["04", "14", "24"]
    let ship = ShipFactory.makeShip()
    ship.locations = newLocations
    gameboard.setLocation(0, newLocations)

    expect(gameboard.ships[0]).toEqual(ship)
  })
  it("receiveAttack", () => {
    let gameboard = GameboardFactory.makeGameboard()
    let newLocations = ["04", "14", "24"]
    gameboard.setLocation(0, newLocations)
    gameboard.receiveAttack("04")

    expect(gameboard.ships[0].hits).toEqual(["hit", "", ""])
  })
  it("receiveAttack", () => {
    let gameboard = GameboardFactory.makeGameboard()
    let newLocations = ["04", "14", "24"]
    gameboard.setLocation(0, newLocations)
    gameboard.receiveAttack("14")
    expect(gameboard.ships[0].hits).toEqual(["", "hit", ""])
  })
  it("receiveAttack missed", () => {
    let gameboard = GameboardFactory.makeGameboard()
    let newLocations = ["04", "14", "24"]
    gameboard.setLocation(0, newLocations)
    gameboard.receiveAttack("23")
    expect(gameboard.miss).toEqual(['23'])
  })
  it('checkShips', () => {
    let gameboard = GameboardFactory.makeGameboard()
    gameboard.ships[0].sunk = true
    gameboard.ships[1].sunk = true
    gameboard.ships[2].sunk = true

    expect(gameboard.checkShips()).toBe(true)
  })

  // checkGameStatus will check if the game is over, if it is still my turn or if I pass turn

})

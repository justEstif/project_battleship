const { GameboardFactory } = require("./gameboard.js");
const { ShipFactory } = require("./ship.js");
import { it, expect, describe } from "@jest/globals";

describe("checking the gameboar", () => {
  it("GameboardFactory.makeGameboard() -> createShips() logic", () => {
    let gameboard = GameboardFactory.makeGameboard();
    let ship = ShipFactory.makeShip();
    let expected = {
      miss: [],
      boardSize: 7,
      shipAmount: 3,
      shipsSunk: 0,
      ships: [ship, ship, ship],
    };
    expect(gameboard).toEqual(expected);
  });

  it("setLocation()", () => {
    let gameboard = GameboardFactory.makeGameboard();
    let ship = ShipFactory.makeShip();
    let newLocations = [
      { location: { x: 0, y: 0 }, hit: false },
      { location: { x: 0, y: 1 }, hit: false },
      { location: { x: 0, y: 2 }, hit: false },
    ];
    ship.setLocation(newLocations);
    gameboard.setLocation(0, newLocations);
    expect(gameboard.ships[0]).toEqual(ship);
  });

  it("setLocation() fail not the right length", () => {
    let gameboard = GameboardFactory.makeGameboard();
    let ship = ShipFactory.makeShip();
    let newLocations = [
      { location: { x: 0, y: 0 }, hit: false },
      { location: { x: 0, y: 1 }, hit: false },
      { location: { x: 0, y: 1 }, hit: false },
      { location: { x: 0, y: 1 }, hit: false },
    ];
    ship.setLocation(newLocations);
    gameboard.setLocation(0, newLocations);
    expect(gameboard.ships[0]).not.toEqual(ship);
  });
  it("setLocation() fail not the right length", () => {
    let gameboard = GameboardFactory.makeGameboard();
    let ship = ShipFactory.makeShip();
    let newLocations = [
      { location: { x: 0, y: 0 }, hit: false },
      { location: { x: 14, y: 1 }, hit: false },
      { location: { x: 0, y: 1 }, hit: false },
    ];
    ship.setLocation(newLocations);
    gameboard.setLocation(0, newLocations);
    expect(gameboard.ships[0]).not.toEqual(ship);
  });
  it("setLocation() fail not horizontal or vertical", () => {
    let gameboard = GameboardFactory.makeGameboard();
    let ship = ShipFactory.makeShip();
    let newLocations = [
      { location: { x: 0, y: 0 }, hit: false },
      { location: { x: 2, y: 1 }, hit: false },
    ];
    ship.setLocation(newLocations);
    gameboard.setLocation(0, newLocations);
    expect(gameboard.ships[0]).not.toEqual(ship);
  });
  it("setLocation() fail already in use", () => {
    let gameboard = GameboardFactory.makeGameboard();
    let ship = ShipFactory.makeShip();
    let newLocations = [
      { location: { x: 0, y: 0 }, hit: false },
      { location: { x: 0, y: 1 }, hit: false },
      { location: { x: 0, y: 2 }, hit: false },
    ];
    ship.setLocation(newLocations);
    gameboard.setLocation(0, newLocations);
    gameboard.setLocation(1, newLocations);
    expect(gameboard.ships[1]).not.toEqual(ship);
  });
  it("receiveAttack", () => {
    let gameboard = GameboardFactory.makeGameboard();
    let ship = ShipFactory.makeShip();

    let newLocations = [
      { location: { x: 0, y: 0 }, hit: false },
      { location: { x: 0, y: 1 }, hit: false },
      { location: { x: 0, y: 2 }, hit: false },
    ];
    ship.setLocation(newLocations);
    gameboard.setLocation(0, newLocations);

    ship.hit({ x: 0, y: 0 })
    gameboard.receiveAttack({ x: 0, y: 0 })
    expect(gameboard.ships[0].locations).toEqual(ship.locations)

  });

  it("receiveAttack miss", () => {
    let gameboard = GameboardFactory.makeGameboard();
    let ship = ShipFactory.makeShip();

    let newLocations = [
      { location: { x: 0, y: 4 }, hit: false },
      { location: { x: 1, y: 4 }, hit: false },
      { location: { x: 2, y: 4 }, hit: false },
    ];
    ship.setLocation(newLocations);
    gameboard.setLocation(0, newLocations);

    ship.hit({ x: 1, y: 3 })
    gameboard.receiveAttack({ x: 1, y: 3 })
    expect(gameboard.ships[0].locations).toEqual(ship.locations)
  });

  it("receiveAttack miss", () => {
    let gameboard = GameboardFactory.makeGameboard();
    let ship = ShipFactory.makeShip();

    let newLocations = [
      { location: { x: 0, y: 4 }, hit: false },
      { location: { x: 1, y: 4 }, hit: false },
      { location: { x: 2, y: 4 }, hit: false },
    ];
    ship.setLocation(newLocations);
    gameboard.setLocation(0, newLocations);

    ship.hit({ x: 1, y: 3 })
    gameboard.receiveAttack({ x: 1, y: 3 })
    expect(gameboard.miss[0]).toEqual({ x: 1, y: 3 })
  });
  // TODO setLocation will already used locations
  // TODO setLocation will not horizontal or vertical location
  // TODO setLocation with too long or too short location
  // TODO isFleetDown when true and false
  // checkGameStatus will check if the game is over, if it is still my turn or if I pass turn
});

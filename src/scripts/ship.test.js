const { Ship } = require("./ship.js");
import { it, expect, describe, afterEach } from "@jest/globals";

describe("testing the ShipFactory", () => {

  it("checking the strike method of Ship", () => {
    let ship = new Ship(2)
    ship.strike(1)
    let expected = [1]
    expect(ship.striked).toEqual(expected)
  })

  it("checking if the strike method of Ship works for valid values", () => {
    let ship = new Ship(4);
    ship.strike(1);
    let expectedObj = {
      length: 4,
      sunk: false,
      coordinates: [],
      striked: [1],
    };
    expect(ship).toEqual(expectedObj);
  });
  it("checking if the strike method of Ship works for valid values", () => {
    let ship = new Ship(5);
    ship.strike(6);
    let expectedObj = {
      length: 5,
      sunk: false,
      coordinates: [],
      striked: [],
    };
    expect(ship).toEqual(expectedObj);
  });
  it("checking if the isSunk method of Ship works for all hit", () => {
    let ship = new Ship(3);
    ship.strike(1);
    ship.strike(2);
    ship.strike(3);
    expect(ship.isSunk()).toEqual(true);
  });
  it("checking if the isSunk method of Ship works for only some hit", () => {
    let ship = new Ship(5);
    ship.strike(1);
    ship.strike(2);
    ship.strike(3);
    expect(ship.isSunk()).toEqual(false);
  });
});

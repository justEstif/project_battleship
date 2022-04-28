const { FleetFactory, ShipFactory } = require("./ship_fleet.js");
import { it, expect, describe, afterEach } from "@jest/globals";
describe("testing the FleetFactory", () => {
  let fleetObj = FleetFactory.makeFleet();
  afterEach(() => {
    fleetObj = FleetFactory.makeFleet();
  });
  it("checking if the Fleet object is created with all the inital properties", () => {
    let expectedObj = {
      sunk: false,
      ships: [],
    };
    expect(fleetObj).toEqual(expectedObj);
  });
  it("check if addShip in Fleet works", () => {
    let ship = ShipFactory.makeShip(4);
    let expectedObj = {
      sunk: false,
      ships: [
        {
          length: 4,
          sunk: false,
          squaresOfShip: [],
        },
      ],
    };
    fleetObj.addShip(ship);
    expect(fleetObj).toEqual(expectedObj);
  });
  it("checking isFleetSunk work when ship is sunk", () => {
    let ship = ShipFactory.makeShip(4);
    ship.sunk = true;
    fleetObj.addShip(ship);
    expect(fleetObj.isFleetSunk()).toBe(true);
  });
  it("checking isFleetSunk work when ship isn't sunk", () => {
    let ship = ShipFactory.makeShip(4);
    fleetObj.addShip(ship);
    expect(fleetObj.isFleetSunk()).toBe(true);
  });
  it.todo("make sure that fleet has a createFleet method that creates 5 ships");
});

// TODO: test isFleetSunk()
// TODO: test createFleet()
describe("testing the ShipFactory", () => {
  let parameter = 5;
  let shipObj = ShipFactory.makeShip(parameter);

  afterEach(() => {
    parameter = 5;
    shipObj = ShipFactory.makeShip(parameter);
  });
  it("checking if the Ship object has all properties", () => {
    let expectedObj = {
      length: parameter,
      sunk: false,
      squaresOfShip: [],
    };
    expect(shipObj).toEqual(expectedObj);
  });
  it("testing addNewSquares with correct values", () => {
    let newSquares = [
      { hit: false },
      { hit: false },
      { hit: false },
      { hit: false },
      { hit: false },
    ];
    shipObj.addNewSquares(newSquares);
    expect(shipObj.squaresOfShip).toEqual(newSquares);
  });
  it("testing isShipSunk", () => {
    shipObj.squaresOfShip = [
      { hit: true },
      { hit: true },
      { hit: true },
      { hit: true },
      { hit: true },
    ];

    shipObj.isShipSunk();
    expect(shipObj.isShipSunk()).toBe(true);
  });
  it("testing isShipSunk, when not sunk", () => {
    shipObj.squaresOfShip = [
      { hit: false },
      { hit: true },
      { hit: true },
      { hit: true },
      { hit: true },
    ];
    shipObj.isShipSunk();
    expect(shipObj.isShipSunk()).toBe(false);
  });
});

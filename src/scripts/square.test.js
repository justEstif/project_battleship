const { SquareFactory } = require("./square.js");
import { it, expect, describe, afterEach } from "@jest/globals";

describe("testing the SquareFactory", () => {
  let squareObj = SquareFactory.makeSquare();

  afterEach(() => {
    squareObj = SquareFactory.makeSquare();
  });

  it("checking if the square object has all the properties", () => {
    let expectedObj = {
      coordinate: [],
      hit: false,
      ship: false,
    };
    expect(squareObj).toEqual(expectedObj);
  });
});

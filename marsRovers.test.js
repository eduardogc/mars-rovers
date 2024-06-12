const marsRoversModule = require("./marsRovers");
const getPosition = marsRoversModule.getPosition;
const getPositions = marsRoversModule.getPositions;

describe("Mars rovers", () => {
  describe("getPosition function", () => {
    test("Final position should be 1 3 N", () => {
      expect(getPosition("1 2 N", "LMLMLMLMM")).toBe("1 3 N");
    });
  
    test("Final position should be 2 3 S", () => {
      expect(getPosition("3 3 E", "MRRMMRMRRM")).toBe("2 3 S");
    });
  })

  describe("getPositions for multiple mars rovers support", () => {
    test("Final position should be ['1 3 N', '2 3 S']", () => {
      expect(getPositions(["1 2 N", "3 3 E"], ["LMLMLMLMM", "MRRMMRMRRM"])).toEqual(['1 3 N', '2 3 S']);
    });
  })
  
});

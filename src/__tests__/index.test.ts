import { getAreas, getSubzones } from "../";
import { Region } from "../interfaces";

describe("Getting planning areas", () => {
  it("should return all planning areas without region filter", () => {
    expect(Object.keys(getAreas()).length).toBe(55);
    expect(Object.keys(getAreas([])).length).toBe(55);
  });

  it("should return all planning areas in the north", () => {
    expect(Object.keys(getAreas([Region.NORTH])).length).toBe(8);
  });

  it("should return all planning areas in the northeast", () => {
    expect(Object.keys(getAreas([Region.NORTHEAST])).length).toBe(7);
  });

  it("should return all planning areas in the east", () => {
    expect(Object.keys(getAreas([Region.EAST])).length).toBe(6);
  });

  it("should return all planning areas in the west", () => {
    expect(Object.keys(getAreas([Region.WEST])).length).toBe(12);
  });

  it("should return all planning areas in the central", () => {
    expect(Object.keys(getAreas([Region.CENTRAL])).length).toBe(22);
  });

  it("should return planning areas in the specified regions", () => {
    expect(
      Object.keys(
        getAreas([
          Region.NORTH,
          Region.NORTHEAST,
          Region.EAST,
          Region.WEST,
          Region.CENTRAL,
        ]),
      ).length,
    ).toBe(55);
  });
});

describe("Getting subzones", () => {
  it("should return all subzones", () => {
    const allSubzones = getSubzones();
    expect(Object.keys(allSubzones).length).toBe(169);
  });
});

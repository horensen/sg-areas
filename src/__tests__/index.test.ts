import { getAreas, getSubzones, getNearest } from "../";
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
    expect(Object.keys(allSubzones).length).toBe(318);
  });
});

describe("Getting nearest locations", () => {
  const MARINA_BAY_SANDS = { latitude: 1.2836491, longitude: 103.8575854 };
  const BOTANIC_GARDENS = { latitude: 1.3446015, longitude: 103.8009809 };

  it("should return the closest area and subzone", () => {
    expect(getNearest(MARINA_BAY_SANDS)).toStrictEqual({
      areas: {
        DTC: {
          name: { en: "Downtown Core", zh: "市中心" },
          coordinates: { latitude: 1.28506, longitude: 103.8543 },
          region: "C",
          distance: 398,
        },
      },
      subzones: {
        DTC_BAY: {
          name: { en: "Bayfront" },
          coordinates: { latitude: 1.28333472525, longitude: 103.858533762 },
          area: "DTC",
          distance: 111,
        },
      },
    });
  });

  it("should return N closest areas and subzones", () => {
    expect(getNearest(BOTANIC_GARDENS, { closest: 3 })).toStrictEqual({
      areas: {
        BKT: {
          name: { en: "Bukit Timah", zh: "武吉知马" },
          coordinates: { latitude: 1.32999, longitude: 103.7907 },
          region: "C",
          distance: 1989,
        },
        CWC: {
          name: { en: "Central Water Catchment", zh: "中央集水区" },
          coordinates: { latitude: 1.37666, longitude: 103.80119 },
          region: "N",
          distance: 3569,
        },
        BKP: {
          name: { en: "Bukit Panjang", zh: "武吉班让" },
          coordinates: { latitude: 1.36682, longitude: 103.773 },
          region: "W",
          distance: 3977,
        },
      },
      subzones: {
        BKT_SWC: {
          name: { en: "Swiss Club" },
          coordinates: { latitude: 1.34063686622, longitude: 103.79231074 },
          area: "BKT",
          distance: 1061,
        },
        BKT_HIL: {
          name: { en: "Hillcrest" },
          coordinates: { latitude: 1.33315732448, longitude: 103.808229456 },
          area: "BKT",
          distance: 1508,
        },
        undefined: {
          name: { en: "Bukit Timah", zh: "武吉知马" },
          coordinates: { latitude: 1.32999, longitude: 103.7907 },
          region: "C",
          distance: 1989,
        },
      },
    });
  })
});

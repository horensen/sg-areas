import { Area } from "../interfaces";

describe("List of planning areas", () => {
  it("should have no duplicates", () => {
    const arr = Object.values(Area);
    const hasUnique = new Set(arr).size === arr.length;
    expect(hasUnique).toBe(true);
  })
})

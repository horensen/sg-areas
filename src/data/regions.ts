import { Region, RegionDetails } from "../interfaces";

const regions: { [id in Region]: RegionDetails } = {
  [Region.CENTRAL]: { name: { en: "Central", zh: "中央" } },
  [Region.EAST]: { name: { en: "East", zh: "东方" } },
  [Region.NORTH]: { name: { en: "North", zh: "北方" } },
  [Region.NORTHEAST]: { name: { en: "Northeast", zh: "东北方" } },
  [Region.WEST]: { name: { en: "West", zh: "西方" } },
};

export default regions;

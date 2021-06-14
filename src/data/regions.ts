import { Region, RegionDetails } from "../interfaces";

const regions: { [id in Region]: RegionDetails } = {
  [Region.CENTRAL]: {
    name: {
      en: "Central",
    },
  },
  [Region.EAST]: {
    name: {
      en: "East",
    },
  },
  [Region.NORTH]: {
    name: {
      en: "North",
    },
  },
  [Region.NORTHEAST]: {
    name: {
      en: "Northeast",
    },
  },
  [Region.WEST]: {
    name: {
      en: "West",
    },
  },
};

export default regions;

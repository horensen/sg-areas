import { Region, Area, AreaDetails } from "../interfaces";

const areas: { [id in Area]: AreaDetails } = {
  [Area.ANG_MO_KIO]: {
    name: { en: "Ang Mo Kio", zh: "宏茂桥" },
    coordinates: { latitude: 1.38009, longitude: 103.8421 },
    region: Region.NORTHEAST,
  },
  [Area.BEDOK]: {
    name: { en: "Bedok", zh: "勿洛" },
    coordinates: { latitude: 1.32366, longitude: 103.92822 },
    region: Region.EAST,
  },
  [Area.BISHAN]: {
    name: { en: "Bishan", zh: "碧山" },
    coordinates: { latitude: 1.35382, longitude: 103.84327 },
    region: Region.CENTRAL,
  },
  [Area.BOON_LAY]: {
    name: { en: "Boon Lay", zh: "文礼" },
    coordinates: { latitude: 1.31479, longitude: 103.70222 },
    region: Region.WEST,
  },
  [Area.BUKIT_BATOK]: {
    name: { en: "Bukit Batok", zh: "武吉巴督" },
    coordinates: { latitude: 1.35566, longitude: 103.75474 },
    region: Region.WEST,
  },
};

export default areas;

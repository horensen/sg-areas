interface LocalisedName {
  en: string;
  zh?: string;
  ms?: string;
  ta?: string;
}

interface Coordinates {
  latitude: number;
  longitude: number;
}

// Administrative level 1
export enum Region {
  CENTRAL = "C",
  EAST = "E",
  NORTH = "N",
  NORTHEAST = "NE",
  WEST = "W",
}

// Administrative level 2
export enum Area {
  ANG_MO_KIO = "AMK",
  BEDOK = "BDK",
  BISHAN = "BSH",
  BOON_LAY = "BNL",
  BUKIT_BATOK = "BBT"
}

// Administrative level 3
export enum Subzone {
  AMK_TOWN_CENTRE = "AMK_TC",
  AMK_CHENG_SAN = "AMK_CS",
}

export interface LocationDetails {
  name: LocalisedName;
  coordinates?: Coordinates;
}

export interface RegionDetails extends LocationDetails {
}

export interface AreaDetails extends LocationDetails {
  region: Region
}

export interface SubzoneDetails extends LocationDetails {
  area: Area;
}

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
  BUKIT_BATOK = "BBT",
  BUKIT_MERAH = "BMR",
  BUKIT_PANJANG = "BKP",
  BUKIT_TIMAH = "BKT",
  CENTRAL_WATER_CATCHMENT = "CWC",
  CHANGI = "CHG",
  CHANGI_BAY = "CGB",
  CHOA_CHU_KANG = "CCK",
  CLEMENTI = "CLE",
  DOWNTOWN_CORE = "DTC",
  GEYLANG = "GLG",
  HOUGANG = "HGN",
  JURONG_EAST = "JUR",
  JURONG_WEST = "JUW",
  KALLANG = "KAL",
  LIM_CHU_KANG = "LCK",
  MANDAI = "MND",
  MARINA_EAST = "MAE",
  MARINA_SOUTH = "MAS",
  MARINE_PARADE = "MEP",
  MUSEUM = "MSM",
  NEWTON = "NEW",
  NORTHEASTERN_ISLANDS = "NEI",
  NOVENA = "NOV",
  ORCHARD = "ORC",
  OUTRAM = "OTR",
  PASIR_RIS = "PSR",
  PAYA_LEBAR = "PYL",
  PIONEER = "PNR",
  PUNGGOL = "PGL",
  QUEENSTOWN = "QUE",
  RIVER_VALLEY = "RVV",
  ROCHOR = "RCR",
  SELETAR = "SLT",
  SEMBAWANG = "SBW",
  SENGKANG = "SKG",
  SERANGOON = "SER",
  SIMPANG = "SMP",
  SINGAPORE_RIVER = "SGR",
  SOUTHERN_ISLANDS = "STI",
  STRAITS_VIEW = "STV",
  SUNGEI_KADUT = "SKD",
  TAMPINES = "TAM",
  TANGLIN = "TGL",
  TENGAH = "TGH",
  TOA_PAYOH = "TAP",
  TUAS = "TUA",
  WESTERN_ISLANDS = "WIL",
  WESTERN_WATER_CATCHMENT = "WWC",
  WOODLANDS = "WDL",
  YISHUN = "YIS",
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

export interface RegionDetails extends LocationDetails {}

export interface AreaDetails extends LocationDetails {
  region: Region;
}

export interface SubzoneDetails extends LocationDetails {
  area: Area;
}

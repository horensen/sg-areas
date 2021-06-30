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
  AMK_TOWN_CENTRE = "AMK_TWC",
  AMK_CHENG_SAN = "AMK_CHS",
  AMK_CHONG_BOON = "AMK_CHB",
  AMK_KEBUN_BAHRU = "AMK_KBB",
  AMK_SEMBAWANG_HILLS = "AMK_SBH",
  AMK_SHANGRI_LA = "AMK_SRL",
  AMK_TAGORE = "AMK_TAG",
  AMK_TOWNSVILLE = "AMK_TWV",
  AMK_YIO_CHU_KANG = "AMK_YCK",
  AMK_YIO_CHU_KANG_EAST = "AMK_YKE",
  AMK_YIO_CHU_KANG_NORTH = "AMK_YKN",
  AMK_YIO_CHU_KANG_WEST = "AMK_YKW",
  BBT_BRICKWORKS = "BBT_BRW",
  BBT_BUKIT_BATOK_CENTRAL = "BBT_BBC",
  BBT_BUKIT_BATOK_EAST = "BBT_BBE",
  BBT_BUKIT_BATOK_SOUTH = "BBT_BBS",
  BBT_BUKIT_BATOK_WEST = "BBT_BBW",
  BBT_GOMBAK = "BBT_GOB",
  BBT_GUILIN = "BBT_GUL",
  BBT_HILLVIEW = "BBT_HIV",
  BBT_HONG_KAH_NORTH = "BBT_HKN",
  BDK_BAYSHORE = "BDK_BAY",
  BDK_BEDOK_NORTH = "BDK_BEN",
  BDK_BEDOK_RESERVOIR = "BDK_BER",
  BDK_BEDOK_SOUTH = "BDK_BES",
  BDK_FRANKEL = "BDK_FRA",
  BDK_KAKI_BUKIT = "BDK_KAB",
  BDK_KEMBANGAN = "BDK_KEM",
  BDK_SIGLAP = "BDK_SIG",
  BMR_ALEXANDRA_HILL = "BMR_ALH",
  BMR_ALEXANDRA_NORTH = "BMR_ALN",
  BMR_BUKIT_HO_SWEE = "BMR_BHS",
  BMR_BUKIT_MERAH = "BMR_BUM",
  BMR_CITY_TERMINALS = "BMR_CIT",
  BMR_DEPOT_ROAD = "BMR_DER",
  BMR_EVERTON_PARK = "BMR_EVP",
  BMR_HENDERSON_HILL = "BMR_HEH",
  BMR_KAMPONG_TIONG_BAHRU = "BMR_KTB",
  BMR_MARITIME_SQUARE = "BMR_MAS",
  BMR_REDHILL = "BMR_RED",
  BMR_SINGAPORE_GENERAL_HOSPITAL = "BMR_SGH",
  BMR_TELOK_BLANGAH_DRIVE = "BMR_TBD",
  BMR_TELOK_BLANGAH_RISE = "BMR_TBR",
  BMR_TELOK_BLANGAH_WAY = "BMR_TBW",
  BMR_TIONG_BAHRU = "BMR_TIB",
  BMR_TIONG_BAHRU_STATION = "BMR_TBS",
  BSH_BISHAN_EAST = "BSH_BIE",
  BSH_MARYMOUNT = "BSH_MAR",
  BSH_UPPER_THOMSON = "BSH_UPT",
  CCK_CHOA_CHU_KANG_CENTRAL = "CCK_CCC",
  CCK_CHOA_CHU_KANG_NORTH = "CCK_CCN",
  CCK_KEAT_HONG = "CCK_KEH",
  CCK_PENG_SIANG = "CCK_PES",
  CCK_TECK_WHYE = "CCK_TEW",
  CCK_YEW_TEE = "CCK_YET",
  CGB_CHANGI_BAY = "CGB_CHB",
  CHG_CHANGI_AIRPORT = "CHG_CHA",
  CHG_CHANGI_POINT = "CHG_CHP",
  CHG_CHANGI_WEST = "CHG_CHW",
  CLE_CLEMENTI_CENTRAL = "CLE_CLC",
  CLE_CLEMENTI_NORTH = "CLE_CLN",
  CLE_CLEMENTI_WEST = "CLE_CWE",
  CLE_CLEMENTI_WOODS = "CLE_CWO",
  CLE_FABER = "CLE_FAB",
  CLE_PANDAN = "CLE_PAN",
  CLE_SUNSET_WAY = "CLE_SUW",
  CLE_TOH_TUCK = "CLE_TOT",
  CLE_WEST_COAST = "CLE_WEC",
  CWC_CENTRAL_WATER_CATCHMENT = "CWC_CWC",
  JUR_INTERNATIONAL_BUSINESS_PARK = "JUR_IBP",
  JUR_JURONG_GATEWAY = "JUR_JUG",
  JUR_JURONG_PORT = "JUR_JUP",
  JUR_JURONG_RIVER = "JUR_JUR",
  JUR_LAKESIDE = "JUR_LAK",
  JUR_PENJURU_CRESCENT = "JUR_PEC",
  JUR_TEBAN_GARDENS = "JUR_TEG",
  JUR_TOH_GUAN = "JUR_TOG",
  JUR_YUHUA_EAST = "JUR_YUE",
  JUR_YUHUA_WEST = "JUR_YUW",
  LCK_LIM_CHU_KANG = "LCK_LCK",
  MSM_BRAS_BASAH = "MSM_BRB",
  MSM_DHOBY_GHAUT = "MSM_DHG",
  MSM_FORT_CANNING = "MSM_FOC",
  NEW_CAIRNHILL = "NEW_CAI",
  NEW_GOODWOOD_PARK = "NEW_GOP",
  NEW_ISTANA_NEGARA = "NEW_ISN",
  NEW_MONKS_HILL = "NEW_MOH",
  NEW_NEWTON_CIRCUS = "NEW_NEC",
  NEW_ORANGE_GROVE = "NEW_ORG",
  PGL_CONEY_ISLAND = "PGL_COI",
  PGL_MATILDA = "PGL_MAT",
  PGL_NORTHSORE = "PGL_NOR",
  PGL_PUNGGOL_CANAL = "PGL_PUC",
  PGL_PUNGGOL_FIELD = "PGL_PUF",
  PGL_PUNGGOL_TOWN_CENTRE = "PGL_PTC",
  PGL_WATERWAY_EAST = "PGL_WAE",
  PSR_FLORA_DRIVE = "PSR_FLD",
  PSR_LOYANG_EAST = "PSR_LOE",
  PSR_LOYANG_WEST = "PSR_LOW",
  PSR_PASIR_RIS_CENTRAL = "PSR_PRC",
  PSR_PASIR_RIS_DRIVE = "PSR_PRD",
  PSR_PASIR_RIS_PARK = "PSR_PRP",
  PSR_PASIR_RIS_WAFER_FAB_PARK = "PSR_WFP",
  PSR_PASIR_RIS_WEST = "PSR_PRW",
  SGR_BOAT_QUAY = "SGR_BOQ",
  SGR_CLARKE_QUAY = "SGR_CLQ",
  SGR_ROBERTSON_QUAY = "SGR_ROQ",
  SLT_PULAR_PUNGGOL_BARAT = "SLT_PPB",
  SLT_PULAU_PUNGGOL_TIMOR = "SLT_PPT",
  SLT_SELETAR = "SLT_SEL",
  SLT_SELETAR_AEROSPACE_PARK = "SLT_SAP",
  STV_STRAITS_VIEW = "STV_STV",
  TAM_SIMEI = "TAM_SIM",
  TAM_TAMPINES_EAST = "TAM_TAE",
  TAM_TAMPINES_NORTH = "TAM_TAN",
  TAM_TAMPINES_WEST = "TAM_TAW",
  TAM_XILIN = "TAM_XIL",
  TUA_TENGEH = "TUA_TEN",
  TUA_TUAS_BAY = "TUA_TUB",
  TUA_TUAS_NORTH = "TUA_TUN",
  TUA_TUAS_PROMENADE = "TUA_TUP",
  TUA_TUAS_VIEW = "TUA_TUV",
  TUA_TUAS_VIEW_EXTENSION = "TUA_TVE",
  WDL_GREENWOOD_PARK = "WDL_GRP",
  WDL_MIDVIEW = "WDL_MID",
  WDL_NORTH_COAST = "WDL_NOC",
  WDL_SENOKO_WEST = "WDL_SEW",
  WDL_WOODGROVE = "WDL_WOO",
  WDL_WOODLANDS_EAST = "WDL_WOE",
  WDL_WOODLANDS_REGIONAL_CENTRE = "WDL_WRC",
  WDL_WOODLANDS_SOUTH = "WDL_WOS",
  WDL_WOODLANDS_WEST = "WDL_WOW",
  WWC_WESTERN_WATER_CATCHMENT = "WWC_WWC",
  YIS_KHATIB = "YIS_KHA",
  YIS_LOWER_SELETAR = "YIS_LOS",
  YIS_NEE_SOON = "YIS_NES",
  YIS_NORTHLAND = "YIS_NOR",
  YIS_SPRINGLEAF = "YIS_SPR",
  YIS_YISHUN_CENTRAL = "YIS_YIC",
  YIS_YISHUN_EAST = "YIS_YIE",
  YIS_YISHUN_SOUTH = "YIS_YIS",
  YIS_YISHUN_WEST = "YIS_YIW",
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

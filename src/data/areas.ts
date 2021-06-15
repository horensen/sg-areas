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
  [Area.BUKIT_MERAH]: {
    name: { en: "Bukit Merah", zh: "红山" },
    coordinates: { latitude: 1.27549, longitude: 103.82313 },
    region: Region.CENTRAL,
  },
  [Area.BUKIT_PANJANG]: {
    name: { en: "Bukit Panjang", zh: "武吉班让" },
    coordinates: { latitude: 1.36682, longitude: 103.773 },
    region: Region.WEST,
  },
  [Area.BUKIT_TIMAH]: {
    name: { en: "Bukit Timah", zh: "武吉知马" },
    coordinates: { latitude: 1.32999, longitude: 103.7907 },
    region: Region.CENTRAL,
  },
  [Area.CENTRAL_WATER_CATCHMENT]: {
    name: { en: "Central Water Catchment", zh: "中央集水区" },
    coordinates: { latitude: 1.37666, longitude: 103.80119 },
    region: Region.NORTH,
  },
  [Area.CHANGI]: {
    name: { en: "Changi", zh: "樟宜" },
    coordinates: { latitude: 1.35081, longitude: 103.99782 },
    region: Region.EAST,
  },
  [Area.CHANGI_BAY]: {
    name: { en: "Changi Bay", zh: "樟宜湾" },
    coordinates: { latitude: 1.32233, longitude: 104.02495 },
    region: Region.EAST,
  },
  [Area.CHOA_CHU_KANG]: {
    name: { en: "Choa Chu Kang", zh: "蔡厝港" },
    coordinates: { latitude: 1.38402, longitude: 103.74719 },
    region: Region.WEST,
  },
  [Area.CLEMENTI]: {
    name: { en: "Clementi", zh: "金文泰" },
    coordinates: { latitude: 1.3176, longitude: 103.76075 },
    region: Region.WEST,
  },
  [Area.DOWNTOWN_CORE]: {
    name: { en: "Downtown Core", zh: "市中心" },
    coordinates: { latitude: 1.28506, longitude: 103.8543 },
    region: Region.CENTRAL,
  },
  [Area.GEYLANG]: {
    name: { en: "Geylang", zh: "芽笼" },
    coordinates: { latitude: 1.3209, longitude: 103.88952 },
    region: Region.CENTRAL,
  },
  [Area.HOUGANG]: {
    name: { en: "Hougang", zh: "后港" },
    coordinates: { latitude: 1.36364, longitude: 103.8898 },
    region: Region.NORTHEAST,
  },
  [Area.JURONG_EAST]: {
    name: { en: "Jurong East", zh: "裕廊东" },
    coordinates: { latitude: 1.32389, longitude: 103.73651 },
    region: Region.WEST,
  },
  [Area.JURONG_WEST]: {
    name: { en: "Jurong West", zh: "裕廊西" },
    coordinates: { latitude: 1.34161, longitude: 103.7049 },
    region: Region.WEST,
  },
  [Area.KALLANG]: {
    name: { en: "Kallang", zh: "加冷" },
    coordinates: { latitude: 1.31034, longitude: 103.86643 },
    region: Region.CENTRAL,
  },
  [Area.LIM_CHU_KANG]: {
    name: { en: "Lim Chu Kang", zh: "林厝港" },
    coordinates: { latitude: 1.43064, longitude: 103.71929 },
    region: Region.NORTH,
  },
  [Area.MANDAI]: {
    name: { en: "Mandai", zh: "万礼" },
    coordinates: { latitude: 1.42267, longitude: 103.80607 },
    region: Region.NORTH,
  },
  [Area.MARINA_EAST]: {
    name: { en: "Marina East", zh: "滨海东" },
    coordinates: { latitude: 1.28852, longitude: 103.87235 },
    region: Region.CENTRAL,
  },
  [Area.MARINA_SOUTH]: {
    name: { en: "Marina South", zh: "滨海南" },
    coordinates: { latitude: 1.28053, longitude: 103.86563 },
    region: Region.CENTRAL,
  },
  [Area.MARINE_PARADE]: {
    name: { en: "Marine Parade", zh: "马林百列" },
    coordinates: { latitude: 1.30023, longitude: 103.89627 },
    region: Region.CENTRAL,
  },
  [Area.MUSEUM]: {
    name: { en: "Museum", zh: "博物馆" },
    coordinates: { latitude: 1.29592, longitude: 103.84671 },
    region: Region.CENTRAL,
  },
  [Area.NEWTON]: {
    name: { en: "Newton", zh: "纽顿" },
    coordinates: { latitude: 1.30866, longitude: 103.83884 },
    region: Region.CENTRAL,
  },
  [Area.NORTHEASTERN_ISLANDS]: {
    name: { en: "Northeastern Islands", zh: "东北群岛" },
    region: Region.NORTHEAST,
  },
  [Area.NOVENA]: {
    name: { en: "Novena", zh: "诺维娜" },
    coordinates: { latitude: 1.32488, longitude: 103.83588 },
    region: Region.CENTRAL,
  },
  [Area.ORCHARD]: {
    name: { en: "Orchard", zh: "乌节" },
    coordinates: { latitude: 1.30381, longitude: 103.83358 },
    region: Region.CENTRAL,
  },
  [Area.OUTRAM]: {
    name: { en: "Outram", zh: "欧南" },
    coordinates: { latitude: 1.28286, longitude: 103.84206 },
    region: Region.CENTRAL,
  },
  [Area.PASIR_RIS]: {
    name: { en: "Pasir Ris", zh: "巴西立" },
    coordinates: { latitude: 1.37632, longitude: 103.94849 },
    region: Region.EAST,
  },
  [Area.PAYA_LEBAR]: {
    name: { en: "Paya Lebar", zh: "巴耶利峇" },
    coordinates: { latitude: 1.3594, longitude: 103.91478 },
    region: Region.EAST,
  },
  [Area.PIONEER]: {
    name: { en: "Pioneer", zh: "先驱" },
    coordinates: { latitude: 1.31259, longitude: 103.67299 },
    region: Region.WEST,
  },
  [Area.PUNGGOL]: {
    name: { en: "Punggol", zh: "榜鹅" },
    coordinates: { latitude: 1.40536, longitude: 103.91004 },
    region: Region.NORTHEAST,
  },
  [Area.QUEENSTOWN]: {
    name: { en: "Queenstown", zh: "女皇镇" },
    coordinates: { latitude: 1.29347, longitude: 103.78608 },
    region: Region.CENTRAL,
  },
  [Area.RIVER_VALLEY]: {
    name: { en: "River Valley", zh: "里峇峇利" },
    coordinates: { latitude: 1.29805, longitude: 103.83397 },
    region: Region.CENTRAL,
  },
  [Area.ROCHOR]: {
    name: { en: "Rochor", zh: "梧槽" },
    coordinates: { latitude: 1.30426, longitude: 103.85326 },
    region: Region.CENTRAL,
  },
  [Area.SELETAR]: {
    name: { en: "Seletar", zh: "实里达" },
    coordinates: { latitude: 1.41434, longitude: 103.8771 },
    region: Region.NORTHEAST,
  },
  [Area.SEMBAWANG]: {
    name: { en: "Sembawang", zh: "三巴旺" },
    coordinates: { latitude: 1.45575, longitude: 103.81883 },
    region: Region.NORTH,
  },
  [Area.SENGKANG]: {
    name: { en: "Sengkang", zh: "盛港" },
    coordinates: { latitude: 1.39204, longitude: 103.8877 },
    region: Region.NORTHEAST,
  },
  [Area.SERANGOON]: {
    name: { en: "Serangoon", zh: "实龙岗" },
    coordinates: { latitude: 1.3652, longitude: 103.86782 },
    region: Region.NORTHEAST,
  },
  [Area.SIMPANG]: {
    name: { en: "Simpang", zh: "新邦" },
    coordinates: { latitude: 1.44332, longitude: 103.85197 },
    region: Region.NORTH,
  },
  [Area.SINGAPORE_RIVER]: {
    name: { en: "Singapore River", zh: "新加坡河" },
    coordinates: { latitude: 1.29011, longitude: 103.84121 },
    region: Region.CENTRAL,
  },
  [Area.SOUTHERN_ISLANDS]: {
    name: { en: "Southern Islands", zh: "南部群岛" },
    coordinates: { latitude: 1.248, longitude: 103.83005 },
    region: Region.CENTRAL,
  },
  [Area.STRAITS_VIEW]: {
    name: { en: "Straits View", zh: "海峡景" },
    coordinates: { latitude: 1.27125, longitude: 103.85877 },
    region: Region.CENTRAL,
  },
  [Area.SUNGEI_KADUT]: {
    name: { en: "Sungei Kadut", zh: "双溪加株" },
    coordinates: { latitude: 1.41813, longitude: 103.75746 },
    region: Region.NORTH,
  },
  [Area.TAMPINES]: {
    name: { en: "Tampines", zh: "淡滨尼" },
    coordinates: { latitude: 1.34366, longitude: 103.95426 },
    region: Region.EAST,
  },
  [Area.TANGLIN]: {
    name: { en: "Tanglin", zh: "东陵" },
    coordinates: { latitude: 1.30837, longitude: 103.81759 },
    region: Region.CENTRAL,
  },
  [Area.TENGAH]: {
    name: { en: "Tengah", zh: "登加" },
    coordinates: { latitude: 1.36384, longitude: 103.72875 },
    region: Region.WEST,
  },
  [Area.TOA_PAYOH]: {
    name: { en: "Toa Payoh", zh: "大巴窑" },
    coordinates: { latitude: 1.33668, longitude: 103.86103 },
    region: Region.CENTRAL,
  },
  [Area.TUAS]: {
    name: { en: "Tuas", zh: "大士" },
    coordinates: { latitude: 1.28383, longitude: 103.63069 },
    region: Region.WEST,
  },
  [Area.WESTERN_ISLANDS]: {
    name: { en: "Western Islands", zh: "西部群岛" },
    region: Region.WEST,
  },
  [Area.WESTERN_WATER_CATCHMENT]: {
    name: { en: "Western Water Catchment", zh: "西部集水区" },
    coordinates: { latitude: 1.38634, longitude: 103.69429 },
    region: Region.WEST,
  },
  [Area.WOODLANDS]: {
    name: { en: "Woodlands", zh: "兀兰" },
    coordinates: { latitude: 1.44068, longitude: 103.7877 },
    region: Region.NORTH,
  },
  [Area.YISHUN]: {
    name: { en: "Yishun", zh: "义顺" },
    coordinates: { latitude: 1.41497, longitude: 103.83695 },
    region: Region.NORTH,
  },
};

export default areas;

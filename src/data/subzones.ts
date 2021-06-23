import { Area, Subzone, SubzoneDetails } from "../interfaces";
import areas from "./areas";

const subzones: { [id in Subzone]: SubzoneDetails } = {
  [Subzone.AMK_TOWN_CENTRE]: {
    name: { en: "Ang Mo Kio Town Centre" },
    coordinates: { latitude: 1.37276957853, longitude: 103.846813018 },
    area: Area.ANG_MO_KIO,
  },
  [Subzone.AMK_CHENG_SAN]: {
    name: { en: "Cheng San" },
    coordinates: { latitude: 1.37271474467, longitude: 103.854095277 },
    area: Area.ANG_MO_KIO,
  },
  [Subzone.AMK_CHONG_BOON]: {
    name: { en: "Chong Boon" },
    coordinates: { latitude: 1.36426476543, longitude: 103.855652591 },
    area: Area.ANG_MO_KIO,
  },
  [Subzone.AMK_KEBUN_BAHRU]: {
    name: { en: "Kebun Bahru" },
    coordinates: { latitude: 1.37346688128, longitude: 103.839610084 },
    area: Area.ANG_MO_KIO,
  },
  [Subzone.AMK_SEMBAWANG_HILLS]: {
    name: { en: "Sembawang Hills" },
    coordinates: { latitude: 1.37471512206, longitude: 103.83076595 },
    area: Area.ANG_MO_KIO,
  },
  [Subzone.AMK_SHANGRI_LA]: {
    name: { en: "Shangri-La" },
    coordinates: { latitude: 1.36797210005, longitude: 103.83839294 },
    area: Area.ANG_MO_KIO,
  },
  [Subzone.AMK_TAGORE]: {
    name: { en: "Tagore" },
    coordinates: { latitude: 1.38680551744, longitude: 103.82833841 },
    area: Area.ANG_MO_KIO,
  },
  [Subzone.AMK_TOWNSVILLE]: {
    name: { en: "Townsville" },
    coordinates: { latitude: 1.3653546353, longitude: 103.848472651 },
    area: Area.ANG_MO_KIO,
  },
  [Subzone.AMK_YIO_CHU_KANG]: {
    name: { en: "Yio Chu Kang" },
    coordinates: { latitude: 1.38558094991, longitude: 103.846291727 },
    area: Area.ANG_MO_KIO,
  },
  [Subzone.AMK_YIO_CHU_KANG_EAST]: {
    name: { en: "Yio Chu Kang East" },
    coordinates: { latitude: 1.38347038859, longitude: 103.853396065 },
    area: Area.ANG_MO_KIO,
  },
  [Subzone.AMK_YIO_CHU_KANG_NORTH]: {
    name: { en: "Yio Chu Kang North" },
    coordinates: { latitude: 1.39369687402, longitude: 103.846851076 },
    area: Area.ANG_MO_KIO,
  },
  [Subzone.AMK_YIO_CHU_KANG_WEST]: {
    name: { en: "Yio Chu Kang West" },
    coordinates: { latitude: 1.38128167548, longitude: 103.840062362 },
    area: Area.ANG_MO_KIO,
  },
  [Subzone.BBT_BRICKWORKS]: {
    name: { en: "Brickworks" },
    coordinates: { latitude: 1.35565668063, longitude: 103.742218822 },
    area: Area.BUKIT_BATOK,
  },
  [Subzone.BBT_BUKIT_BATOK_CENTRAL]: {
    name: { en: "Bukit Batok Central" },
    coordinates: { latitude: 1.34799446529, longitude: 103.750413276 },
    area: Area.BUKIT_BATOK,
  },
  [Subzone.BBT_BUKIT_BATOK_EAST]: {
    name: { en: "Bukit Batok East" },
    coordinates: { latitude: 1.3491364514, longitude: 103.757537069 },
    area: Area.BUKIT_BATOK,
  },
  [Subzone.BBT_BUKIT_BATOK_SOUTH]: {
    name: { en: "Bukit Batok South" },
    coordinates: { latitude: 1.34103935596, longitude: 103.758125977 },
    area: Area.BUKIT_BATOK,
  },
  [Subzone.BBT_BUKIT_BATOK_WEST]: {
    name: { en: "Bukit Batok West" },
    coordinates: { latitude: 1.34748014212, longitude: 103.74225729 },
    area: Area.BUKIT_BATOK,
  },
  [Subzone.BBT_GOMBAK]: {
    name: { en: "Gombak" },
    coordinates: { latitude: 1.36928786794, longitude: 103.757485597 },
    area: Area.BUKIT_BATOK,
  },
  [Subzone.BBT_GUILIN]: {
    name: { en: "Guilin" },
    coordinates: { latitude: 1.35546396378, longitude: 103.753812023 },
    area: Area.BUKIT_BATOK,
  },
  [Subzone.BBT_HILLVIEW]: {
    name: { en: "Hillview" },
    coordinates: { latitude: 1.3556494864, longitude: 103.763919292 },
    area: Area.BUKIT_BATOK,
  },
  [Subzone.BBT_HONG_KAH_NORTH]: {
    name: { en: "Hong Kah North" },
    coordinates: { latitude: 1.36271213917, longitude: 103.748003786 },
    area: Area.BUKIT_BATOK,
  },
  [Subzone.BMR_ALEXANDRA_HILL]: {
    name: { en: "Alexandra Hill" },
    coordinates: { latitude: 1.28750582278, longitude: 103.809586514 },
    area: Area.BUKIT_MERAH,
  },
  [Subzone.BMR_ALEXANDRA_NORTH]: {
    name: { en: "Alexandra North" },
    coordinates: { latitude: 1.29228101758, longitude: 103.820273998 },
    area: Area.BUKIT_MERAH,
  },
  [Subzone.BMR_BUKIT_HO_SWEE]: {
    name: { en: "Bukit Ho Swee" },
    coordinates: { latitude: 1.28967167647, longitude: 103.83044381 },
    area: Area.BUKIT_MERAH,
  },
  [Subzone.BMR_BUKIT_MERAH]: {
    name: { en: "Bukit Merah" },
    coordinates: { latitude: 1.28201421407, longitude: 103.818589723 },
    area: Area.BUKIT_MERAH,
  },
  [Subzone.BMR_CITY_TERMINALS]: {
    name: { en: "City Terminals" },
    coordinates: { latitude: 1.26964132799, longitude: 103.841106897 },
    area: Area.BUKIT_MERAH,
  },
  [Subzone.BMR_DEPOT_ROAD]: {
    name: { en: "Depot Road" },
    coordinates: { latitude: 1.28222169544, longitude: 103.808556713 },
    area: Area.BUKIT_MERAH,
  },
  [Subzone.BMR_EVERTON_PARK]: {
    name: { en: "Everton Park" },
    coordinates: { latitude: 1.27494980481, longitude: 103.836315892 },
    area: Area.BUKIT_MERAH,
  },
  [Subzone.BMR_HENDERSON_HILL]: {
    name: { en: "Henderson Hill" },
    coordinates: { latitude: 1.28698482534, longitude: 103.82238178 },
    area: Area.BUKIT_MERAH,
  },
  [Subzone.BMR_KAMPONG_TIONG_BAHRU]: {
    name: { en: "Kampong Tiong Bahru" },
    coordinates: { latitude: 1.27835727125, longitude: 103.827350766 },
    area: Area.BUKIT_MERAH,
  },
  [Subzone.BMR_MARITIME_SQUARE]: {
    name: { en: "Maritime Square" },
    coordinates: { latitude: 1.26869538007, longitude: 103.813602827 },
    area: Area.BUKIT_MERAH,
  },
  [Subzone.BMR_REDHILL]: {
    name: { en: "Redhill" },
    coordinates: { latitude: 1.28763538212, longitude: 103.817162441 },
    area: Area.BUKIT_MERAH,
  },
  [Subzone.BMR_SINGAPORE_GENERAL_HOSPITAL]: {
    name: { en: "Singapore General Hospital" },
    coordinates: { latitude: 1.2797252541, longitude: 103.834641417 },
    area: Area.BUKIT_MERAH,
  },
  [Subzone.BMR_TELOK_BLANGAH_DRIVE]: {
    name: { en: "Telok Blangah Drive" },
    coordinates: { latitude: 1.27665412933, longitude: 103.808880727 },
    area: Area.BUKIT_MERAH,
  },
  [Subzone.BMR_TELOK_BLANGAH_RISE]: {
    name: { en: "Telok Blangah Rise" },
    coordinates: { latitude: 1.2740334213, longitude: 103.824602457 },
    area: Area.BUKIT_MERAH,
  },
  [Subzone.BMR_TELOK_BLANGAH_WAY]: {
    name: { en: "Telok Blangah Way" },
    coordinates: { latitude: 1.2773816094, longitude: 103.820474147 },
    area: Area.BUKIT_MERAH,
  },
  [Subzone.BMR_TIONG_BAHRU]: {
    name: { en: "Tiong Bahru" },
    coordinates: { latitude: 1.28387953055, longitude: 103.831392759 },
    area: Area.BUKIT_MERAH,
  },
  [Subzone.BMR_TIONG_BAHRU_STATION]: {
    name: { en: "Tiong Bahru Station" },
    coordinates: { latitude: 1.28402990546, longitude: 103.826826361 },
    area: Area.BUKIT_MERAH,
  },
  [Subzone.CCK_CHOA_CHU_KANG_CENTRAL]: {
    name: { en: "Choa Chu Kang Central" },
    coordinates: { latitude: 1.38500877, longitude: 103.747645425 },
    area: Area.CHOA_CHU_KANG,
  },
  [Subzone.CCK_CHOA_CHU_KANG_NORTH]: {
    name: { en: "Choa Chu Kang North" },
    coordinates: { latitude: 1.39243214095, longitude: 103.746583904 },
    area: Area.CHOA_CHU_KANG,
  },
  [Subzone.CCK_KEAT_HONG]: {
    name: { en: "Keat Hong" },
    coordinates: { latitude: 1.37549210304, longitude: 103.746459666 },
    area: Area.CHOA_CHU_KANG,
  },
  [Subzone.CCK_PENG_SIANG]: {
    name: { en: "Peng Siang" },
    coordinates: { latitude: 1.37876839977, longitude: 103.737108379 },
    area: Area.CHOA_CHU_KANG,
  },
  [Subzone.CCK_TECK_WHYE]: {
    name: { en: "Teck Whye" },
    coordinates: { latitude: 1.38158315202, longitude: 103.754872976 },
    area: Area.CHOA_CHU_KANG,
  },
  [Subzone.CCK_YEW_TEE]: {
    name: { en: "Yew Tee" },
    coordinates: { latitude: 1.40068278223, longitude: 103.747936375 },
    area: Area.CHOA_CHU_KANG,
  },
  [Subzone.CLE_CLEMENTI_CENTRAL]: {
    name: { en: "Clementi Central" },
    coordinates: { latitude: 1.31206889576, longitude: 103.763083039 },
    area: Area.CLEMENTI,
  },
  [Subzone.CLE_CLEMENTI_NORTH]: {
    name: { en: "Clementi North" },
    coordinates: { latitude: 1.31804940924, longitude: 103.766944797 },
    area: Area.CLEMENTI,
  },
  [Subzone.CLE_CLEMENTI_WEST]: {
    name: { en: "Clementi West" },
    coordinates: { latitude: 1.30252192742, longitude: 103.763091392 },
    area: Area.CLEMENTI,
  },
  [Subzone.CLE_CLEMENTI_WOODS]: {
    name: { en: "Clementi Woods" },
    coordinates: { latitude: 1.30408534204, longitude: 103.768301552 },
    area: Area.CLEMENTI,
  },
  [Subzone.CLE_FABER]: {
    name: { en: "Faber" },
    coordinates: { latitude: 1.32195636355, longitude: 103.756848658 },
    area: Area.CLEMENTI,
  },
  [Subzone.CLE_PANDAN]: {
    name: { en: "Pandan" },
    coordinates: { latitude: 1.30807010034, longitude: 103.754503395 },
    area: Area.CLEMENTI,
  },
  [Subzone.CLE_SUNSET_WAY]: {
    name: { en: "Sunset Way" },
    coordinates: { latitude: 1.32628486112, longitude: 103.768670416 },
    area: Area.CLEMENTI,
  },
  [Subzone.CLE_TOH_TUCK]: {
    name: { en: "Toh Tuck" },
    coordinates: { latitude: 1.33175406177, longitude: 103.756340353 },
    area: Area.CLEMENTI,
  },
  [Subzone.CLE_WEST_COAST]: {
    name: { en: "West Coast" },
    coordinates: { latitude: 1.31627470295, longitude: 103.755088634 },
    area: Area.CLEMENTI,
  },
  [Subzone.JUR_INTERNATIONAL_BUSINESS_PARK]: {
    name: { en: "International Business Park" },
    coordinates: { latitude: 1.3263416163, longitude: 103.748087124 },
    area: Area.JURONG_EAST,
  },
  [Subzone.JUR_JURONG_GATEWAY]: {
    name: { en: "Jurong Gateway" },
    coordinates: { latitude: 1.33310704523, longitude: 103.742680986 },
    area: Area.JURONG_EAST,
  },
  [Subzone.JUR_JURONG_PORT]: {
    name: { en: "Jurong Port" },
    coordinates: { latitude: 1.30962828789, longitude: 103.719711234 },
    area: Area.JURONG_EAST,
  },
  [Subzone.JUR_JURONG_RIVER]: {
    name: { en: "Jurong River" },
    coordinates: { latitude: 1.3194152167, longitude: 103.728795093 },
    area: Area.JURONG_EAST,
  },
  [Subzone.JUR_LAKESIDE]: {
    name: { en: "Lakeside" },
    coordinates: { latitude: 1.3338391551, longitude: 103.731754814 },
    area: Area.JURONG_EAST,
  },
  [Subzone.JUR_PENJURU_CRESCENT]: {
    name: { en: "Penjuru Crescent" },
    coordinates: { latitude: 1.30385715486, longitude: 103.74033082 },
    area: Area.JURONG_EAST,
  },
  [Subzone.JUR_TEBAN_GARDENS]: {
    name: { en: "Teban Gardens" },
    coordinates: { latitude: 1.31486094183, longitude: 103.743155584 },
    area: Area.JURONG_EAST,
  },
  [Subzone.JUR_TOH_GUAN]: {
    name: { en: "Toh Guan" },
    coordinates: { latitude: 1.33748667796, longitude: 103.746106122 },
    area: Area.JURONG_EAST,
  },
  [Subzone.JUR_YUHUA_EAST]: {
    name: { en: "Yuhua East" },
    coordinates: { latitude: 1.34041301708, longitude: 103.738836668 },
    area: Area.JURONG_EAST,
  },
  [Subzone.JUR_YUHUA_WEST]: {
    name: { en: "Yuhua West" },
    coordinates: { latitude: 1.34700992878, longitude: 103.731972099 },
    area: Area.JURONG_EAST,
  },
  [Subzone.MSM_BRAS_BASAH]: {
    name: { en: "Bras Basah" },
    coordinates: { latitude: 1.29624847896, longitude: 103.849430304 },
    area: Area.MUSEUM,
  },
  [Subzone.MSM_DHOBY_GHAUT]: {
    name: { en: "Dhoby Ghaut" },
    coordinates: { latitude: 1.29884993481, longitude: 103.845180029 },
    area: Area.MUSEUM,
  },
  [Subzone.MSM_FORT_CANNING]: {
    name: { en: "Fort Canning" },
    coordinates: { latitude: 1.29403259717, longitude: 103.846023722 },
    area: Area.MUSEUM,
  },
  [Subzone.PGL_CONEY_ISLAND]: {
    name: { en: "Coney Island" },
    coordinates: { latitude: 1.40832722125, longitude: 103.92253451 },
    area: Area.PUNGGOL,
  },
  [Subzone.PGL_MATILDA]: {
    name: { en: "Matilda" },
    coordinates: { latitude: 1.40269296974, longitude: 103.897027947 },
    area: Area.PUNGGOL,
  },
  [Subzone.PGL_NORTHSORE]: {
    name: { en: "Northshore" },
    coordinates: { latitude: 1.41620831406, longitude: 103.906729216 },
    area: Area.PUNGGOL,
  },
  [Subzone.PGL_PUNGGOL_CANAL]: {
    name: { en: "Punggol Canal" },
    coordinates: { latitude: 1.40667418608, longitude: 103.917864906 },
    area: Area.PUNGGOL,
  },
  [Subzone.PGL_PUNGGOL_FIELD]: {
    name: { en: "Punggol Field" },
    coordinates: { latitude: 1.39472343607, longitude: 103.911260449 },
    area: Area.PUNGGOL,
  },
  [Subzone.PGL_PUNGGOL_TOWN_CENTRE]: {
    name: { en: "Punggol Town Centre" },
    coordinates: { latitude: 1.40901648015, longitude: 103.901632398 },
    area: Area.PUNGGOL,
  },
  [Subzone.PGL_WATERWAY_EAST]: {
    name: { en: "Waterway East" },
    coordinates: { latitude: 1.40124498134, longitude: 103.914759058 },
    area: Area.PUNGGOL,
  },
  [Subzone.SLT_PULAR_PUNGGOL_BARAT]: {
    name: { en: "Pulau Punggol Barat" },
    coordinates: { latitude: 1.4251691934, longitude: 103.878698312 },
    area: Area.SELETAR,
  },
  [Subzone.SLT_PULAU_PUNGGOL_TIMOR]: {
    name: { en: "Pulau Punggol Timor" },
    coordinates: { latitude: 1.41904061128, longitude: 103.8910875 },
    area: Area.SELETAR,
  },
  [Subzone.SLT_SELETAR]: {
    name: { en: "Seletar" },
    coordinates: { latitude: 1.40899508421, longitude: 103.881586529 },
    area: Area.SELETAR,
  },
  [Subzone.SLT_SELETAR_AEROSPACE_PARK]: {
    name: { en: "Seletar Aerospace Park" },
    coordinates: { latitude: 1.41235799025, longitude: 103.866482994 },
    area: Area.SELETAR,
  },
  [Subzone.TAM_SIMEI]: {
    name: { en: "Simei" },
    coordinates: { latitude: 1.34067417214, longitude: 103.954004608 },
    area: Area.TAMPINES,
  },
  [Subzone.TAM_TAMPINES_EAST]: {
    name: { en: "Tampines East" },
    coordinates: { latitude: 1.35443512161, longitude: 103.951233066 },
    area: Area.TAMPINES,
  },
  [Subzone.TAM_TAMPINES_NORTH]: {
    name: { en: "Tampines North" },
    coordinates: { latitude: 1.36624467651, longitude: 103.939025652 },
    area: Area.TAMPINES,
  },
  [Subzone.TAM_TAMPINES_WEST]: {
    name: { en: "Tampines West" },
    coordinates: { latitude: 1.34852869264, longitude: 103.93594924 },
    area: Area.TAMPINES,
  },
  [Subzone.TAM_XILIN]: {
    name: { en: "Xilin" },
    coordinates: { latitude: 1.32924702779, longitude: 103.969095689 },
    area: Area.TAMPINES,
  },
  [Subzone.WDL_GREENWOOD_PARK]: {
    name: { en: "Greenwood Park" },
    coordinates: { latitude: 1.44729464999, longitude: 103.784869571 },
    area: Area.WOODLANDS,
  },
  [Subzone.WDL_MIDVIEW]: {
    name: { en: "Midview" },
    coordinates: { latitude: 1.4398884999, longitude: 103.791531658 },
    area: Area.WOODLANDS,
  },
  [Subzone.WDL_NORTH_COAST]: {
    name: { en: "North Coast" },
    coordinates: { latitude: 1.44754450135, longitude: 103.774187622 },
    area: Area.WOODLANDS,
  },
  [Subzone.WDL_SENOKO_WEST]: {
    name: { en: "Senoko West" },
    coordinates: { latitude: 1.45117166719, longitude: 103.796669579 },
    area: Area.WOODLANDS,
  },
  [Subzone.WDL_WOODGROVE]: {
    name: { en: "Woodgrove" },
    coordinates: { latitude: 1.42927937396, longitude: 103.778551911 },
    area: Area.WOODLANDS,
  },
  [Subzone.WDL_WOODLANDS_EAST]: {
    name: { en: "Woodlands East" },
    coordinates: { latitude: 1.44124987799, longitude: 103.801927307 },
    area: Area.WOODLANDS,
  },
  [Subzone.WDL_WOODLANDS_REGIONAL_CENTRE]: {
    name: { en: "Woodlands Regional Centre" },
    coordinates: { latitude: 1.43860198459, longitude: 103.784535653 },
    area: Area.WOODLANDS,
  },
  [Subzone.WDL_WOODLANDS_SOUTH]: {
    name: { en: "Woodlands South" },
    coordinates: { latitude: 1.42950431375, longitude: 103.79386651 },
    area: Area.WOODLANDS,
  },
  [Subzone.WDL_WOODLANDS_WEST]: {
    name: { en: "Woodlands West" },
    coordinates: { latitude: 1.437463649, longitude: 103.775651993 },
    area: Area.WOODLANDS,
  },
  [Subzone.WWC_WESTERN_WATER_CATCHMENT]: {
    name: { en: "Western Water Catchment" },
    coordinates: { latitude: 1.38212976818, longitude: 103.689729797 },
    area: Area.WESTERN_WATER_CATCHMENT,
  },
};

export default subzones;

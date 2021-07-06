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
  [Subzone.BDK_BAYSHORE]: {
    name: { en: "Bayshore" },
    coordinates: { latitude: 1.31384026864, longitude: 103.948650781 },
    area: Area.BEDOK,
  },
  [Subzone.BDK_BEDOK_NORTH]: {
    name: { en: "Bedok North" },
    coordinates: { latitude: 1.33042705336, longitude: 103.936016365 },
    area: Area.BEDOK,
  },
  [Subzone.BDK_BEDOK_RESERVOIR]: {
    name: { en: "Bedok Reservoir" },
    coordinates: { latitude: 1.34004072425, longitude: 103.926329464 },
    area: Area.BEDOK,
  },
  [Subzone.BDK_BEDOK_SOUTH]: {
    name: { en: "Bedok South" },
    coordinates: { latitude: 1.32144278127, longitude: 103.944554127 },
    area: Area.BEDOK,
  },
  [Subzone.BDK_FRANKEL]: {
    name: { en: "Frankel" },
    coordinates: { latitude: 1.31477899132, longitude: 103.920428972 },
    area: Area.BEDOK,
  },
  [Subzone.BDK_KAKI_BUKIT]: {
    name: { en: "Kaki Bukit" },
    coordinates: { latitude: 1.33557766727, longitude: 103.909564735 },
    area: Area.BEDOK,
  },
  [Subzone.BDK_KEMBANGAN]: {
    name: { en: "Kembangan" },
    coordinates: { latitude: 1.32480584111, longitude: 103.915614422 },
    area: Area.BEDOK,
  },
  [Subzone.BDK_SIGLAP]: {
    name: { en: "Siglap" },
    coordinates: { latitude: 1.30659076378, longitude: 103.92708616 },
    area: Area.BEDOK,
  },
  [Subzone.BKP_BANGKIT]: {
    name: { en: "Bangkit" },
    coordinates: { latitude: 1.37711093789, longitude: 103.774293376 },
    area: Area.BUKIT_PANJANG,
  },
  [Subzone.BKP_DAIRY_FARM]: {
    name: { en: "Dairy Farm" },
    coordinates: { latitude: 1.36843179001, longitude: 103.772046192 },
    area: Area.BUKIT_PANJANG,
  },
  [Subzone.BKP_FAJAR]: {
    name: { en: "Fajar" },
    coordinates: { latitude: 1.38478497276, longitude: 103.77114574 },
    area: Area.BUKIT_PANJANG,
  },
  [Subzone.BKP_JELEBU]: {
    name: { en: "Jelebu" },
    coordinates: { latitude: 1.37593429987, longitude: 103.766243653 },
    area: Area.BUKIT_PANJANG,
  },
  [Subzone.BKP_NATURE_RESERVE]: {
    name: { en: "Nature Reserve" },
    coordinates: { latitude: 1.3534685503, longitude: 103.777810912 },
    area: Area.BUKIT_PANJANG,
  },
  [Subzone.BKP_SAUJANA]: {
    name: { en: "Saujana" },
    coordinates: { latitude: 1.38621880176, longitude: 103.766255267 },
    area: Area.BUKIT_PANJANG,
  },
  [Subzone.BKP_SENJA]: {
    name: { en: "Senja" },
    coordinates: { latitude: 1.38611653345, longitude: 103.760515454 },
    area: Area.BUKIT_PANJANG,
  },
  [Subzone.BKT_ANAK_BUKIT]: {
    name: { en: "Anak Bukit" },
    coordinates: { latitude: 1.33788279404, longitude: 103.771562378 },
    area: Area.BUKIT_TIMAH,
  },
  [Subzone.BKT_CORONATION_ROAD]: {
    name: { en: "Coronation Road" },
    coordinates: { latitude: 1.32556998358, longitude: 103.801538055 },
    area: Area.BUKIT_TIMAH,
  },
  [Subzone.BKT_FARRER_COURT]: {
    name: { en: "Farrer Court" },
    coordinates: { latitude: 1.31683804213, longitude: 103.805129439 },
    area: Area.BUKIT_TIMAH,
  },
  [Subzone.BKT_HILLCREST]: {
    name: { en: "Hillcrest" },
    coordinates: { latitude: 1.33315732448, longitude: 103.808229456 },
    area: Area.BUKIT_TIMAH,
  },
  [Subzone.BKT_HOLLAND_ROAD]: {
    name: { en: "Holland Road" },
    coordinates: { latitude: 1.32705245172, longitude: 103.783763473 },
    area: Area.BUKIT_TIMAH,
  },
  [Subzone.BKT_LEEDON_PARK]: {
    name: { en: "Leedon Park" },
    coordinates: { latitude: 1.316954472, longitude: 103.796907172 },
    area: Area.BUKIT_TIMAH,
  },
  [Subzone.BKT_SWISS_CLUB]: {
    name: { en: "Swiss Club" },
    coordinates: { latitude: 1.34063686622, longitude: 103.79231074 },
    area: Area.BUKIT_TIMAH,
  },
  [Subzone.BKT_ULU_PANDAN]: {
    name: { en: "Ulu Pandan" },
    coordinates: { latitude: 1.31631697011, longitude: 103.781297066 },
    area: Area.BUKIT_TIMAH,
  },
  [Subzone.BSH_BISHAN_EAST]: {
    name: { en: "Bishan East" },
    coordinates: { latitude: 1.34982390798, longitude: 103.853014262 },
    area: Area.BISHAN,
  },
  [Subzone.BSH_MARYMOUNT]: {
    name: { en: "Marymount" },
    coordinates: { latitude: 1.35435998733, longitude: 103.844888371 },
    area: Area.BISHAN,
  },
  [Subzone.BSH_UPPER_THOMSON]: {
    name: { en: "Upper Thomson" },
    coordinates: { latitude: 1.35766663237, longitude: 103.832282415 },
    area: Area.BISHAN,
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
  [Subzone.BNL_LIU_FANG]: {
    name: { en: "Liu Fang" },
    coordinates: { latitude: 1.31825277789, longitude: 103.708232231 },
    area: Area.BOON_LAY,
  },
  [Subzone.BNL_SAMULUN]: {
    name: { en: "Samulun" },
    coordinates: { latitude: 1.30806059784, longitude: 103.70229687 },
    area: Area.BOON_LAY,
  },
  [Subzone.BNL_SHIPYARD]: {
    name: { en: "Shipyard" },
    coordinates: { latitude: 1.30749729717, longitude: 103.689282828 },
    area: Area.BOON_LAY,
  },
  [Subzone.BNL_TUKANG]: {
    name: { en: "Tukang" },
    coordinates: { latitude: 1.32565040976, longitude: 103.709250507 },
    area: Area.BOON_LAY,
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
  [Subzone.CGB_CHANGI_BAY]: {
    name: { en: "Changi Bay" },
    coordinates: { latitude: 1.32237731385, longitude: 104.025424874 },
    area: Area.CHANGI_BAY,
  },
  [Subzone.CHG_CHANGI_AIRPORT]: {
    name: { en: "Changi Airport" },
    coordinates: { latitude: 1.34726454633, longitude: 104.001006614 },
    area: Area.CHANGI,
  },
  [Subzone.CHG_CHANGI_POINT]: {
    name: { en: "Changi Point" },
    coordinates: { latitude: 1.39031870195, longitude: 103.982515007 },
    area: Area.CHANGI,
  },
  [Subzone.CHG_CHANGI_WEST]: {
    name: { en: "Changi West" },
    coordinates: { latitude: 1.36521738787, longitude: 103.978751245 },
    area: Area.CHANGI,
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
  [Subzone.CWC_CENTRAL_WATER_CATCHMENT]: {
    name: { en: "Central Water Catchment" },
    coordinates: { latitude: 1.37665502853, longitude: 103.801189262 },
    area: Area.CENTRAL_WATER_CATCHMENT,
  },
  [Subzone.DTC_ANSON]: {
    name: { en: "Anson" },
    coordinates: { latitude: 1.27371791279, longitude: 103.84360996 },
    area: Area.DOWNTOWN_CORE,
  },
  [Subzone.DTC_BAYFRONT]: {
    name: { en: "Bayfront" },
    coordinates: { latitude: 1.28333472525, longitude: 103.858533762 },
    area: Area.DOWNTOWN_CORE,
  },
  [Subzone.DTC_BUGIS]: {
    name: { en: "Bugis" },
    coordinates: { latitude: 1.29914573413, longitude: 103.856036798 },
    area: Area.DOWNTOWN_CORE,
  },
  [Subzone.DTC_CECIL]: {
    name: { en: "Cecil" },
    coordinates: { latitude: 1.27864260763, longitude: 103.848865061 },
    area: Area.DOWNTOWN_CORE,
  },
  [Subzone.DTC_CENTRAL]: {
    name: { en: "Central" },
    coordinates: { latitude: 1.27567365904, longitude: 103.852420001 },
    area: Area.DOWNTOWN_CORE,
  },
  [Subzone.DTC_CITY_HALL]: {
    name: { en: "City Hall" },
    coordinates: { latitude: 1.29243576615, longitude: 103.853168045 },
    area: Area.DOWNTOWN_CORE,
  },
  [Subzone.DTC_CLIFFORD_PIER]: {
    name: { en: "Clifford Pier" },
    coordinates: { latitude: 1.28556190581, longitude: 103.854699375 },
    area: Area.DOWNTOWN_CORE,
  },
  [Subzone.DTC_MARINA_CENTRE]: {
    name: { en: "Marina Centre" },
    coordinates: { latitude: 1.29185075136, longitude: 103.859718632 },
    area: Area.DOWNTOWN_CORE,
  },
  [Subzone.DTC_MAXWELL]: {
    name: { en: "Maxwell" },
    coordinates: { latitude: 1.27941518164, longitude: 103.845826655 },
    area: Area.DOWNTOWN_CORE,
  },
  [Subzone.DTC_PHILLIP]: {
    name: { en: "Phillip" },
    coordinates: { latitude: 1.28527684331, longitude: 103.848654176 },
    area: Area.DOWNTOWN_CORE,
  },
  [Subzone.DTC_RAFFLES_PLACE]: {
    name: { en: "Raffles Place" },
    coordinates: { latitude: 1.28372000024, longitude: 103.851007382 },
    area: Area.DOWNTOWN_CORE,
  },
  [Subzone.DTC_TANJONG_PAGAR]: {
    name: { en: "Tanjong Pagar" },
    coordinates: { latitude: 1.27588451919, longitude: 103.845878602 },
    area: Area.DOWNTOWN_CORE,
  },
  [Subzone.GLG_ALJUNIED]: {
    name: { en: "Aljunied" },
    coordinates: { latitude: 1.31445048951, longitude: 103.883570673 },
    area: Area.GEYLANG,
  },
  [Subzone.GLG_GEYLANG_EAST]: {
    name: { en: "Geylang East" },
    coordinates: { latitude: 1.31693921533, longitude: 103.898348217 },
    area: Area.GEYLANG,
  },
  [Subzone.GLG_KALLANG_WAY]: {
    name: { en: "Kallang Way" },
    coordinates: { latitude: 1.32583557119, longitude: 103.876103166 },
    area: Area.GEYLANG,
  },
  [Subzone.GLG_KAMPONG_UBI]: {
    name: { en: "Kampong Ubi" },
    coordinates: { latitude: 1.32961124965, longitude: 103.896572831 },
    area: Area.GEYLANG,
  },
  [Subzone.GLG_MACPHERSON]: {
    name: { en: "Macpherson" },
    coordinates: { latitude: 1.32736777215, longitude: 103.885204255 },
    area: Area.GEYLANG,
  },
  [Subzone.HGN_DEFU_INDUSTRIAL_PARK]: {
    name: { en: "Defu Industrial Park" },
    coordinates: { latitude: 1.3579169465, longitude: 103.895781293 },
    area: Area.HOUGANG,
  },
  [Subzone.HGN_HOUGANG_CENTRAL]: {
    name: { en: "Hougang Central" },
    coordinates: { latitude: 1.36966866631, longitude: 103.891462363 },
    area: Area.HOUGANG,
  },
  [Subzone.HGN_HOUGANG_EAST]: {
    name: { en: "Hougang East" },
    coordinates: { latitude: 1.37632272674, longitude: 103.897368843 },
    area: Area.HOUGANG,
  },
  [Subzone.HGN_HOUGANG_WEST]: {
    name: { en: "Hougang West" },
    coordinates: { latitude: 1.3732012403, longitude: 103.88682874 },
    area: Area.HOUGANG,
  },
  [Subzone.HGN_KANGKAR]: {
    name: { en: "Kangkar" },
    coordinates: { latitude: 1.36962095862, longitude: 103.898217285 },
    area: Area.HOUGANG,
  },
  [Subzone.HGN_KOVAN]: {
    name: { en: "Kovan" },
    coordinates: { latitude: 1.362930314, longitude: 103.88068021 },
    area: Area.HOUGANG,
  },
  [Subzone.HGN_LORONG_AH_SOO]: {
    name: { en: "Lorong Ah Soo" },
    coordinates: { latitude: 1.35683069959, longitude: 103.886606363 },
    area: Area.HOUGANG,
  },
  [Subzone.HGN_LORONG_HALUS]: {
    name: { en: "Lorong Halus" },
    coordinates: { latitude: 1.36962168481, longitude: 103.904038357 },
    area: Area.HOUGANG,
  },
  [Subzone.HGN_TAI_SENG]: {
    name: { en: "Tai Seng" },
    coordinates: { latitude: 1.34377153684, longitude: 103.887618997 },
    area: Area.HOUGANG,
  },
  [Subzone.HGN_TRAFALGAR]: {
    name: { en: "Trafalgar" },
    coordinates: { latitude: 1.38106569991, longitude: 103.881405985 },
    area: Area.HOUGANG,
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
  [Subzone.JUW_BOON_LAY_PLACE]: {
    name: { en: "Boon Lay Place" },
    coordinates: { latitude: 1.34586370794, longitude: 103.711148262 },
    area: Area.JURONG_WEST,
  },
  [Subzone.JUW_CHIN_BEE]: {
    name: { en: "Chin Bee" },
    coordinates: { latitude: 1.33497839028, longitude: 103.713197753 },
    area: Area.JURONG_WEST,
  },
  [Subzone.JUW_HONG_KAH]: {
    name: { en: "Hong Kah" },
    coordinates: { latitude: 1.3498945126, longitude: 103.721069576 },
    area: Area.JURONG_WEST,
  },
  [Subzone.JUW_JURONG_WEST_CENTRAL]: {
    name: { en: "Jurong West Central" },
    coordinates: { latitude: 1.34013951553, longitude: 103.702098706 },
    area: Area.JURONG_WEST,
  },
  [Subzone.JUW_KIAN_TECK]: {
    name: { en: "Kian Teck" },
    coordinates: { latitude: 1.33151190851, longitude: 103.697903998 },
    area: Area.JURONG_WEST,
  },
  [Subzone.JUW_SAFTI]: {
    name: { en: "Safti" },
    coordinates: { latitude: 1.33460322532, longitude: 103.683172214 },
    area: Area.JURONG_WEST,
  },
  [Subzone.JUW_TAMAN_JURONG]: {
    name: { en: "Taman Jurong" },
    coordinates: { latitude: 1.33451003801, longitude: 103.721196983 },
    area: Area.JURONG_WEST,
  },
  [Subzone.JUW_WENYA]: {
    name: { en: "Wenya" },
    coordinates: { latitude: 1.35570380699, longitude: 103.707101976 },
    area: Area.JURONG_WEST,
  },
  [Subzone.JUW_YUNNAN]: {
    name: { en: "Yunnan" },
    coordinates: { latitude: 1.34455428242, longitude: 103.694878698 },
    area: Area.JURONG_WEST,
  },
  [Subzone.KAL_BENDEMEER]: {
    name: { en: "Bendemeer" },
    coordinates: { latitude: 1.32220227252, longitude: 103.861856238 },
    area: Area.KALLANG,
  },
  [Subzone.KAL_BOON_KENG]: {
    name: { en: "Boon Keng" },
    coordinates: { latitude: 1.31488415692, longitude: 103.872300577 },
    area: Area.KALLANG,
  },
  [Subzone.KAL_CRAWFORD]: {
    name: { en: "Crawford" },
    coordinates: { latitude: 1.3007628619, longitude: 103.863841179 },
    area: Area.KALLANG,
  },
  [Subzone.KAL_GEYLANG_BAHRU]: {
    name: { en: "Geylang Bahru" },
    coordinates: { latitude: 1.3216390137, longitude: 103.870249655 },
    area: Area.KALLANG,
  },
  [Subzone.KAL_KALLANG_BAHRU]: {
    name: { en: "Kallang Bahru" },
    coordinates: { latitude: 1.31407726328, longitude: 103.865480279 },
    area: Area.KALLANG,
  },
  [Subzone.KAL_KAMPONG_BUGIS]: {
    name: { en: "Kampong Bugis" },
    coordinates: { latitude: 1.30816412151, longitude: 103.870502483 },
    area: Area.KALLANG,
  },
  [Subzone.KAL_KAMPONG_JAVA]: {
    name: { en: "Kampong Java" },
    coordinates: { latitude: 1.31370664248, longitude: 103.850314934 },
    area: Area.KALLANG,
  },
  [Subzone.KAL_LAVENDER]: {
    name: { en: "Lavender" },
    coordinates: { latitude: 1.31082161336, longitude: 103.859146522 },
    area: Area.KALLANG,
  },
  [Subzone.KAL_TANJONG_RHU]: {
    name: { en: "Tanjong Rhu" },
    coordinates: { latitude: 1.30059104578, longitude: 103.875910706 },
    area: Area.KALLANG,
  },
  [Subzone.JUW_TAMAN_JURONG]: {
    name: { en: "Tanjong Rhu" },
    coordinates: { latitude: 1.30059104578, longitude: 103.875910706 },
    area: Area.KALLANG,
  },
  [Subzone.LCK_LIM_CHU_KANG]: {
    name: { en: "Lim Chu Kang" },
    coordinates: { latitude: 1.43064278529, longitude: 103.719285508 },
    area: Area.LIM_CHU_KANG,
  },
  [Subzone.MAE_MARINA_EAST]: {
    name: { en: "Marina East" },
    coordinates: { latitude: 1.28851730739, longitude: 103.87235163 },
    area: Area.MARINA_EAST,
  },
  [Subzone.MAS_MARINA_SOUTH]: {
    name: { en: "Marina South" },
    coordinates: { latitude: 1.28053129898, longitude: 103.865628533 },
    area: Area.MARINA_SOUTH,
  },
  [Subzone.MEP_EAST_COAST]: {
    name: { en: "East Coast" },
    coordinates: { latitude: 1.29969127134, longitude: 103.908675268 },
    area: Area.MARINE_PARADE,
  },
  [Subzone.MEP_KATONG]: {
    name: { en: "Katong" },
    coordinates: { latitude: 1.30726504731, longitude: 103.902335112 },
    area: Area.MARINE_PARADE,
  },
  [Subzone.MEP_MARINA_EAST]: {
    name: { en: "Marina East (Marine Parade)" },
    coordinates: { latitude: 1.29221591433, longitude: 103.884676534 },
    area: Area.MARINE_PARADE,
  },
  [Subzone.MEP_MARINE_PARADE]: {
    name: { en: "Marine Parade" },
    coordinates: { latitude: 1.30281465148, longitude: 103.907574251 },
    area: Area.MARINE_PARADE,
  },
  [Subzone.MEP_MOUNTBATTEN]: {
    name: { en: "Mountbatten" },
    coordinates: { latitude: 1.3016708798, longitude: 103.891272105 },
    area: Area.MARINE_PARADE,
  },
  [Subzone.MND_MANDAI_EAST]: {
    name: { en: "Mandai East" },
    coordinates: { latitude: 1.42678141142, longitude: 103.813003878 },
    area: Area.MANDAI,
  },
  [Subzone.MND_MANDAI_ESTATE]: {
    name: { en: "Mandai Estate" },
    coordinates: { latitude: 1.42656167552, longitude: 103.825075778 },
    area: Area.MANDAI,
  },
  [Subzone.MND_MANDAI_WEST]: {
    name: { en: "Mandai West" },
    coordinates: { latitude: 1.41831686396, longitude: 103.784337179 },
    area: Area.MANDAI,
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
  [Subzone.NEW_CAIRNHILL]: {
    name: { en: "Cairnhill" },
    coordinates: { latitude: 1.30664959638, longitude: 103.837655573 },
    area: Area.NEWTON,
  },
  [Subzone.NEW_GOODWOOD_PARK]: {
    name: { en: "Goodwood Park" },
    coordinates: { latitude: 1.31358675572, longitude: 103.834296927 },
    area: Area.NEWTON,
  },
  [Subzone.NEW_ISTANA_NEGARA]: {
    name: { en: "Istana Negara" },
    coordinates: { latitude: 1.30533912904, longitude: 103.844342208 },
    area: Area.NEWTON,
  },
  [Subzone.NEW_MONKS_HILL]: {
    name: { en: "Monk's Hill" },
    coordinates: { latitude: 1.30909702919, longitude: 103.84172963 },
    area: Area.NEWTON,
  },
  [Subzone.NEW_NEWTON_CIRCUS]: {
    name: { en: "Newton Circus" },
    coordinates: { latitude: 1.31194399911, longitude: 103.838416264 },
    area: Area.NEWTON,
  },
  [Subzone.NEW_ORANGE_GROVE]: {
    name: { en: "Orange Grove" },
    coordinates: { latitude: 1.31005518289, longitude: 103.830337053 },
    area: Area.NEWTON,
  },
  [Subzone.NOV_BALASTIER]: {
    name: { en: "Balestier" },
    coordinates: { latitude: 1.32551345556, longitude: 103.851067395 },
    area: Area.NOVENA,
  },
  [Subzone.NOV_DUNEARN]: {
    name: { en: "Dunearn" },
    coordinates: { latitude: 1.32618983436, longitude: 103.820069643 },
    area: Area.NOVENA,
  },
  [Subzone.NOV_MALCOLM]: {
    name: { en: "Malcolm" },
    coordinates: { latitude: 1.32312770906, longitude: 103.833949892 },
    area: Area.NOVENA,
  },
  [Subzone.NOV_MOULMEIN]: {
    name: { en: "Moulmein" },
    coordinates: { latitude: 1.31764421667, longitude: 103.842820235 },
    area: Area.NOVENA,
  },
  [Subzone.NOV_MOUNT_PLEASANT]: {
    name: { en: "Mount Pleasant" },
    coordinates: { latitude: 1.33382056539, longitude: 103.828963383 },
    area: Area.NOVENA,
  },
  [Subzone.ORC_BOULEVARD]: {
    name: { en: "Boulevard" },
    coordinates: { latitude: 1.30537276782, longitude: 103.83257213 },
    area: Area.ORCHARD,
  },
  [Subzone.ORC_SOMERSET]: {
    name: { en: "Somerset" },
    coordinates: { latitude: 1.30062480181, longitude: 103.838663299 },
    area: Area.ORCHARD,
  },
  [Subzone.ORC_TANGLIN]: {
    name: { en: "Tanglin" },
    coordinates: { latitude: 1.30481861577, longitude: 103.825796628 },
    area: Area.ORCHARD,
  },
  [Subzone.OTR_CHINA_SQUARE]: {
    name: { en: "China Square" },
    coordinates: { latitude: 1.28438642996, longitude: 103.846883324 },
    area: Area.OUTRAM,
  },
  [Subzone.OTR_CHINATOWN]: {
    name: { en: "Chinatown" },
    coordinates: { latitude: 1.27979006624, longitude: 103.84249902 },
    area: Area.OUTRAM,
  },
  [Subzone.OTR_PEARLS_HILL]: {
    name: { en: "Pearl's Hill" },
    coordinates: { latitude: 1.28561279974, longitude: 103.839420237 },
    area: Area.OUTRAM,
  },
  [Subzone.OTR_PEOPLES_PARK]: {
    name: { en: "People's Park" },
    coordinates: { latitude: 1.28155785391, longitude: 103.840138834 },
    area: Area.OUTRAM,
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
  [Subzone.PNR_BENOI_SECTOR]: {
    name: { en: "Benoi Sector" },
    coordinates: { latitude: 1.31775387027, longitude: 103.686569536 },
    area: Area.PIONEER,
  },
  [Subzone.PNR_GUL_BASIN]: {
    name: { en: "Gul Basin" },
    coordinates: { latitude: 1.304906913, longitude: 103.676423956 },
    area: Area.PIONEER,
  },
  [Subzone.PNR_GUL_CIRCLE]: {
    name: { en: "Gul Circle" },
    coordinates: { latitude: 1.31538244914, longitude: 103.668829902 },
    area: Area.PIONEER,
  },
  [Subzone.PNR_JOO_KOON]: {
    name: { en: "Joo Koon" },
    coordinates: { latitude: 1.32559577375, longitude: 103.679521771 },
    area: Area.PIONEER,
  },
  [Subzone.PNR_PIONEER_SECTOR]: {
    name: { en: "Pioneer Sector" },
    coordinates: { latitude: 1.30045108935, longitude: 103.66145185 },
    area: Area.PIONEER,
  },
  [Subzone.PSR_FLORA_DRIVE]: {
    name: { en: "Flora Drive" },
    coordinates: { latitude: 1.35930124931, longitude: 103.966321885 },
    area: Area.PASIR_RIS,
  },
  [Subzone.PSR_LOYANG_EAST]: {
    name: { en: "Loyang East" },
    coordinates: { latitude: 1.36797860882, longitude: 103.973426401 },
    area: Area.PASIR_RIS,
  },
  [Subzone.PSR_LOYANG_WEST]: {
    name: { en: "Loyang West" },
    coordinates: { latitude: 1.37701041937, longitude: 103.970753706 },
    area: Area.PASIR_RIS,
  },
  [Subzone.PSR_PASIR_RIS_CENTRAL]: {
    name: { en: "Pasir Ris Central" },
    coordinates: { latitude: 1.37206455003, longitude: 103.947939358 },
    area: Area.PASIR_RIS,
  },
  [Subzone.PSR_PASIR_RIS_DRIVE]: {
    name: { en: "Pasir Ris Drive" },
    coordinates: { latitude: 1.3688667892, longitude: 103.959409933 },
    area: Area.PASIR_RIS,
  },
  [Subzone.PSR_PASIR_RIS_PARK]: {
    name: { en: "Pasir Ris Park" },
    coordinates: { latitude: 1.3786815648, longitude: 103.955844457 },
    area: Area.PASIR_RIS,
  },
  [Subzone.PSR_PASIR_RIS_WAFER_FAB_PARK]: {
    name: { en: "Pasir Ris Wafer Fab Park" },
    coordinates: { latitude: 1.38884074018, longitude: 103.928680044 },
    area: Area.PASIR_RIS,
  },
  [Subzone.PSR_PASIR_RIS_WEST]: {
    name: { en: "Pasir Ris West" },
    coordinates: { latitude: 1.37928604681, longitude: 103.939812188 },
    area: Area.PASIR_RIS,
  },
  [Subzone.PYL_AIRPORT_ROAD]: {
    name: { en: "Airport Road" },
    coordinates: { latitude: 1.35156968337, longitude: 103.897415945 },
    area: Area.PAYA_LEBAR,
  },
  [Subzone.PYL_PAYA_LEBAR_EAST]: {
    name: { en: "Paya Lebar East" },
    coordinates: { latitude: 1.35561205454, longitude: 103.923763162 },
    area: Area.PAYA_LEBAR,
  },
  [Subzone.PYL_PAYA_LEBAR_NORTH]: {
    name: { en: "Paya Lebar North" },
    coordinates: { latitude: 1.37316507768, longitude: 103.925799334 },
    area: Area.PAYA_LEBAR,
  },
  [Subzone.PYL_PAYA_LEBAR_WEST]: {
    name: { en: "Paya Lebar West" },
    coordinates: { latitude: 1.37394006423, longitude: 103.91091996 },
    area: Area.PAYA_LEBAR,
  },
  [Subzone.PYL_PLAB]: {
    name: { en: "Plab" },
    coordinates: { latitude: 1.35749654047, longitude: 103.911421129 },
    area: Area.PAYA_LEBAR,
  },
  [Subzone.QUE_COMMONWEALTH]: {
    name: { en: "Commonwealth" },
    coordinates: { latitude: 1.30494716445, longitude: 103.799881598 },
    area: Area.QUEENSTOWN,
  },
  [Subzone.QUE_DOVER]: {
    name: { en: "Dover" },
    coordinates: { latitude: 1.30386658554, longitude: 103.779545368 },
    area: Area.QUEENSTOWN,
  },
  [Subzone.QUE_GHIM_MOH]: {
    name: { en: "Ghim Moh" },
    coordinates: { latitude: 1.31091545845, longitude: 103.78748531 },
    area: Area.QUEENSTOWN,
  },
  [Subzone.QUE_HOLLAND_DRIVE]: {
    name: { en: "Holland Drive" },
    coordinates: { latitude: 1.30833666767, longitude: 103.794783785 },
    area: Area.QUEENSTOWN,
  },
  [Subzone.QUE_KENT_RIDGE]: {
    name: { en: "Kent Ridge" },
    coordinates: { latitude: 1.28509987375, longitude: 103.792568365 },
    area: Area.QUEENSTOWN,
  },
  [Subzone.QUE_MARGARET_DRIVE]: {
    name: { en: "Margaret Drive" },
    coordinates: { latitude: 1.29722401448, longitude: 103.80818415 },
    area: Area.QUEENSTOWN,
  },
  [Subzone.QUE_MEI_CHIN]: {
    name: { en: "Mei Chin" },
    coordinates: { latitude: 1.29347230246, longitude: 103.803227007 },
    area: Area.QUEENSTOWN,
  },
  [Subzone.QUE_NATIONAL_UNIVERSITY_OF_SINGAPORE]: {
    name: { en: "National University Of Singapore" },
    coordinates: { latitude: 1.29599490429, longitude: 103.776610819 },
    area: Area.QUEENSTOWN,
  },
  [Subzone.QUE_ONENORTH]: {
    name: { en: "OneNorth" },
    coordinates: { latitude: 1.29822028567, longitude: 103.791080198 },
    area: Area.QUEENSTOWN,
  },
  [Subzone.QUE_PASIR_PANJANG_1]: {
    name: { en: "Pasir Panjang 1" },
    coordinates: { latitude: 1.28662268778, longitude: 103.780101074 },
    area: Area.QUEENSTOWN,
  },
  [Subzone.QUE_PASIR_PANJANG_2]: {
    name: { en: "Pasir Panjang 2" },
    coordinates: { latitude: 1.27672379058, longitude: 103.796136484 },
    area: Area.QUEENSTOWN,
  },
  [Subzone.QUE_PORT]: {
    name: { en: "Port" },
    coordinates: { latitude: 1.28236556525, longitude: 103.77521694 },
    area: Area.QUEENSTOWN,
  },
  [Subzone.QUE_QUEENSWAY]: {
    name: { en: "Queensway" },
    coordinates: { latitude: 1.28852575758, longitude: 103.798889282 },
    area: Area.QUEENSTOWN,
  },
  [Subzone.QUE_SINGAPORE_POLYTECHNIC]: {
    name: { en: "Singapore Polytechnic" },
    coordinates: { latitude: 1.31134897434, longitude: 103.777175003 },
    area: Area.QUEENSTOWN,
  },
  [Subzone.QUE_TANGLIN_HALT]: {
    name: { en: "Tanglin Halt" },
    coordinates: { latitude: 1.30126468921, longitude: 103.796706811 },
    area: Area.QUEENSTOWN,
  },
  [Subzone.RCR_BENCOOLEN]: {
    name: { en: "Bencoolen" },
    coordinates: { latitude: 1.30200473726, longitude: 103.851281072 },
    area: Area.ROCHOR,
  },
  [Subzone.RCR_FARRER_PARK]: {
    name: { en: "Farrer Park" },
    coordinates: { latitude: 1.30916383358, longitude: 103.852128927 },
    area: Area.ROCHOR,
  },
  [Subzone.RCR_KAMPONG_GLAM]: {
    name: { en: "Kampong Glam" },
    coordinates: { latitude: 1.30226289678, longitude: 103.8596908 },
    area: Area.ROCHOR,
  },
  [Subzone.RCR_LITTLE_INDIA]: {
    name: { en: "Little India" },
    coordinates: { latitude: 1.30678335006, longitude: 103.854052653 },
    area: Area.ROCHOR,
  },
  [Subzone.RCR_MACKENZIE]: {
    name: { en: "Mackenzie" },
    coordinates: { latitude: 1.30624018739, longitude: 103.848414336 },
    area: Area.ROCHOR,
  },
  [Subzone.RCR_MOUNT_EMILY]: {
    name: { en: "Mount Emily" },
    coordinates: { latitude: 1.30241070302, longitude: 103.847544856 },
    area: Area.ROCHOR,
  },
  [Subzone.RCR_ROCHOR_CANAL]: {
    name: { en: "Rochor Canal" },
    coordinates: { latitude: 1.30403532281, longitude: 103.857523471 },
    area: Area.ROCHOR,
  },
  [Subzone.RCR_SELEGIE]: {
    name: { en: "Selegie" },
    coordinates: { latitude: 1.30215315362, longitude: 103.849648125 },
    area: Area.ROCHOR,
  },
  [Subzone.RCR_SUNGEI_ROAD]: {
    name: { en: "Sungei Road" },
    coordinates: { latitude: 1.30569910135, longitude: 103.856692883 },
    area: Area.ROCHOR,
  },
  [Subzone.RCR_VICTORIA]: {
    name: { en: "Victoria" },
    coordinates: { latitude: 1.29966360621, longitude: 103.852989616 },
    area: Area.ROCHOR,
  },
  [Subzone.RVV_INSTITUTION_HILL]: {
    name: { en: "Institution Hill" },
    coordinates: { latitude: 1.2940158539, longitude: 103.837500397 },
    area: Area.RIVER_VALLEY,
  },
  [Subzone.RVV_LEONIE_HILL]: {
    name: { en: "Leonie Hill" },
    coordinates: { latitude: 1.29793980598, longitude: 103.834063829 },
    area: Area.RIVER_VALLEY,
  },
  [Subzone.RVV_ONE_TREE_HILL]: {
    name: { en: "One Tree Hill" },
    coordinates: { latitude: 1.30172627381, longitude: 103.827168567 },
    area: Area.RIVER_VALLEY,
  },
  [Subzone.RVV_OXLEY]: {
    name: { en: "Oxley" },
    coordinates: { latitude: 1.29711287956, longitude: 103.840528097 },
    area: Area.RIVER_VALLEY,
  },
  [Subzone.RVV_PATERSON]: {
    name: { en: "Paterson" },
    coordinates: { latitude: 1.30125218175, longitude: 103.831605207 },
    area: Area.RIVER_VALLEY,
  },
  [Subzone.SBW_ADMIRALTY]: {
    name: { en: "Admiralty" },
    coordinates: { latitude: 1.45338818339, longitude: 103.825152759 },
    area: Area.SEMBAWANG,
  },
  [Subzone.SBW_SEMBAWANG_CENTRAL]: {
    name: { en: "Sembawang Central" },
    coordinates: { latitude: 1.44637281157, longitude: 103.817761416 },
    area: Area.SEMBAWANG,
  },
  [Subzone.SBW_SEMBAWANG_EAST]: {
    name: { en: "Sembawang East" },
    coordinates: { latitude: 1.44750107281, longitude: 103.831421995 },
    area: Area.SEMBAWANG,
  },
  [Subzone.SBW_SEMBAWANG_NORTH]: {
    name: { en: "Sembawang North" },
    coordinates: { latitude: 1.45699749291, longitude: 103.815695235 },
    area: Area.SEMBAWANG,
  },
  [Subzone.SBW_SEMBAWANG_SPRINGS]: {
    name: { en: "Sembawang Springs" },
    coordinates: { latitude: 1.44095578645, longitude: 103.825022834 },
    area: Area.SEMBAWANG,
  },
  [Subzone.SBW_SEMBAWANG_STRAITS]: {
    name: { en: "Sembawang Straits" },
    coordinates: { latitude: 1.45867396457, longitude: 103.83648596 },
    area: Area.SEMBAWANG,
  },
  [Subzone.SBW_SENOKO_NORTH]: {
    name: { en: "Senoko North" },
    coordinates: { latitude: 1.46377727425, longitude: 103.803357142 },
    area: Area.SEMBAWANG,
  },
  [Subzone.SBW_SENOKO_SOUTH]: {
    name: { en: "Senoko South" },
    coordinates: { latitude: 1.45349867462, longitude: 103.807534572 },
    area: Area.SEMBAWANG,
  },
  [Subzone.SBW_THE_WHARVES]: {
    name: { en: "The Wharves" },
    coordinates: { latitude: 1.4632162579, longitude: 103.820154846 },
    area: Area.SEMBAWANG,
  },
  [Subzone.SGR_BOAT_QUAY]: {
    name: { en: "Boat Quay" },
    coordinates: { latitude: 1.28735460113, longitude: 103.848189061 },
    area: Area.SINGAPORE_RIVER,
  },
  [Subzone.SGR_CLARKE_QUAY]: {
    name: { en: "Clarke Quay" },
    coordinates: { latitude: 1.28959933636, longitude: 103.844579166 },
    area: Area.SINGAPORE_RIVER,
  },
  [Subzone.SGR_ROBERTSON_QUAY]: {
    name: { en: "Robertson Quay" },
    coordinates: { latitude: 1.29032908346, longitude: 103.836778913 },
    area: Area.SINGAPORE_RIVER,
  },
  [Subzone.SKD_GALI_BATU]: {
    name: { en: "Gali Batu" },
    coordinates: { latitude: 1.39998843475, longitude: 103.762915338 },
    area: Area.SUNGEI_KADUT,
  },
  [Subzone.SKD_KRANJI]: {
    name: { en: "Kranji" },
    coordinates: { latitude: 1.43432802308, longitude: 103.759335871 },
    area: Area.SUNGEI_KADUT,
  },
  [Subzone.SKD_PANG_SUA]: {
    name: { en: "Pang Sua" },
    coordinates: { latitude: 1.41262047352, longitude: 103.748272494 },
    area: Area.SUNGEI_KADUT,
  },
  [Subzone.SKD_RESERVOIR_VIEW]: {
    name: { en: "Reservoir View" },
    coordinates: { latitude: 1.43174231316, longitude: 103.746758594 },
    area: Area.SUNGEI_KADUT,
  },
  [Subzone.SKD_TURF_CLUB]: {
    name: { en: "Turf Club" },
    coordinates: { latitude: 1.41878066207, longitude: 103.763539581 },
    area: Area.SUNGEI_KADUT,
  },
  [Subzone.SKG_ANCHORVALE]: {
    name: { en: "Anchorvale" },
    coordinates: { latitude: 1.39443671049, longitude: 103.889197065 },
    area: Area.SENGKANG,
  },
  [Subzone.SKG_COMPASSVALE]: {
    name: { en: "Compassvale" },
    coordinates: { latitude: 1.38490265944, longitude: 103.889967044 },
    area: Area.SENGKANG,
  },
  [Subzone.SKG_FERNVALE]: {
    name: { en: "Fernvale" },
    coordinates: { latitude: 1.39516998908, longitude: 103.876506947 },
    area: Area.SENGKANG,
  },
  [Subzone.SKG_LORONG_HALUS_NORTH]: {
    name: { en: "Lorong Halus North" },
    coordinates: { latitude: 1.3816782387, longitude: 103.910768652 },
    area: Area.SENGKANG,
  },
  [Subzone.SKG_RIVERVALE]: {
    name: { en: "Rivervale" },
    coordinates: { latitude: 1.38761273787, longitude: 103.905003547 },
    area: Area.SENGKANG,
  },
  [Subzone.SKG_SENGKANG_TOWN_CENTRE]: {
    name: { en: "Sengkang Town Centre" },
    coordinates: { latitude: 1.39159521894, longitude: 103.897691046 },
    area: Area.SENGKANG,
  },
  [Subzone.SKG_SENGKANG_WEST]: {
    name: { en: "Sengkang West" },
    coordinates: { latitude: 1.39553474794, longitude: 103.863150921 },
    area: Area.SENGKANG,
  },
  [Subzone.SER_LORONG_CHUAN]: {
    name: { en: "Lorong Chuan" },
    coordinates: { latitude: 1.34847121217, longitude: 103.863220599 },
    area: Area.SERANGOON,
  },
  [Subzone.SER_SELETAR_HILLS]: {
    name: { en: "Seletar Hills" },
    coordinates: { latitude: 1.38347519094, longitude: 103.866358859 },
    area: Area.SERANGOON,
  },
  [Subzone.SER_SERANGOON_CENTRAL]: {
    name: { en: "Serangoon Central" },
    coordinates: { latitude: 1.35223303902, longitude: 103.870675244 },
    area: Area.SERANGOON,
  },
  [Subzone.SER_SERANGOON_GARDEN]: {
    name: { en: "Serangoon Garden" },
    coordinates: { latitude: 1.3627383542, longitude: 103.866662838 },
    area: Area.SERANGOON,
  },
  [Subzone.SER_SERANGOON_NORTH]: {
    name: { en: "Serangoon North" },
    coordinates: { latitude: 1.37438117314, longitude: 103.873384136 },
    area: Area.SERANGOON,
  },
  [Subzone.SER_SERANGOON_NORTH_INDUSTRIAL_ESTATE]: {
    name: { en: "Serangoon North Industrial Estate" },
    coordinates: { latitude: 1.37478448736, longitude: 103.864758529 },
    area: Area.SERANGOON,
  },
  [Subzone.SER_UPPER_PAYA_LEBAR]: {
    name: { en: "Upper Paya Lebar" },
    coordinates: { latitude: 1.34656679391, longitude: 103.877047287 },
    area: Area.SERANGOON,
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
  [Subzone.SMP_PULAU_SELETAR]: {
    name: { en: "Pulau Seletar" },
    coordinates: { latitude: 1.4435442755, longitude: 103.864868488 },
    area: Area.SIMPANG,
  },
  [Subzone.SMP_SIMPANG_NORTH]: {
    name: { en: "Simpang North" },
    coordinates: { latitude: 1.44716140515, longitude: 103.845797553 },
    area: Area.SIMPANG,
  },
  [Subzone.SMP_SIMPANG_SOUTH]: {
    name: { en: "Simpang South" },
    coordinates: { latitude: 1.4344660461, longitude: 103.856393596 },
    area: Area.SIMPANG,
  },
  [Subzone.SMP_TANJONG_IRAU]: {
    name: { en: "Tanjong Irau" },
    coordinates: { latitude: 1.45424160186, longitude: 103.850927879 },
    area: Area.SIMPANG,
  },
  [Subzone.STI_SENTOSA]: {
    name: { en: "Sentosa", zh: "圣淘沙" },
    coordinates: { latitude: 1.24972128593, longitude: 103.829669992 },
    area: Area.SOUTHERN_ISLANDS,
  },
  [Subzone.STV_STRAITS_VIEW]: {
    name: { en: "Straits View" },
    coordinates: { latitude: 1.27125165978, longitude: 103.858773194 },
    area: Area.STRAITS_VIEW,
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
  [Subzone.TAP_BIDADARI]: {
    name: { en: "Bidadari" },
    coordinates: { latitude: 1.34110393554, longitude: 103.874944713 },
    area: Area.TOA_PAYOH,
  },
  [Subzone.TAP_BOON_TECK]: {
    name: { en: "Boon Teck" },
    coordinates: { latitude: 1.33526864187, longitude: 103.853025159 },
    area: Area.TOA_PAYOH,
  },
  [Subzone.TAP_BRADDELL]: {
    name: { en: "Braddell" },
    coordinates: { latitude: 1.34053896496, longitude: 103.849596891 },
    area: Area.TOA_PAYOH,
  },
  [Subzone.TAP_JOO_SENG]: {
    name: { en: "Joo Seng" },
    coordinates: { latitude: 1.33659746641, longitude: 103.882326553 },
    area: Area.TOA_PAYOH,
  },
  [Subzone.TAP_KIM_KEAT]: {
    name: { en: "Kim Keat" },
    coordinates: { latitude: 1.33188761631, longitude: 103.858636359 },
    area: Area.TOA_PAYOH,
  },
  [Subzone.TAP_LORONG_8_TOA_PAYOH]: {
    name: { en: "Lorong 8 Toa Payoh" },
    coordinates: { latitude: 1.34126171105, longitude: 103.857102043 },
    area: Area.TOA_PAYOH,
  },
  [Subzone.TAP_PEI_CHUN]: {
    name: { en: "Pei Chun" },
    coordinates: { latitude: 1.33678993731, longitude: 103.858606955 },
    area: Area.TOA_PAYOH,
  },
  [Subzone.TAP_POTONG_PASIR]: {
    name: { en: "Potong Pasir" },
    coordinates: { latitude: 1.33305604285, longitude: 103.86563786 },
    area: Area.TOA_PAYOH,
  },
  [Subzone.TAP_SENNETT]: {
    name: { en: "Sennett" },
    coordinates: { latitude: 1.3332557183, longitude: 103.873623257 },
    area: Area.TOA_PAYOH,
  },
  [Subzone.TAP_TOA_PAYOH_CENTRAL]: {
    name: { en: "Toa Payoh Central" },
    coordinates: { latitude: 1.33264104361, longitude: 103.845985926 },
    area: Area.TOA_PAYOH,
  },
  [Subzone.TAP_TOA_PAYOH_WEST]: {
    name: { en: "Toa Payoh West" },
    coordinates: { latitude: 1.33992257032, longitude: 103.841793723 },
    area: Area.TOA_PAYOH,
  },
  [Subzone.TAP_WOODLEIGH]: {
    name: { en: "Woodleigh" },
    coordinates: { latitude: 1.34003589625, longitude: 103.866300005 },
    area: Area.TOA_PAYOH,
  },
  [Subzone.TGH_TENGAH]: {
    name: { en: "Tengah" },
    coordinates: { latitude: 1.36384254021, longitude: 103.728753977 },
    area: Area.TENGAH,
  },
  [Subzone.TGL_CHATSWORTH]: {
    name: { en: "Chatsworth" },
    coordinates: { latitude: 1.29703461507, longitude: 103.823402263 },
    area: Area.TANGLIN,
  },
  [Subzone.TGL_NASSIM]: {
    name: { en: "Nassim" },
    coordinates: { latitude: 1.3138608469, longitude: 103.82435728 },
    area: Area.TANGLIN,
  },
  [Subzone.TGL_RIDOUT]: {
    name: { en: "Ridout" },
    coordinates: { latitude: 1.30343427502, longitude: 103.811468698 },
    area: Area.TANGLIN,
  },
  [Subzone.TGL_TYERSALL]: {
    name: { en: "Tyersall" },
    coordinates: { latitude: 1.31458674408, longitude: 103.812945338 },
    area: Area.TANGLIN,
  },
  [Subzone.TUA_TENGEH]: {
    name: { en: "Tengeh" },
    coordinates: { latitude: 1.33847647671, longitude: 103.650248643 },
    area: Area.TUAS,
  },
  [Subzone.TUA_TUAS_BAY]: {
    name: { en: "Tuas Bay" },
    coordinates: { latitude: 1.3183378374, longitude: 103.643914659 },
    area: Area.TUAS,
  },
  [Subzone.TUA_TUAS_NORTH]: {
    name: { en: "Tuas North" },
    coordinates: { latitude: 1.32674591798, longitude: 103.651245061 },
    area: Area.TUAS,
  },
  [Subzone.TUA_TUAS_PROMENADE]: {
    name: { en: "Tuas Promenade" },
    coordinates: { latitude: 1.33198543529, longitude: 103.634908725 },
    area: Area.TUAS,
  },
  [Subzone.TUA_TUAS_VIEW]: {
    name: { en: "Tuas View" },
    coordinates: { latitude: 1.30115452842, longitude: 103.633425282 },
    area: Area.TUAS,
  },
  [Subzone.TUA_TUAS_VIEW_EXTENSION]: {
    name: { en: "Tuas View Extension" },
    coordinates: { latitude: 1.26958296064, longitude: 103.620363085 },
    area: Area.TUAS,
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
  [Subzone.YIS_KHATIB]: {
    name: { en: "Khatib" },
    coordinates: { latitude: 1.41799942647, longitude: 103.828651632 },
    area: Area.YISHUN,
  },
  [Subzone.YIS_LOWER_SELETAR]: {
    name: { en: "Lower Seletar" },
    coordinates: { latitude: 1.40905846684, longitude: 103.846236849 },
    area: Area.YISHUN,
  },
  [Subzone.YIS_NEE_SOON]: {
    name: { en: "Nee Soon" },
    coordinates: { latitude: 1.40751628058, longitude: 103.814643513 },
    area: Area.YISHUN,
  },
  [Subzone.YIS_NORTHLAND]: {
    name: { en: "Northland" },
    coordinates: { latitude: 1.43809471362, longitude: 103.837996503 },
    area: Area.YISHUN,
  },
  [Subzone.YIS_SPRINGLEAF]: {
    name: { en: "Springleaf" },
    coordinates: { latitude: 1.40140910975, longitude: 103.824060693 },
    area: Area.YISHUN,
  },
  [Subzone.YIS_YISHUN_CENTRAL]: {
    name: { en: "Yishun Central" },
    coordinates: { latitude: 1.42670524631, longitude: 103.837659412 },
    area: Area.YISHUN,
  },
  [Subzone.YIS_YISHUN_EAST]: {
    name: { en: "Yishun East" },
    coordinates: { latitude: 1.42790245918, longitude: 103.846587187 },
    area: Area.YISHUN,
  },
  [Subzone.YIS_YISHUN_SOUTH]: {
    name: { en: "Yishun South" },
    coordinates: { latitude: 1.41846051722, longitude: 103.837816444 },
    area: Area.YISHUN,
  },
  [Subzone.YIS_YISHUN_WEST]: {
    name: { en: "Yishun West" },
    coordinates: { latitude: 1.4311390462, longitude: 103.831011589 },
    area: Area.YISHUN,
  },
};

export default subzones;

import { Area, Subzone, SubzoneDetails } from "../interfaces";

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
};

export default subzones;

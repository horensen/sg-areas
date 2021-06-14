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
};

export default subzones;

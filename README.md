# sg-areas

**sg-areas** is a TypeScript library for finding regions, areas and subzones in Singapore.

## Installation

```bash
npm i sg-areas
```

## Usage

```typescript
import {
  administrativeLocations,
  getAreas,
  getSubzones,
  getNearest,
} from "sg-areas";
const { Region, Area, Subzone } = administrativeLocations;
```

### Get areas based on regions

An area (or planning area) in Singapore is the first level of census division. They are organised into different regions.

```typescript
const regions = [
  Region.CENTRAL,
  Region.EAST,
  Region.NORTH,
  Region.NORTHEAST,
  Region.WEST,
]; // any number of regions
const areas = getAreas(regions);

// {
//   "BSH": {
//     "name": {"en": "Bishan", "zh": "碧山"},
//     "coordinates": {"latitude": 1.35382, "longitude": 103.84327},
//     "region": "C"
//   },
//   "BMR": {
//     "name": {"en": "Bukit Merah", "zh": "红山"},
//     "coordinates": {"latitude": 1.27549, "longitude": 103.82313},
//     "region": "C"
//   },
//   "BKT": {
//     "name": {"en": "Bukit Timah", "zh": "武吉知马"},
//     "coordinates": {"latitude": 1.32999, "longitude": 103.7907},
//     "region": "C"
//   },
//   ... and so on ...
// }
```

`regions` may be an empty array or undefined. If so, all areas are returned.

### Get subzones based on areas

A subzone is more granular division within an area.

```typescript
const areas = [Area.TANGLIN]; // any number of areas
const subzones = getSubzones(areas);

// {
//   "TGL_CHA":{
//     "name":{"en":"Chatsworth"},
//     "coordinates":{"latitude":1.29703461507,"longitude":103.823402263},
//     "area":"TGL"
//   },
//   "TGL_NAS":{
//     "name":{"en":"Nassim"},
//     "coordinates":{"latitude":1.3138608469,"longitude":103.82435728},
//     "area":"TGL"
//   },
//   "TGL_RID":{
//     "name":{"en":"Ridout"},
//     "coordinates":{"latitude":1.30343427502,"longitude":103.811468698},
//     "area":"TGL"
//   },
//   "TGL_TYE":{
//     "name":{"en":"Tyersall"},
//     "coordinates":{"latitude":1.31458674408,"longitude":103.812945338},
//     "area":"TGL"
//   }
// }
```

`areas` may be an empty array or undefined. If so, all subzones are returned. The full list of areas are found in `Area`.

### Get nearest area/subzone by given location

```typescript
const MARINA_BAY_SANDS = {latitude: 1.2836491, longitude: 103.8575854};

const proximity = { closest: 1 }; // default is 1

const nearest = getNearest(MARINA_BAY_SANDS, proximity);

// {
//   areas: {
//     DTC: {
//       name: { en: "Downtown Core", zh: "市中心" },
//       coordinates: { latitude: 1.28506, longitude: 103.8543 },
//       region: "C",
//       distance: 398,
//     },
//   },
//   subzones: {
//     DTC_BAY: {
//       name: { en: "Bayfront" },
//       coordinates: { latitude: 1.28333472525, longitude: 103.858533762 },
//       area: "DTC",
//       distance: 111,
//     },
//   },
// }
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

import { getDistance } from "geolib";

import * as data from "./data";
import {
  Region,
  Area,
  AreaDetails,
  Coordinates,
  ProximityConditions,
  Subzone,
  SubzoneDetails,
} from "./interfaces";

export const administrativeLocations = { Region, Area, Subzone };

export const getAreas = (regions?: Region[]): { [id: string]: AreaDetails } => {
  if (regions && regions.length > 0) {
    return Object.keys(data.areas.default)
      .filter((id: string) =>
        regions.includes(data.areas.default[id as Area].region),
      )
      .reduce((obj: { [id: string]: AreaDetails }, id: string) => {
        obj[id] = data.areas.default[id as Area];
        return obj;
      }, {});
  }
  return data.areas.default;
};

export const getSubzones = (
  areas?: Area[],
): { [id: string]: SubzoneDetails } => {
  if (areas && areas.length > 0) {
    return Object.keys(data.subzones.default)
      .filter((id: string) =>
        areas.includes(data.subzones.default[id as Subzone].area),
      )
      .reduce((obj: { [id: string]: SubzoneDetails }, id: string) => {
        obj[id] = data.subzones.default[id as Subzone];
        return obj;
      }, {});
  }
  return data.subzones.default;
};

export const getNearest = (
  origin: Coordinates,
  options: ProximityConditions = { closest: 1 },
): {
  areas: { [id: string]: AreaDetails };
  subzones: { [id: string]: SubzoneDetails };
} => {
  if (options.closest <= 0) return { areas: {}, subzones: {} };

  const areas = data.areas.default;
  const subzones = data.subzones.default;

  const areaResults = {} as { [id: string]: AreaDetails };
  const subzoneResults = {} as { [id: string]: SubzoneDetails };

  let temp = [] as any;

  const appendDistance = (locations: any) => {
    Object.keys(locations).forEach((id) => {
      const loc = locations[id];
      if (loc.coordinates) {
        const distance = getDistance(origin, loc.coordinates, 1);
        temp.push({ id, ...loc, distance });
      }
    });
  };

  const sortSliceFormat = (locationResults: any) => {
    return temp
      .sort((a: { distance: number }, b: { distance: number }) => {
        return a.distance < b.distance ? -1 : 1;
      })
      .slice(0, options.closest)
      .forEach((obj: any) => {
        const id = obj.id;
        delete obj.id;
        locationResults[id] = obj;
      });
  };

  appendDistance(areas);
  sortSliceFormat(areaResults);

  appendDistance(subzones);
  sortSliceFormat(subzoneResults);

  return {
    areas: areaResults,
    subzones: subzoneResults,
  };
};

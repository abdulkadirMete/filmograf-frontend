import moment from "moment";
import trLocale from "moment/locale/tr";
import { defaultPhoto, scrollSettings } from "../data/options";
const scrollToElement = require("scroll-to-element");

// object check empty
export function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

// return user image for all conditions
export function purifyUserImage(image) {
  return image
    ? `${process.env.REACT_APP_USE_IMAGE_URL}${image}`
    : defaultPhoto;
}

// deminden şimdiye geldim
export const timeFromNow = (timestamp) =>
  moment(timestamp).locale("tr", trLocale).fromNow();

// scroll to divider
export const scrollToDivider = () => {
  scrollToElement("#divider", { ...scrollSettings });
};

// determine url string
export const determineUrl = (
  hasRobotFilter,
  robotFilterValues,
  type,
  release,
  imdb,
  page
) => {
  if (type && !hasRobotFilter) {
    return `/filter/types/${type}/${page}`;
  } else if (release && !hasRobotFilter) {
    return `/filter/release/${release}/${page}`;
  } else if (hasRobotFilter) {
    return `/filter/robot/${page}?type=${robotFilterValues.type}&release=${robotFilterValues.release}&imdb=${robotFilterValues.imdb}`;
  } else {
    return `/movies/${page}`;
  }
};

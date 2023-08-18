/* eslint-disable no-unused-vars */

// FIXME we don't know sizes, need to add some conditions and rewrite the code
const SMALL_SIZE = 25;
const NORMAL_SIZE = 101;
const DEFAULT_SIZE = 257;

const URL = 'https://static.ui.com/fingerprint/ui/icons';

export enum IconSize {
  Small,
  Normal,
}

export const buildUrl = ({ iconId, width, height }: { iconId: string; width: number; height: number }) => {
  return `${URL}/${iconId}_${width}x${height}.png`;
};

export const getIconSource = ({ iconId, resolutions, iconSize }: IconSource) => {
  const size = resolutions.find(([width]) => {
    if (iconSize === IconSize.Small) {
      return width === SMALL_SIZE;
    }

    if (iconSize === IconSize.Normal) {
      return width === NORMAL_SIZE;
    }

    return width === DEFAULT_SIZE;
  });

  return size ? buildUrl({ iconId, width: size[0], height: size[1] }) : null;
};

interface IconSource {
  iconId: string;
  iconSize?: IconSize;
  resolutions: [number, number][];
}

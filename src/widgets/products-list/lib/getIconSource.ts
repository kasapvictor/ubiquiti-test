import { ProductsViewMode, TResolution } from '@entities/products';

const SMALL_SIZE = 25;
const MIDDLE_SIZE = 101;
const DEFAULT_SIZE = 257;

const URL = 'https://static.ui.com/fingerprint/ui/icons';

export const buildUrl = ({ id, width, height }: { id: string; width: number; height: number }) => {
  return `${URL}/${id}_${width}x${height}.png`;
};

export const getIconSource = ({ id, resolutions, mode }: IconSource) => {
  // FIXME we don't know sizes, need to add some conditions or rewrite

  const size = resolutions.find(([width]) => {
    if (mode === ProductsViewMode.List) {
      return width === SMALL_SIZE;
    }

    if (mode === ProductsViewMode.Grid) {
      return width === MIDDLE_SIZE;
    }

    return width === DEFAULT_SIZE;
  });

  const width = size ? size[0] : 0;
  const height = size ? size[1] : 0;

  return buildUrl({ id, width, height });
};

interface IconSource {
  id: string;
  resolutions: TResolution[];
  mode: ProductsViewMode;
}

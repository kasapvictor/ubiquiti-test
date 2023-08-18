import { ProductsViewMode, TResolution } from '@entities/products';

const URL = 'https://static.ui.com/fingerprint/ui/icons';

export const buildUrl = ({ id, width, height }: { id: string; width: number; height: number }) => {
  return `${URL}/${id}_${width}x${height}.png`;
};

export const getIconSource = ({ id, resolutions, mode }: IconSource) => {
  const size = resolutions.find(([width]) => {
    if (mode === ProductsViewMode.List) {
      return width === 25;
    }

    if (mode === ProductsViewMode.Grid) {
      return width === 101;
    }

    return width === 257;
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

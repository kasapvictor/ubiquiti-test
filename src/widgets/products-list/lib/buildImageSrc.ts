const URL = 'https://static.ui.com/fingerprint/ui/icons';

export const buildImageSrc = ({ id, width, height }: { id: string; width: number; height: number }) => {
  return `${URL}/${id}_${width}x${height}.png`;
};

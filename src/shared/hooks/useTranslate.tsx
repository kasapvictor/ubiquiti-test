// import { TFunctionDetailedResult } from 'i18next';
import { useTranslation } from 'react-i18next';

interface UseTranslateProps {
  namespace?: string;
  keyPrefix: string;
}

interface TProps {
  [key: string]: string;
}

export const useTranslate = ({ namespace = 'translation', keyPrefix }: UseTranslateProps) => {
  const { t: _t, i18n } = useTranslation(namespace, { keyPrefix });

  return {
    t: (key: string, options: TProps = {}): string => {
      const translationResult = _t(key, options);

      return translationResult as string;
    },
    i18n,
  };
};

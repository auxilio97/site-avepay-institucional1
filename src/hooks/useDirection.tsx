import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const rtlLanguages = ['ar'];

export const useDirection = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const isRtl = rtlLanguages.includes(i18n.language);
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);
};
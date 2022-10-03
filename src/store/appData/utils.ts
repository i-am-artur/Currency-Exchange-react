import { defaultLanguage, languages } from './data';

export const getUserLanguage = (): string => {
  const userLanguage = Object.values(languages).find(
    (key) => languages[key].toLowerCase() === navigator.language,
  );

  return userLanguage ?? defaultLanguage;
};

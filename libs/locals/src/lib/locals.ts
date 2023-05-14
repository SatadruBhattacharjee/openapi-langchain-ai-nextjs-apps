import EN from './en';
import CN from './cn';

export const AllLangs = ['en', 'cn'] as const;
export type Lang = (typeof AllLangs)[number];

const LANG_KEY = 'lang';
const DEFAULT_LANG = 'en';

export type { LocaleType } from './cn';

function getItem(key: string) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function setItem(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    console.log('[Lang] failed to save lang.');
  }
}

function getLanguage() {
  try {
    return navigator.language.toLowerCase();
  } catch {
    console.log('[Lang] failed to detect user lang.');
    return DEFAULT_LANG;
  }
}

export function getLang(): Lang {
  const savedLang = getItem(LANG_KEY);

  if (AllLangs.includes((savedLang ?? '') as Lang)) {
    return savedLang as Lang;
  }

  const lang = getLanguage();

  for (const option of AllLangs) {
    if (lang.includes(option)) {
      return option;
    }
  }

  return DEFAULT_LANG;
}

export function changeLang(lang: Lang) {
  setItem(LANG_KEY, lang);
  location.reload();
}


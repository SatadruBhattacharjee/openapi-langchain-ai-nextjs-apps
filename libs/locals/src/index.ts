import { AllLangs, getLang } from './lib/locals';
import EN from './lib/en';
import CN from './lib/cn';

export * from './lib/locals';

export default {
  en: EN,
  cn: CN,
}[getLang()] as typeof EN;

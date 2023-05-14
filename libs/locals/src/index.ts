import { AllLangs, getLang } from './lib/locals';
import EN from './lib/en';
import IN from './lib/in';

export * from './lib/locals';

export default {
  en: EN,
  in: IN,
}[getLang()] as typeof EN;

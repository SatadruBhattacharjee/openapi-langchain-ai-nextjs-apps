import { AllLangs, getLang } from './lib/locals';
import EN from './lib/en';
import IN from './lib/in';
import AR from './lib/ar';

export * from './lib/locals';

export default {
  en: EN,
  in: IN,
  ar: AR,
}[getLang()] as typeof EN;

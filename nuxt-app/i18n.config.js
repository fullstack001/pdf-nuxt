 
import ar from './locales/ar.json';
import bg from './locales/bg.json';
import ca from './locales/ca.json';
import de from './locales/de.json';
import el from './locales/el.json';
import en from './locales/en.json';
import es from './locales/es.json';
import fr from './locales/fr.json';
import hi from './locales/hi.json';
import id from './locales/id.json';
import it from './locales/it.json';
import ja from './locales/ja.json';
import ko from './locales/ko.json';
import ms from './locales/ms.json';

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        ar,
        bg,
        ca,
        de,
        el,
        en,
        es,
        fr,
        hi,
        id,
        it,
        ja,
        ko,
        ms,
    }
}));


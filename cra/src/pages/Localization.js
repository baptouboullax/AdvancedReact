import { IntlProvider, FormattedMessage } from 'react-intl';
import Fr from '../translations/fr.json';
import En from '../translations/en.json';

const locale = navigator.language;
const translationEnum = {
    "fr": Fr,
    "en": En
};

export const Localization = () => <IntlProvider
    messages={translationEnum[locale]}
    locale={locale}
    defaultLocale="en"
>
    <h1>Localization</h1>
    <FormattedMessage
        id="myMessage"
        defaultMessage="Today is {ts, date, :::yyyyMMdd}."
        values={{ ts: Date.now() }}
    />
    <br/>
    <FormattedMessage
        id="myMessage2"
        defaultMessage="Yesterday, I ate an apple."
    />

</IntlProvider>;

import { IntlProvider, FormattedMessage } from 'react-intl';
import Fr from '../translations/fr.json';

const locale = navigator.language;
const translationEnum = {
    "fr": Fr
};

export const Localization = () => <IntlProvider
    messages={translationEnum[locale]}
    locale={locale}
    defaultLocale="en"
>
    <h1>Localization</h1>
    <FormattedMessage
        id="myMessage"
        defaultMessage="Today is {ts, date, :::yyyyMMdd}"
        values={{ ts: Date.now() }}
/>
</IntlProvider>;
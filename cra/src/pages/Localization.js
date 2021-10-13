import { IntlProvider, FormattedMessage } from 'react-intl';
import { useEffect, useState } from 'react';
import Fr from '../translations/fr.json';
import En from '../translations/en.json';

const locale = navigator.language;
const translationEnum = {
    "fr": Fr,
    "en": En
};

export const Localization = () => {
    const [currentValue, setCurrentValue] = useState({
        nom: localStorage.getItem("nom") ? localStorage.getItem("nom") : 'XXXX',
        prenom: localStorage.getItem("prenom") ? localStorage.getItem("prenom") : 'XXXX'
    });

    const onFormSubmit = form => {
        form.preventDefault();
        const formData = new FormData(form.target);
        localStorage.setItem('nom', formData.get("nom"));
        localStorage.setItem('prenom', formData.get("prenom"));
        setCurrentValue({
            nom: localStorage.getItem('nom'),
            prenom: localStorage.getItem('prenom')
        });
    };

    const onTextChange = (input) => {
        setCurrentValue(input.target.value);
    };

    return <IntlProvider
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
        <br />
        <FormattedMessage
            id="myMessage2"
            defaultMessage="Yesterday, I ate an apple."
        />

        <h4>{currentValue.nom} {currentValue.prenom}</h4>

        <form onSubmit={onFormSubmit}>
            <input type="text" name="nom" className="form-control" onChange={onTextChange}></input>
            <input type="text" name="prenom" className="form-control"></input>
            <button className="btn btn-warning">Submit</button>
        </form>

    </IntlProvider>;
}

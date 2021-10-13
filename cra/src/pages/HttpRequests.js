import Axios from 'axios';
import {
    useEffect,
    useState
} from 'react';
import { CustomMap } from '../components/CustomMap';


const getCountries = () => Axios.get("https://restcountries.com/v3.1/all");

export const HttpRequests = () => {
    // équivalent de setState()
    const [countries, setCountries] = useState([]);

    // équivalent de componentDidMount()
    useEffect(
        () => getCountries()
            .then(results => {
                setCountries(results.data);
            })
            .catch(error => {
                throw error;
            })
        , []
    );

    return <>
        <h1>HTTP Requests</h1>
        <CustomMap countries={countries} />
    </>;
}

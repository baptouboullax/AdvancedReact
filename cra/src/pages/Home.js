import {
    Link
} from "react-router-dom";
import { observer } from 'mobx-react-lite';

import Instance from '../instance';
import Profile from '../pages/Observables/profile';

const links = [
    {
        to: '/classvsfunctions',
        label: 'Class vs Functions'
    },
    {
        to: '/localization',
        label: 'Localization'
    },
    {
        to: '/http-requests',
        label: 'HTTP Requests'
    },
    {
        to: '/use-ref',
        label: 'UseRef'
    },
    {
        to: '/use-reducer',
        label: 'Use Reducer'
    },
    {
        to: '/observables',
        label: 'Observables'
    },
    {
        to: '/redux',
        label: 'Redux'
    }
]

const UserCount = observer(() => <>{Profile.users.length} utilisateurs :)</>);

export const Home = () => <div>
    <h1>{Instance.name}</h1>
    <div className="list-group">
        {links.map((link, index) => <Link key={'link-' + index} className="list-group-item list-group-item-action" to={link.to}>{link.label}</Link>)}
    </div>
    <UserCount />
</div>;

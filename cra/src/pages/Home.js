import {
    Link
} from "react-router-dom";

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
    }
]

export const Home = () => <div>
    <h1>React Avancé</h1>
    <div className="list-group">
        {links.map((link, index) => <Link key={'link-' + index} className="list-group-item list-group-item-action" to={link.to}>{link.label}</Link>)}
    </div>
</div>;

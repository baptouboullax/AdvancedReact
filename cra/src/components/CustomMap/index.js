import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

export const CustomMap = props => {
    const ListMarkers = () => props.countries.map(
        (country, index) => {
            const flagIcon = new L.icon({
                iconUrl: country.flags.svg,
                iconSize: [50, 33]
            });

            return <Marker position={country.latlng} key={index} icon={flagIcon}>
                <Popup>
                    {country.name.common} <br/>
                    Pop. : {country.population}
                </Popup>
            </Marker>
        }
    );

    return <div className="w-100 mb-3">
        {props.countries.length} countries :)
        <Map center={[0, 0]} zoom={3} maxZoom={18} minZoom={1}>
            <TileLayer
                attribution={'&amp;copy <a href="http://osm.org/copyright">OpenStreetMap contributors'}
                url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
            />
            <ListMarkers />
        </Map>
    </div>;
};

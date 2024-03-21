import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const svgString = `<svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.56191 19.3144C7.9571 19.3144 15.0184 11.7698 15.0184 7.65175C15.0184 3.53367 11.68 0.195312 7.56191 0.195312C3.44383 0.195312 0.105469 3.53367 0.105469 7.65175C0.105469 11.7698 7.16673 19.3144 7.56191 19.3144ZM7.56192 11.3812C9.64979 11.3812 11.3424 9.68863 11.3424 7.60076C11.3424 5.51289 9.64979 3.82034 7.56192 3.82034C5.47406 3.82034 3.78151 5.51289 3.78151 7.60076C3.78151 9.68863 5.47406 11.3812 7.56192 11.3812Z" fill="#99CFE2"/>
</svg>`;
const svgUrl = `data:image/svg+xml;base64,${btoa(svgString)}`;

const customMarkerIcon = L.icon({
    iconUrl: svgUrl,
    iconSize: [25, 25], 
    iconAnchor: [12, 41], 
    popupAnchor: [1, -34]
});

export default function MapPDV({PDVLocations}) {
    
    return (
        <MapContainer center={[46.603354, 1.888334]} zoom={6} style={{ width: "600px", height: "600px" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='Pharmacie partenaires - Molécules' />
            {PDVLocations.map((PDV, index) => (
                <Marker key={index} position={PDV.position} icon={customMarkerIcon}>
                    <Popup>{PDV.address}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}

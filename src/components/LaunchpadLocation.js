// import styles from style modules
import styles from '../styles/LaunchpadLocation.module.css';

// import required componets from leaflets  modules
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function LaunchpadLocation({ coordinates }) {
    const lat = coordinates.latitude;
    const lon = coordinates.longitude;
    let position = [0, -0]
    if (lat) {
        position = [lat, lon]
        return (
            <div className={styles.cardList}>
                <MapContainer center={position} zoom={7} scrollWheelZoom={false}>
                    <TileLayer
                        url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        )
    }
}
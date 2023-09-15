import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import { useAppSelector } from "../../store";
import { useEffect } from "react";

interface PositionStructure {
  lat: number;
  lng: number;
}
const Map = (): React.ReactElement => {
  const cords = useAppSelector((state) => state.city.cords);

  const position: PositionStructure = {
    lat: parseFloat(cords.lat),
    lng: parseFloat(cords.lon),
  };

  const MapCenter = (position: PositionStructure) => {
    const map = useMap();
    useEffect(() => {
      map.setView([position.lat, position.lng]);
    }, [position.lat, position.lng, map]);
    return null;
  };

  return (
    <>
      <MapContainer
        id="map"
        center={position}
        zoom={13}
        zoomControl={true}
        scrollWheelZoom={true}
        style={{ width: 345, height: 180, marginTop: 15 }}
      >
        <MapCenter lat={position.lat} lng={position.lng} />
        <Marker
          position={{
            lng: position.lng,
            lat: position.lat,
          }}
        ></Marker>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </>
  );
};

export default Map;

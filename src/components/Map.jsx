// src/components/Map.js
import React, { useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ center, zoom, onLocationChange }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.leafletElement.on('click', (e) => {
        const { lat, lng } = e.latlng;
        onLocationChange({ lat, lng });
      });
    }
  }, [onLocationChange]);

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: '300px', width: '100%' }}
      whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={center}>
        <Popup>
          Current Location
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;

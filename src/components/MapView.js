import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Paper } from '@mui/material';

const mapStyle = {
  width: '100%',
  height: '100%'
};

function MapView({ stops, optimizedRoute }) {
  const center = [40.7128, -74.0060]; // New York City coordinates

  return (
    <Paper sx={{ flex: 1, overflow: 'hidden' }}>
      <MapContainer
        center={center}
        zoom={13}
        style={mapStyle}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {stops.map((stop, index) => (
          stop.coordinates && (
            <Marker
              key={stop.id}
              position={[stop.coordinates.lat, stop.coordinates.lng]}
            >
              <Popup>
                Stop {index + 1}: {stop.address}
              </Popup>
            </Marker>
          )
        ))}
      </MapContainer>
    </Paper>
  );
}

export default MapView;

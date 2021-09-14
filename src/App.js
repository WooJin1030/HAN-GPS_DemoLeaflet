import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import localforage from "localforage";
import "leaflet-offline";

const App = () => {
  useEffect(() => {
    const map = L.map("map-id");
    const offlineLayer = L.tileLayer.offline(
      "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      localforage,
      {
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        subdomains: "abc",
        minZoom: 13,
        maxZoom: 19,
        crossOrigin: true,
      }
    );
    offlineLayer.addTo(map);
  });

  return (
    <div className="App">
      <div id="map-id">
        <MapContainer
          center={[37.47386563818747, 127.14299349434039]}
          zoom={13}
          maxZoom={16}
          id="map"
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            maxZoom={16}
            tileSize={512}
            zoomOffset={-1}
          />
          <Marker position={[37.47386563818747, 127.14299349434039]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default App;

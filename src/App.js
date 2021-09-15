import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Circle, Marker } from "react-leaflet";
import L from "leaflet";
import localforage from "localforage";
import "leaflet-offline";
import AllLocationUsers from "./Components/AllLocationUsers";

const App = () => {
  const [initMap, setInitMap] = useState({
    lat: 37.47386563818747,
    lon: 127.14299349434039,
    zoom: 16,
    maxZoom: 16,
  });

  const [initTileLayer, setInitTileLayer] = useState({
    attribution:
      '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    maxZoom: 16,
    tileSize: 512,
    zoomOffset: -1,
  });

  const [initCircle, setInitCircle] = useState({
    lat: 37.47386563818747,
    lon: 127.14299349434039,
    fillOpacity: 0.6,
    color: "skyblue",
    radius: 500,
  });

  const [initCenterMarker, setInitCenterMarker] = useState({
    lat: 37.47386563818747,
    lon: 127.14299349434039,
  });

  // 중심 마커
  const iconCenter = new L.Icon({
    iconUrl:
      "https://user-images.githubusercontent.com/62231339/132805364-f99877c0-5909-403a-aede-7dc11421a6a6.png",
    iconRetinaUrl:
      "https://user-images.githubusercontent.com/62231339/132805364-f99877c0-5909-403a-aede-7dc11421a6a6.png",
    iconAnchor: null,
    popupAnchor: [0, 0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(50, 60),
    className: "leaflet-div-centerIcon",
  });

  // 오프라인에서도 가능하게 하기
  const offLineMap = () => {
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
  };

  useEffect(() => {
    offLineMap();
  }, []);

  return (
    <div className="App">
      <div id="map-id">
        <MapContainer
          center={[initMap.lat, initMap.lon]}
          zoom={initMap.zoom}
          maxZoom={initMap.maxZoom}
          id="map"
        >
          <TileLayer
            attribution={initTileLayer.attribution}
            url={initTileLayer.url}
            maxZoom={initTileLayer.maxZoom}
            tileSize={initTileLayer.tileSize}
            zoomOffset={initTileLayer.zoomOffset}
          />
          <Circle
            center={[initCircle.lat, initCircle.lon]}
            color={initCircle.color}
            radius={initCircle.radius}
            fillOpacity={initCircle.fillOpacity}
          />
          <Marker
            position={[initCenterMarker.lat, initCenterMarker.lon]}
            icon={iconCenter}
          />
          <AllLocationUsers
            initMap={initMap}
            initCircle={initCircle}
          ></AllLocationUsers>
        </MapContainer>
      </div>
    </div>
  );
};

export default App;

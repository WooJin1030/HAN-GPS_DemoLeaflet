import React, { useState } from "react";
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  Circle,
  Marker,
  Polygon,
} from "react-leaflet";
import { Popup as ReactPopup } from "reactjs-popup";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import AllLocationUsers from "./Components/AllLocationUsers";
import "reactjs-popup/dist/index.css";
// import "leaflet-offline";
// import localforage from "localforage";

const ChangeOptionsBtn = styled.button`
  position: absolute;
  top: 130px;
  right: 256px;
  padding: 10px 42px;
`;

const ShapeOptions = styled.div`
  position: absolute;
  top: 130px;
  left: 160px;
  display: flex;
`;

const CircleBtn = styled.button`
  padding: 10px 50px;
  margin-right: 8px;
`;

const PolygonBtn = styled.button`
  padding: 10px 50px;
`;

const App = () => {
  const { register, handleSubmit } = useForm();

  // 원형인지 다각형인지
  const [isCircle, setIsCircle] = useState(true); // default는 원형
  const [isPolygon, setIsPolygon] = useState(false);

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
    fillOpacity: 0.3,
    color: "#00acc1",
    radius: 500,
  });

  const [initPolygon, setInitPolygon] = useState({
    fillOpacity: 0.3,
    color: "#00acc1",
    path: [
      [37.47856563818747, 127.14299349434039],
      [37.47386563818747, 127.14850349434039],
      [37.46976563818747, 127.14799349434039],
      [37.46886563818747, 127.14199349434039],
      [37.47386563818747, 127.13489349434039],
    ],
  });

  const [initCenterMarker, setInitCenterMarker] = useState({
    lat: 37.47386563818747,
    lon: 127.14299349434039,
  });

  // 중심 마커
  const iconCenter = new L.Icon({
    iconUrl:
      "https://user-images.githubusercontent.com/62231339/134606859-120b96e3-15b7-4e66-b12f-16ceab80d6d4.png",
    iconRetinaUrl:
      "https://user-images.githubusercontent.com/62231339/134606859-120b96e3-15b7-4e66-b12f-16ceab80d6d4.png",
    iconAnchor: [25, 45],
    popupAnchor: [0, 10],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(50, 60),
    className: "leaflet-div-centerIcon",
  });

  // 오프라인에서도 가능하게 하기
  // const offLineMap = () => {
  //   const map = L.map("map-id");
  //   const offlineLayer = L.tileLayer.offline(
  //     "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  //     localforage,
  //     {
  //       attribution:
  //         '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  //       subdomains: "abc",
  //       minZoom: 13,
  //       maxZoom: 16,
  //       crossOrigin: true,
  //     }
  //   );
  //   offlineLayer.addTo(map);
  // };

  // 원의 중심 위도/경도, 반지름 바꾸기
  const onSubmitCircle = (data) => {
    if (!data.lat || !data.lon || !data.radius)
      alert("모든 항목을 채워야 합니다.");

    setInitMap({
      lat: data.lat,
      lon: data.lon,
    });

    setInitCircle({
      lat: data.lat,
      lon: data.lon,
      radius: data.radius,
    });

    setInitCenterMarker({
      lat: data.lat,
      lon: data.lon,
    });
  };

  // 다각형의 위도/경도 바꾸기
  const onSubmitPolygon = (data) => {
    if (!data.lat3 || !data.lon3)
      alert("세번째 위도 경도까지는 채워야 합니다.");

    if (!data.lat4 && !data.lon4) {
      setInitPolygon({
        path: [
          [data.lat1, data.lon1],
          [data.lat2, data.lon2],
          [data.lat3, data.lon3],
        ],
      });
    } else if (!data.lat5 && !data.lon5) {
      setInitPolygon({
        path: [
          [data.lat1, data.lon1],
          [data.lat2, data.lon2],
          [data.lat3, data.lon3],
          [data.lat4, data.lon4],
        ],
      });
    } else {
      setInitPolygon({
        path: [
          [data.lat1, data.lon1],
          [data.lat2, data.lon2],
          [data.lat3, data.lon3],
          [data.lat4, data.lon4],
          [data.lat5, data.lon5],
        ],
      });
    }
  };

  // reset하면 새로고침
  const onClickReset = () => {
    window.location.reload();
  };

  // useEffect(() => {
  // }, []);

  return (
    <div className="App">
      <div id="map-id">
        <MapContainer
          center={
            [initMap.lat, initMap.lon]
              ? [initMap.lat, initMap.lon]
              : [37.47386563818747, 127.14299349434039]
          }
          zoom={initMap.zoom ? 16 : 16}
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

          {/* 원형 / 다각형 선택 */}
          {isCircle && !isPolygon ? (
            <>
              <Circle
                center={[initCircle.lat, initCircle.lon]}
                color={initCircle.color}
                radius={initCircle.radius}
                fillOpacity={initCircle.fillOpacity}
              />

              {/* 중심 마커 */}
              <Marker
                position={[initCenterMarker.lat, initCenterMarker.lon]}
                icon={iconCenter}
              />
            </>
          ) : null}

          {!isCircle && isPolygon ? (
            <Polygon
              color={initPolygon.color}
              fillOpacity={initPolygon.fillOpacity}
              positions={initPolygon.path}
            />
          ) : null}

          {/* 다른 지도 요소들 */}
          <AllLocationUsers
            initMap={initMap}
            initCircle={initCircle}
            initPolygon={initPolygon}
            isCircle={isCircle}
            isPolygon={isPolygon}
            initCenterMarker={initCenterMarker}
          ></AllLocationUsers>
        </MapContainer>

        {/* 원형일때의 팝업 : 다각형일때의 팝업 */}
        {isCircle ? (
          <ReactPopup
            trigger={
              <ChangeOptionsBtn className="optionsBtn">
                {" "}
                Change Options
              </ChangeOptionsBtn>
            }
            position="left center"
          >
            <form
              className="circleForm"
              onSubmit={handleSubmit(onSubmitCircle)}
            >
              <input
                className="circleRow"
                {...register("lat")}
                placeholder="중심 위도"
              ></input>
              <input
                className="circleRow"
                {...register("lon")}
                placeholder="중심 경도"
              ></input>
              <input
                className="circleRow"
                {...register("radius")}
                placeholder="범위의 반지름"
              ></input>
              <div className="mapOptionBtns">
                <input type="submit" value="Change"></input>
                <button
                  type="button"
                  className="resetBtn"
                  onClick={onClickReset}
                >
                  Reset
                </button>
              </div>
            </form>
          </ReactPopup>
        ) : (
          <ReactPopup
            trigger={
              <ChangeOptionsBtn className="optionsBtn">
                {" "}
                Change Options
              </ChangeOptionsBtn>
            }
            position="left center"
          >
            <form
              className="polygonForm"
              onSubmit={handleSubmit(onSubmitPolygon)}
            >
              <div className="inputRow">
                <input
                  className="polygonRow"
                  {...register("lat1")}
                  placeholder="첫번째 위도"
                ></input>
                <input
                  className="polygonRow"
                  {...register("lon1")}
                  placeholder="첫번째 경도"
                ></input>
              </div>
              <div className="inputRow">
                <input
                  className="polygonRow"
                  {...register("lat2")}
                  placeholder="두번재 위도"
                ></input>
                <input
                  className="polygonRow"
                  {...register("lon2")}
                  placeholder="두번재 경도"
                ></input>
              </div>
              <div className="inputRow">
                <input
                  className="polygonRow"
                  {...register("lat3")}
                  placeholder="세번째 위도"
                ></input>
                <input
                  className="polygonRow"
                  {...register("lon3")}
                  placeholder="세번째 경도"
                ></input>
              </div>
              <div className="inputRow">
                <input
                  className="polygonRow"
                  {...register("lat4")}
                  placeholder="네번째 위도"
                ></input>
                <input
                  className="polygonRow"
                  {...register("lon4")}
                  placeholder="네번째 경도"
                ></input>
              </div>
              <div className="inputRow">
                <input
                  className="polygonRow"
                  {...register("lat5")}
                  placeholder="다섯번째 위도"
                ></input>
                <input
                  className="polygonRow"
                  {...register("lon5")}
                  placeholder="다섯번째 경도"
                ></input>
              </div>

              <div className="mapOptionBtns">
                <input type="submit" value="Change"></input>
                <button
                  type="button"
                  className="resetBtn"
                  onClick={onClickReset}
                >
                  Reset
                </button>
              </div>
            </form>
          </ReactPopup>
        )}

        {/* 원형인지 다각형인지 선택하는 버튼 */}
        <ShapeOptions>
          <CircleBtn
            className="circleBtn"
            onClick={() => {
              setIsCircle(true);
              setIsPolygon(false);
            }}
          >
            Circle Range
          </CircleBtn>
          <PolygonBtn
            className="polygonBtn"
            onClick={() => {
              setIsCircle(false);
              setIsPolygon(true);
            }}
          >
            Polygon Range
          </PolygonBtn>
        </ShapeOptions>
      </div>
    </div>
  );
};

export default App;

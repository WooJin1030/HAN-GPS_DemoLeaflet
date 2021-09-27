import React from "react";
import useAxios from "axios-hooks";
import axios from "axios";
import { Marker, Popup, Polyline } from "react-leaflet";
import L from "leaflet";
import DeleleteBtn from "./DeleteBtn";
import styled from "styled-components";

const ButtonContainer = styled.div`
  position: absolute;
  top: 80px;
  right: 256px;
  display: flex;
  flex-direction: column;
`;

const RefetchBtn = styled.button`
  padding: 10px 50px;
`;

const AllLocationUsers = ({
  initMap,
  initCircle,
  initPolygon,
  isCircle,
  isPolygon,
}) => {
  const BaseURL = "https://www.gpsdemo.shop/";
  const usersId = [];

  // 범위 안의 마커
  let iconMarkerIn = new L.Icon({
    iconUrl:
      "https://user-images.githubusercontent.com/62231339/133370867-f3db9284-04b2-4900-beb7-ddcc15300eaf.png",
    iconRetinaUrl:
      "https://user-images.githubusercontent.com/62231339/133370867-f3db9284-04b2-4900-beb7-ddcc15300eaf.png",
    iconAnchor: null,
    popupAnchor: [0, -15],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(18, 28),
    className: "leaflet-div-centerIcon",
  });

  // 범위 밖의 마커
  let iconMarkerOut = new L.Icon({
    iconUrl:
      "https://user-images.githubusercontent.com/62231339/134607908-ab411f67-e183-4120-8f72-89b9016e56da.png",
    iconRetinaUrl:
      "https://user-images.githubusercontent.com/62231339/134607908-ab411f67-e183-4120-8f72-89b9016e56da.png",
    iconAnchor: null,
    popupAnchor: [0, -20],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(70, 75),
    className: "leaflet-div-centerIcon",
  });

  // 위도 경도로 거리 계산
  const getDistanceFromLatLonInKm = (lat1, lng1, lat2, lng2) => {
    function deg2rad(deg) {
      return deg * (Math.PI / 180);
    }

    let R = 6371; // Radius of the earth in km
    let dLat = deg2rad(lat2 - lat1); // deg2rad below
    let dLon = deg2rad(lng2 - lng1);
    let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c; // Distance in km
    return d * 1000;
  };

  // 랜덤 색
  const random_rgb = () => {
    let o = Math.round,
      r = Math.random,
      s = 200;
    return `rgb(${o(r() * s)}, ${o(r() * s)}, ${o(r() * s)})`;
  };

  // 위치정보값을 가지고 있는 유저 데이터
  const [{ data, loading, error }, refetch] = useAxios(
    `${BaseURL}users/all-location`
  );

  if (!loading && !error) {
    data.result.forEach((user) => {
      //아이디 뽑아내기
      if (!usersId.includes(user.id)) usersId.push(user.id);
    });
  }

  // Polyline을 위한 Array
  // 0: {sam: Array(2)}
  // 2: {woo: Array(2)}
  let pathLines = [];
  if (!loading && !error) {
    data.result.forEach((user, index) => {
      for (let i = 0; i < usersId.length; i++) {
        if (usersId[i] === user.id) {
          let obj = {};
          obj[user.id] = [user.latitude, user.longitude];
          pathLines.push(obj);
        }
      }
    });
  }

  // 범위 밖 유저
  const outOfRange = async (userIdx) => {
    await axios
      .patch(`${BaseURL}restricts/in-out`, {
        userIdx: userIdx,
        restrictStatus: "N",
      })
      .then((response) => console.log("out of range!"))
      .catch((error) => console.log(error));
  };

  // 범위 안 유저
  const inOfRange = async (userIdx) => {
    await axios
      .patch(`${BaseURL}restricts/in-out`, {
        userIdx: userIdx,
        restrictStatus: "Y",
      })
      .then((response) => console.log("in range!"))
      .catch((error) => console.log(error));
  };

  return (
    <>
      {!loading && !error
        ? data.result.map((user, index) => {
            if (
              getDistanceFromLatLonInKm(
                initMap.lat,
                initMap.lon,
                user.latitude,
                user.longitude
              ) > initCircle.radius
            ) {
              outOfRange(user.userIdx);
              return (
                <Marker
                  key={index}
                  position={[user.latitude, user.longitude]}
                  icon={iconMarkerOut}
                >
                  <Popup>
                    {user.createdAt_location}
                    <br />
                    <span
                      style={{
                        color: "#26c6da",
                        fontSize: "16px",
                        letterSpacing: "2px",
                      }}
                    >
                      {user.id}
                    </span>
                    의 경로
                    <br />
                    <span style={{ color: "red", fontSize: "16px" }}>
                      범위에서 벗어났습니다!
                    </span>
                  </Popup>
                </Marker>
              );
            } else {
              inOfRange(user.userIdx);
              return (
                <Marker
                  key={index}
                  position={[user.latitude, user.longitude]}
                  icon={iconMarkerIn}
                >
                  <Popup>
                    {user.createdAt_location}
                    <br />
                    <span
                      style={{
                        color: "#26c6da",
                        fontSize: "16px",
                        letterSpacing: "2px",
                      }}
                    >
                      {user.id}
                    </span>
                    의 경로
                  </Popup>
                </Marker>
              );
            }
          })
        : null}
      {!loading && !error
        ? usersId.map((id, idIndex) => {
            let arr = [];
            pathLines.map((line) => {
              if (Object.keys(line)[0] === id)
                arr.push(line[Object.keys(line)[0]]);
            });
            // console.log(arr);
            return (
              <Polyline positions={arr} color={random_rgb()} key={idIndex} />
            );
          })
        : null}
      {!loading && !error ? (
        <DeleleteBtn className="deleteBtn" userInfo={data.result} />
      ) : null}
      {!loading && !error ? (
        <ButtonContainer>
          <RefetchBtn className="fetchBtn" onClick={refetch}>
            Refetch Datas
          </RefetchBtn>
        </ButtonContainer>
      ) : null}
    </>
  );
};

export default AllLocationUsers;

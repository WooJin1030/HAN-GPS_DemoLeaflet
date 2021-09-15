import React, { useState } from "react";
import useAxios from "axios-hooks";
import { Marker, Popup, Polyline } from "react-leaflet";
import L, { LineUtil } from "leaflet";

const AllLocationUsers = () => {
  const [countArr, setCountArr] = useState(1);
  const BaseURL = "https://www.gpsdemo.shop/";
  const usersIdx = [];
  const usersId = [];
  const userLocationObj = [];

  const iconMarkerIn = new L.Icon({
    iconUrl:
      "https://user-images.githubusercontent.com/62231339/133370867-f3db9284-04b2-4900-beb7-ddcc15300eaf.png",
    iconRetinaUrl:
      "https://user-images.githubusercontent.com/62231339/133370867-f3db9284-04b2-4900-beb7-ddcc15300eaf.png",
    iconAnchor: null,
    popupAnchor: [0, -10],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(18, 28),
    className: "leaflet-div-centerIcon",
  });

  const [{ data, loading, error }, refetch] = useAxios(
    `${BaseURL}users/all-location`
  );

  if (!loading && !error) {
    data.result.forEach((user) => {
      if (!usersIdx.includes(user.userIdx)) usersIdx.push(user.userIdx);
      if (!usersId.includes(user.id)) usersId.push(user.id);
    });
  }

  function getDistanceFromLatLonInKm(lat1, lng1, lat2, lng2) {
    function deg2rad(deg) {
      return deg * (Math.PI / 180);
    }
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lng2 - lng1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  }

  // console.log(
  //   LineUtil.pointToSegmentDistance(
  //     [37.47386563818747, 127.14299349434039],
  //     [37.47386563818747, 127.14299349434039]
  //   )
  // );

  return (
    <>
      {!loading
        ? data.result.map((user, index) => {
            return (
              <Marker
                key={index}
                position={[user.latitude, user.longitude]}
                icon={iconMarkerIn}
              >
                <Popup markerPopUp>{user.id}의 경로</Popup>
              </Marker>
            );
          })
        : null}
      <h1>aa</h1>
    </>
  );
};

export default AllLocationUsers;

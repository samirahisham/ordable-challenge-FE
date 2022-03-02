import React, { useEffect, useState } from "react";
import MapComponent from "./Maps";

import { message } from "antd";
import { useParams } from "react-router-dom";
const MapObj = () => {
  const { lat } = useParams();
  const { lng } = useParams();
  const [orgiginLat, setOriginLat] = useState(null);
  const [orgiginLng, setOriginLng] = useState(null);
  const [errors, setErrors] = useState(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setOriginLat(position.coords.latitude);
      setOriginLng(position.coords.longitude);
    });
  }, []);
  return (
    <>
      {errors && message.error("an error has occured")}
      {lat && lng && orgiginLat && orgiginLng && (
        <MapComponent
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDXMHoYu85jZLdYhtVDveXxHZwRv9FSxlM`}
          isMarkerShown
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          origins={{ lng: orgiginLng, lat: orgiginLat }}
          destinations={{ lng: lng, lat: lat }}
          setErrors={setErrors}
        />
      )}
    </>
  );
};

export default MapObj;

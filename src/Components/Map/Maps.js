import React from "react";
import { compose, withProps, lifecycle } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
  // Marker,
} from "react-google-maps";
// import { message } from "antd";

const MapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDXMHoYu85jZLdYhtVDveXxHZwRv9FSxlM&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new window.google.maps.DirectionsService();
      DirectionsService.route(
        {
          origin: new window.google.maps.LatLng(
            this.props.origins.lat,
            this.props.origins.lng
          ),
          destination: new window.google.maps.LatLng(
            this.props.destinations.lat,
            this.props.destinations.lng
          ),
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            this.setState({
              directions: result,
            });
          } else {
            this.props.setErrors(result);
          }
        }
      );
    },
  })
)((props) => (
  <GoogleMap
    defaultZoom={14}
    defaultCenter={new window.google.maps.LatLng(29.3225456, 48.0130109)}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
));

export default MapComponent;

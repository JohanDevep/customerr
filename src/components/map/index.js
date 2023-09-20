import React from "react";
import { compose, withProps, withStateHandlers } from "recompose";
import salon_image from "../../../public/assets/images/pin.png";
import {
  withScriptjs,
  withGoogleMap,
  InfoWindow,
  GoogleMap,
  Marker,
} from "react-google-maps";

import { GOOGLE_MAP_URL } from "../../global/config";

const MapComponent = compose(
  withProps({
    googleMapURL: GOOGLE_MAP_URL,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withStateHandlers(
    (props) => ({
      infoWindows: props.places.map((p) => {
        return { isOpen: false };
      }),
    }),
    {
      onToggleOpen:
        ({ infoWindows }) =>
        (selectedIndex) => ({
          infoWindows: infoWindows.map((iw, i) => {
            iw.isOpen = selectedIndex === i;
            return iw;
          }),
        }),
    }
  ),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap defaultZoom={props?.zoom} defaultCenter={props?.center}>
    {props.places &&
      props.places.map((place, i) => {
        let lat = parseFloat(place?.latitude, 10);
        let lng = parseFloat(place?.longitude, 10);
        return (
          <Marker
            id={place?.id}
            key={place?.id}
            position={{ lat: lat, lng: lng }}
            icon={salon_image}
            labelVisible={true}
            title={place?.name}
            labelContent={place?.name}
          >
            {props.infoWindows[i]?.isOpen && (
              <InfoWindow onCloseClick={props.onToggleOpen.bind(i)}>
                <div>{place?.name}</div>
              </InfoWindow>
            )}
          </Marker>
        );
      })}
  </GoogleMap>
));
export default MapComponent;

import { GoogleApiWrapper, Map } from "google-maps-react";
import React from "react";

const MapContainer = (props) => {
  console.log(props);
  return (
    <>
      <div className=''>
        <Map
          google={props.google}
          style={{ width: "30%", height: "50%" }}
          zoom={10}
          initialCenter={{
            lat: 23.810331,
            lng: 90.412521,
          }}
        />
      </div>
    </>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBgHtKMhCpjwu-sRXcZsIOgKw_0ZWcAGqA",
})(MapContainer);

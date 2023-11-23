
import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAooGC4Fe-YxDKoRNP0f6iHW2CtuyrH664",
  });
  
  const center = { lat: 8.495400680675377, lng: 4.563832034604157 };

  if (loadError) {
    return <h1>Error loading the map</h1>;
  }

  return (
    <div className="h-[100vh] w-[100vw]">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="h-full w-full"
          center={center}
          zoom={10}
        >
          
          <Marker position={{ lat: 8.495400680675377, lng: 4.563832034604157 }} />
        </GoogleMap>
      )}
    </div>
  );
};

export default Map;

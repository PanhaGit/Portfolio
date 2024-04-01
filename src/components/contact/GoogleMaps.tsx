import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
const GoogleMaps: React.FC = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    let map: google.maps.Map;

    const initMap = async (): Promise<void> => {
      try {
        // The location of Uluru
        const position = { lat: -25.344, lng: 131.031 };

        // Request needed libraries.
        //@ts-ignore
        const { Map } = (await google.maps.importLibrary(
          "maps"
        )) as google.maps.MapsLibrary;
        const { AdvancedMarkerElement } = (await google.maps.importLibrary(
          "marker"
        )) as google.maps.MarkerLibrary;

        // The map, centered at Uluru
        map = new Map(document.getElementById("map") as HTMLElement, {
          zoom: 4,
          center: position,
          mapId: "DEMO_MAP_ID",
        });

        // The marker, positioned at Uluru
        const marker = new AdvancedMarkerElement({
          map: map,
          position: position,
          title: "Uluru",
        });

        setMapLoaded(true);
      } catch (error) {
        console.error("Error loading Google Maps:", error);
      }
    };

    initMap();

    // Clean up function
    return () => {
      if (map) {
        map.dispose();
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center lg:ml-6 md:mt-10  p-6">
      {mapLoaded ? (
        <>
          <h3 className="mb-4">My Google Maps Demo</h3>
          <div id="map" style={{ width: "100%", height: "400px" }}></div>
        </>
      ) : (
        <div className="text-white w-full">
          <p>Loading map...</p>
          <img src={logo} alt="" className="bg-white rounded-full" />
        </div>
      )}
    </div>
  );
};

export default GoogleMaps;

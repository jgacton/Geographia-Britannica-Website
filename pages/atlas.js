import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'; // Import Mapbox CSS

const Atlas = () => {
  const mapContainer = useRef(null); // Reference for the map container
  const map = useRef(null); // Reference for the map instance
  const accessToken = 'pk.eyJ1IjoiamdhY3RvbiIsImEiOiJjbTU2anU2bXUzOHprMmpzZGkyeG1qdDAwIn0.AmJ3E50rHnyunLSGN9Go-Q'; // Mapbox token

  useEffect(() => {
    mapboxgl.accessToken = accessToken;

    if (map.current) return; // Prevent multiple map initializations

    map.current = new mapboxgl.Map({
      container: mapContainer.current, // Map container ID
      style: 'mapbox://styles/mapbox/streets-v11', // Mapbox style
      center: [-3, 54], // Starting position [lng, lat]
      zoom: 4.5, // Starting zoom
    });

    // Add GeoJSON data and layers when the map loads
    map.current.on('load', () => {
      // Add GeoJSON source
      map.current.addSource('boundaries', {
        type: 'geojson',
        data: '/data/local-auth-bounds.geojson', // Ensure this file exists in the public/data folder
        //data: '/data/Westminster-Constituencies-2024.geojson', // Ensure this file exists in the public/data folder
      });

      // Add the layer to display boundaries
      map.current.addLayer({
        id: 'Local Authorities',
        type: 'fill',
        source: 'boundaries',
        paint: {
          'fill-color': '#5da0e3',
          'fill-opacity': 0.5,
          'fill-outline-color': '#000',
        },
        layout: {
          visibility: 'visible',
        },
      });

      /*map.current.addLayer({
        id: '2024 Westminster Constituencies',
        type: 'fill',
        source: 'boundaries',
        paint: {
          'fill-color': '#447a1c',
          'fill-opacity': 0.5,
          'fill-outline-color': '#000',
        },
        layout: {
          visibility: 'visible',
        },
      });*/
    });

    return () => map.current.remove(); // Clean up the map on component unmount
  }, [accessToken]);

  // Toggle layer visibility
  const toggleLayerVisibility = () => {
    const visibility = map.current.getLayoutProperty('Local Authorities', 'visibility');
    if (visibility === 'visible') {
      map.current.setLayoutProperty('Local Authorities', 'visibility', 'none');
    } else {
      map.current.setLayoutProperty('Local Authorities', 'visibility', 'visible');
    }
  };

  // Toggle layer visibility
  /*const toggleLayerVisibility2 = () => {
    const visibility = map.current.getLayoutProperty('2024 Westminster Constituencies', 'visibility');
    if (visibility === 'visible') {
      map.current.setLayoutProperty('2024 Westminster Constituencies', 'visibility', 'none');
    } else {
      map.current.setLayoutProperty('2024 Westminster Constituencies', 'visibility', 'visible');
    }
  };*/

  // Navigate back to the homepage
  const navigateHome = () => {
    window.location.href = '/';
  };

/* Add to div below:
<button onClick={toggleLayerVisibility2} id="menu-button">Toggle Westminster Constituencies</button>*/
  return (
    <>
      <div>
        <button onClick={toggleLayerVisibility} id="menu-button">Local Authority Boundaries</button>
      </div>
      <button id="homeButton" onClick={navigateHome}>Home</button>
      <div
        ref={mapContainer} // Map container reference
        style={{ width: '100%', height: '100vh', position: 'relative' }}
      />
    </>
  );
};

export default Atlas;

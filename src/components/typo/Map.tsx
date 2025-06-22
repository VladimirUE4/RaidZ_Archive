import React from 'react';
import { MapContainer, ImageOverlay, Marker, Popup, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface CapturedZone {
  bounds: [[number, number], [number, number]];
  captured: boolean;
  imageUrl: string;
  tooltipContent: string; // Add a tooltipContent property to the CapturedZone interface
}

interface MapProps {
  imageUrl: string;
  imageBounds: [[number, number], [number, number]];
  capturedZones: CapturedZone[];
}

const Map: React.FC<MapProps> = ({ imageUrl, imageBounds, capturedZones }) => {
  const markers = [
    
    {
      position: [-0.12, 0.72] as [number, number],
      content: (
        <div className="max-w-sm   rounded-lg ">
        <div className="bg-custom-imagewiki bg-cover bg-no-repeat bg-center h-48 w-70">
        </div>
        <div className="p-1">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Saint-Denis</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa pariatur quam, ipsum magnam perferendis sit ducimus animi adipisci, aspernatur impedit explicabo modi molestiae sunt voluptate laboriosam! Nulla esse odit aut.</p>
        </div>
      </div>
      )
  
    },

    { position: [0.23, 0.21] as [number, number],       content: (
      <div className="max-w-sm   rounded-lg ">
      <div className="bg-custom-imagewiki bg-cover bg-no-repeat bg-center h-48 w-70">
      </div>
      <div className="p-1">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Valentine</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa pariatur quam, ipsum magnam perferendis sit ducimus animi adipisci, aspernatur impedit explicabo modi molestiae sunt voluptate laboriosam! Nulla esse odit aut.</p>
      </div>
    </div>
    ) },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <MapContainer center={[0, 0.3]} zoom={10} scrollWheelZoom={true} style={{ height: "70vh", width: "120vh" }}>
      <ImageOverlay url={imageUrl} bounds={imageBounds} />
      {capturedZones.map((zone, index) => (
                  <ImageOverlay key={index} url={zone.imageUrl} bounds={zone.bounds}>
                  <Tooltip>{zone.tooltipContent}</Tooltip>
                </ImageOverlay>
      ))}
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position}>
          <Popup>{marker.content}</Popup>
        </Marker>
      ))}
    </MapContainer>
    </div>
  );
};

export default Map;

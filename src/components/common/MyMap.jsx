import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'


// Fix for default icon issue in many setups (especially Vite)
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

// Set default icon manually
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})

const MyMap = () => {
  const position = [1.3521, 103.8198] // Singapore center

  return (
    <div className='z-40 w-full h-[500px]'>
      <MapContainer center={position} zoom={12} scrollWheelZoom={false} className='w-full h-full rounded-lg shadow'>
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Welcome to Singapore!</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default MyMap

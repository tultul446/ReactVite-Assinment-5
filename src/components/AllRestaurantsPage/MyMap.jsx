import React from 'react'
import { MapContainer , TileLayer , Marker , Popup } from 'leaflet/dist/leaflet.css'


const MyMap = () => {

const position = [1.3521, 103.8198]; //Singapore center


  return (
    <div className='w-full h-[500px]'>
      <MapContainer center={position} zoom={ 12 } scrollWheelZoom={ false } className='w-full h-full rounded-lg shadow'>
        <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>
        contributors'
        url="https://{s}.tile.openStreetMap.org/{z}/{x}/{y}.png"
        >
            <Marker position={position}>
                <Popup></Popup>
            </Marker>
        </TileLayer>
      </MapContainer>
    </div>
  )
}

export default MyMap

import { useEffect, useState } from 'react'
import styles from './Map.module.css'
import { useNavigate } from 'react-router-dom'
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from 'react-leaflet'
import { useCity } from '../../context/CityProvider'
import { useGeoLocation } from '../../hooks/usegeolocation'
import { useUrlPosition } from '../../hooks/useUrlPosition'


function Map() {
  const {isOpen,setIsOpen}=useCity()
  const {cities}=useCity()
  const [mapPosition,setMapPosition]=useState([50,0])

const {lat,lng}=useUrlPosition()
const {isLoading,position,error,getPosition}=useGeoLocation()



const handleNavigate = function(){
 setIsOpen(!isOpen)
}
const handleClick =function(){
  getPosition()
}
useEffect(()=>{
if(lat&&lng)setMapPosition([lat,lng])
},[lat,lng])

useEffect(()=>{
  if(position) setMapPosition([position.lat,position.lng])
  setIsOpen(false)
},[position,setIsOpen])

 return (
   <div className={styles.mapContainer} onClick={handleNavigate}>
     {!position && (
       <button className={styles.geoBtn} onClick={handleClick}>
         use your location
       </button>
     )}
     <MapContainer
       center={mapPosition}
       zoom={13}
       scrollWheelZoom={true}
       className={styles.map}
     >
       <TileLayer
         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
         url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
       />
       {cities.map((city) => (
         <Marker
           position={[city.position.lat, city.position.lng]}
           key={city.id}
         >
           <Popup>
             A pretty CSS3 popup. <br /> Easily customizable.
           </Popup>
         </Marker>
       ))}
       <ChangeCenter position={mapPosition} />
       <DetectChange />
     </MapContainer>
   </div>
 );
}

function ChangeCenter({position}){
  const map = useMap()
  map.setView(position)
  return null;
}

function DetectChange() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}
export default Map

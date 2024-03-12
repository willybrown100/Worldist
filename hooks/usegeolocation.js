import { useState } from "react";

export function useGeoLocation(defaultPosition=null){
 const [isLoading,setIsloading]=useState(false)
 const [position,setPosition]=useState(defaultPosition)
 const [error,setError]=useState()


 function getPosition(){
  if(!navigator.geolocation){
   return setError("your browser dpoesnt support geomloacrion")
  }

  setIsloading(true)
  navigator.geolocation.getCurrentPosition(
   (pos)=>{
    setPosition({lat:pos.coords.latitude,lng:pos.coords.longitude})
    setIsloading(false)
   },
   (error)=>{
    setError(error.message)
    setIsloading(false)
   }
  )
 }
 return {isLoading,position,error,getPosition}
}

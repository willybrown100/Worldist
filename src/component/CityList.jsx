import { useEffect } from "react"
import { useCity } from "../../context/CityProvider"
import CityItem from "./CityItem"
import styles from './CityList.module.css'
import Message from "./Message"
import Spinner from "./Spinner"


function CityList() {

 const { cities,isLoading} = useCity();
 console.log(cities );
 
 if(!cities.length) return <Message message="start adding your own cities"/>
 if(isLoading) return <Spinner/>
 return (
  <ul className={styles.cityItem}>
  {cities.map((city)=><CityItem city={city} key={city.id}/>)}
  </ul>
 )
}

export default CityList

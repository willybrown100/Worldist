import { useCity } from "../../context/CityProvider"
import CityItem from "./CityItem"
import styles from './CityList.module.css'
import Message from "./Message"

function CityList() {
 const {cities}=useCity()
 console.log(cities)
 
 if(!cities.length) return <Message message="start adding your own cities"/>
 return (
  <ul className={styles.cityItem}>
  {cities.map((city)=><CityItem city={city} key={city.id}/>)}
  </ul>
 )
}

export default CityList

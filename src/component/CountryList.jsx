 import { useCity } from "../../context/CityProvider";
import CountryItem from "./CountryItem"
 import styles from './CountryList.module.css'
 
 function CountryList() {
   const { cities } = useCity();
  const countries = cities.reduce((arr,city)=>{
  if(!arr.map(el=>el.country).includes(city.country))
  return [...arr,{country:city.country,emoji:city.emoji}] 
 else return arr
},[])
console.log(countries)
 return (
  <ul className={styles.countryList}>
   {countries.map((country)=><CountryItem country={country}/>)}
  </ul>
 )
}

export default CountryList

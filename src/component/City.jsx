import { useEffect} from "react"
import { useParams } from "react-router-dom"
import { useCity } from "../../context/CityProvider";
import styles from './City.module.css'
import BackButton from "./BackButton";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
 const {id} = useParams()
const {fetchCities,currentCity}=useCity()
 useEffect(()=>{
    fetchCities(id);
 },[id,fetchCities])

 return (
   <div className={styles.city}>
     <div className={styles.row}>
       <h4>City name</h4>
       <h3 className={styles.cityName}>
         <span>{currentCity.emoji}</span> {currentCity.cityName}
       </h3>
     </div>

     <div className={styles.row}>
       <h4>You went to {currentCity.cityName} on</h4>
       <p>{formatDate(currentCity.date || null)}</p>
     </div>

     {currentCity.notes && (
       <div className={styles.row}>
         <h4>Your notes</h4>
         <p>{currentCity.notes}</p>
       </div>
     )}

     <div className={styles.row}>
       <h4>Learn more</h4>
       <a
         href={`https://en.wikipedia.org/wiki/${currentCity.cityName}`}
         target="_blank"
         rel="noreferrer"
       >
         Check out {currentCity.cityName} on Wikipedia &rarr;
       </a>
     </div>

     <div className={styles.backBtn}>
      <BackButton/>
     </div>
   </div>
 );
}

export default City

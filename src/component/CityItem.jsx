import { Link } from 'react-router-dom';
import styles from './CityItem.module.css'
import { useCity } from '../../context/CityProvider';

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
    weekday: "short",
  }).format(new Date(date));


function CityItem({city}) {
  const {currentCity,deleteCities,}=useCity()
  const {isOpen,setIsOpen}=useCity()
  // console.log(currentCity.id,city.id)
const handleClick=function(e){
  e.preventDefault()
  deleteCities(city.id)
}
 return (
   <li>
     <Link
       className={`${styles.cityItem} ${city.id=== currentCity.id ? styles.activeCity : ""
       }`}
       to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
     >
       <span>{city.emoji}</span>
       <h4>{city.cityName}</h4>
       <time>{formatDate(city.date)}</time>
       <button onClick={handleClick}>&times;</button>
     </Link>
   </li>
 );
}

export default CityItem

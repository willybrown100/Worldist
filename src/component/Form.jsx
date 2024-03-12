
import { useUrlPosition } from '../../hooks/useUrlPosition';
import BackButton from './BackButton';
import styles from './Form.module.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from 'react';
import Message from './Message';
import Spinner from './Spinner';
import { useCity } from '../../context/CityProvider';
import { useNavigate } from 'react-router-dom';

// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"


export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function Form() {
  const [date,setDate]=useState(new Date())
  const [notes,setNotes]=useState("")
  const [cityName,setCityName]=useState("")
const [geoCodingError,setGeoCodingError]=useState("")
const [isGeoLoading,setIsGeoLoading]=useState(false)
const [emoji,setEmoji]=useState("")
  const { lat, lng } = useUrlPosition();
const { createCities}=useCity()
const navigate = useNavigate()

  const urlReverse = "https://api.bigdatacloud.net/data/reverse-geocode-client"

  useEffect(()=>{
async function getCityData(){
  try {
    setIsGeoLoading(true)
    const res = await fetch(`${urlReverse}?latitude=${lat}&longitude=${lng}`);
    const data = await res.json()
    if(!data.countryCode) throw new Error("this is not a city click on city😉")
  setCityName(data.city || data.locality||"")
setEmoji(convertToEmoji(data.countryCode))
  } catch (error) {
     setGeoCodingError(error.message)
  }finally{
    setIsGeoLoading(false)
  }
}
 getCityData();
  },[lat,lng])

const handleClick = async function (e) {
  e.preventDefault();
    if (!cityName || !date) return;
  const newCity = {
    cityName,
    date,
    notes,
    emoji,
    position: { lat, lng },
  };

await createCities(newCity);

  navigate("/app/cities")
};
if(isGeoLoading) return <Spinner/>
  if(geoCodingError)return <Message message={geoCodingError}/>
 return (
   <form className={styles.form} onSubmit={handleClick}>
     <div className={styles.formRow}>
       <label>cityName</label>
       <div className={styles.inputContainer}>
         <input
           type="text"
           value={cityName}
           onChange={(e) => setCityName(e.target.value)}
         />
         <span>{emoji}</span>
       </div>
     </div>
     <div className={styles.formRow}>
       <label>when did you go to {cityName}</label>
       {/* <input type="date"  value={date} onChange={(e)=>setDate(e.target.value)}/> */}
       <DatePicker selected={date} onChange={(date) => setDate(date)} />
     </div>
     <div className={styles.formRow}>
       <label>notes</label>
       <textarea
         type="text"
         value={notes}
         onChange={(e) => setNotes(e.target.value)}
       />
     </div>

     <div className={styles.btnContainer}>
       <button >add</button>
       <BackButton />
     </div>

   </form>
 );
}

export default Form

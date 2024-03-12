import { createContext, useCallback, useContext, useEffect, useState } from "react";

const CityContext = createContext();

const URL = "http://localhost:600";

function CityProvider({children}) {
 const [cities, setCities] = useState([]);
 const [currentCity, setCurrentCity] = useState({});
   const [isOpen, setIsOpen] = useState(false);

   
 useEffect(() => {
   async function fetchCities() {
     const res = await fetch(`${URL}/cities`);
     const data = await res.json();
     setCities(data);
   }
   fetchCities();
 }, []);

     const fetchCities = useCallback(async function fetchCities(id) {
       const res = await fetch(`${URL}/cities/${id}`);
       const data = await res.json();
       //  console.log(data);
       setCurrentCity(data);
     },[]); 

     async function createCities(newcity) {
      try {
        const res = await fetch(`${URL}/cities`,{method:"POST",body:JSON.stringify(newcity),headers:{"Content-Type":"application/json",}});
        const data = await res.json();
 
        setCities(cities=>[...cities,data])
        console.log(data);
      } catch (error) {
        console.log(error)
      }
     }

     async function deleteCities(id) {
      try {
        const res = await fetch(`${URL}/cities/id`,{method:"DELETE"});
        setCities(cities=>cities.filter((city)=>city.id!==id))
      } catch (error) {
        console.log(error)
      }
     }

 return (
   <CityContext.Provider value={{ cities, fetchCities, currentCity,isOpen,setIsOpen,createCities,deleteCities }}>
     {children}
   </CityContext.Provider>
 );
}

function  useCity(){
  const context = useContext(CityContext)
  return context
}
export { CityProvider,useCity};

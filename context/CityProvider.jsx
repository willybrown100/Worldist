import { createContext, useCallback, useContext, useEffect, useState } from "react";
import supabase from "../src/services/supabase";

const CityContext = createContext();

const URL = "http://localhost:600";

function CityProvider({children}) {
 const [cities, setCities] = useState([]);
 const [currentCity, setCurrentCity] = useState({});
   const [isOpen, setIsOpen] = useState(false);
   const [isLoading, setIsLoading] = useState(false);

   
//  useEffect(() => {
//    async function fetchCities() {
//      const res = await fetch(`${URL}/cities`);
//      const data = await res.json();
//      setCities(data);
//    }
//    fetchCities();
//  }, []);

 useEffect(() => {
  async function getCities() {
    const { data: cities=[], error } = await supabase.from("cities").select("*");
    setIsLoading(true)
    setCities(cities);
    setIsLoading(false)
    console.log(cities);
    if (error) {
      throw new Error("cities couldnt be find");
    }
    return cities;
  }
  getCities();
 }, []);

    //  const fetchCities = useCallback(async function fetchCities(id) {
    //    const res = await fetch(`${URL}/cities/${id}`);
    //    const data = await res.json();
    //    //  console.log(data);
    //    setCurrentCity(data);
    //  },[]); 
     const fetchCities = useCallback(async function fetchCities(id) {

const { data: cities, error } = await supabase
  .from("cities")
  .select("*")
    .eq("id", id)
    .single();
        console.log(cities);
       setCurrentCity(cities);
     },[]); 

    //  async function createCities(newcity) {
    //   try {
    //     const res = await fetch(`${URL}/cities`,{method:"POST",body:JSON.stringify(newcity),headers:{"Content-Type":"application/json",}});
    //     const data = await res.json();
 
    //     setCities(cities=>[...cities,data])
    //     console.log(data);
    //   } catch (error) {
    //     console.log(error)
    //   }
    //  }

    async function createCities(newCity){
      const { data, error } = await supabase
      .from('cities')
      .insert([
        newCity
      ])
      .select()
         setCities((cities) => [...cities, newCity]);
        console.log(data,newCity);
         if (error) {
           throw new Error("cities couldnt be added");
         }
         return data
    } 




     async function deleteCities(id) {
      try {  
const { error } = await supabase
  .from("cities")
  .delete()
  .eq("id", id);
    setCities((cities) => cities.filter((city) => city.id !== id));
  if (error) {
    throw new Error("cities couldnt be deleted");
  }

      } catch (error) {
        console.log(error)
      }
     }
    //  async function deleteCities(id) {
    //   try {
    //     const res = await fetch(`${URL}/cities/id`,{method:"DELETE"});
    //     setCities(cities=>cities.filter((city)=>city.id!==id))
    //   } catch (error) {
    //     console.log(error)
    //   }
    //  }

 return (
   <CityContext.Provider
     value={{
       cities,
       fetchCities,
       currentCity,
       isOpen,
       setIsOpen,
       createCities,
       deleteCities,
       isLoading,
       setIsLoading,
     }}
   >
     {children}
   </CityContext.Provider>
 );
}

function  useCity(){
  const context = useContext(CityContext)
  return context
}
export { CityProvider,useCity};

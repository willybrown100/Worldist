import supabase from "./supabase";

async function getCities(){
 
const  { data: cities, error } = await supabase.from("cities").select("*");
console.log(cities)
if(error){
 throw new Error("cities couldnt be find")
}
return cities
}
export default getCities;
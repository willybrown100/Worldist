
import { Link } from "react-router-dom";
import styles from "./Home.module.css"
function Home() {
 return (
  <>
   <main className={styles.homePage}>
     <section>
       <h1>
         You travel the world.
         <br />
         Worldist keeps track of your adventures.
       </h1>
       <p>
         A world map that tracks your footsteps into every city you can think
         of. Never forget your wonderful experiences, and show your friends how
         you have wandered the world.
       </p>
       <Link to="/login" className="cta">
         start tracking now
       </Link>
     </section>
   </main>
  </>
 );
}

export default Home

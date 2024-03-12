import Map from "../component/Map";
import SideBar from "../component/SideBar";
import styles from './AppLayout.module.css'
import User from "../component/User";
function AppLayout() {

 return (
   <div className={styles.app}>
     <SideBar  />
     <Map  />
     <User/>
   </div>
 );
}

export default AppLayout

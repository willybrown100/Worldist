import styles from './SideBar.module.css'
import Logo from "./Logo"
import { Link, Outlet } from 'react-router-dom'
import AppNav from './AppNav'
import { useCity } from '../../context/CityProvider'
function SideBar() {
const {isOpen,setIsOpen}=useCity()
 return (
   <>
     <button className={styles.sideBtn} onClick={() => setIsOpen(!isOpen)}>
       {isOpen ? <p className={styles.close}>&times;</p> : <i className="fas fa-bars"></i>}
     </button>
     <div className={`${styles.app} ${isOpen ? styles.showBar : ""}`}>
       <AppNav />
       <Outlet />
       {/* <footer className={styles.sideFooter}>
         <p className={styles.copyRight}>
           &copy; copyright {new Date().getFullYear()} by Worldist inc.
         </p>
       </footer> */}
     </div>
   </>
 );
}

export default SideBar

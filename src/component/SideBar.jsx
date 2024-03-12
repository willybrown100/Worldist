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
       {isOpen ? <p>❌</p> : <i className="fas fa-bars"></i>}
     </button>
     <div className={`${styles.app} ${isOpen ? styles.showBar : ""}`}>
       <Link to="/">
         <Logo />
       </Link>
       <AppNav />
       <Outlet />
       <footer className={styles.sidebar}>
         <p className={styles.copyright}>
           &copy; copyright {new Date().getFullYear()} by Worldist inc.
         </p>
       </footer>
     </div>
   </>
 );
}

export default SideBar

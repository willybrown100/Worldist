import { Link, NavLink } from "react-router-dom"
import {useState }from "react"
import styles from "./NavBar.module.css"
import Logo from "./Logo";



function NavBar() {
 const [isOpen,setIsOpen]=useState(false)
 return (
   <nav className={styles.nav}>
     <Link to="/" className={styles.title} >
       <Logo />
     </Link>
     <div className={styles.menu} onClick={() => setIsOpen(!isOpen)}>
       {isOpen ? (
         <h2>❌</h2>
       ) : (
         <>
           <span></span>
           <span></span>
           <span></span>
         </>
       )}
     </div>
     <ul className={`${isOpen ? styles.open : ""}`}>
      
       <li>
         <NavLink to="/pricing" onClick={() => setIsOpen(!isOpen)}>
           pricing
         </NavLink>
       </li>
       <li>
         <NavLink to="/product" onClick={() => setIsOpen(!isOpen)}>
           product
         </NavLink>
       </li>
       <li>
         <Link to="/login" onClick={() => setIsOpen(!isOpen)} className={styles.login}>
       login
         </Link>
       </li>
     </ul>
   </nav>
 );
}

export default NavBar

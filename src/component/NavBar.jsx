import { Link, NavLink } from "react-router-dom"
import {useState }from "react"
import styles from "./NavBar.module.css"
import Logo from "./Logo";
import { FaBarsStaggered } from "react-icons/fa6";



function NavBar() {
 const [isOpen,setIsOpen]=useState(false)
 const handleClick =function(){
  setIsOpen(!isOpen)
 }
 return (
   <nav className={styles.nav}>
     <div className={styles.navCenter}>
       <div className={styles.navHeader}>
         <Link to="/" className={styles.title}>
           <Logo />
         </Link>
         <div className={styles.menu} onClick={handleClick}>
           {isOpen ? (
             <h2>&times;</h2>
             ) : (
               <FaBarsStaggered className={styles.bar} />
           )}
         </div>
       </div>
       <ul className={` ${isOpen ? styles.open : ""}`}>
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
           <Link
             to="/login"
             onClick={() => setIsOpen(!isOpen)}
             className={styles.login}
           >
             login
           </Link>
         </li>
       </ul>
     </div>
   </nav>
 );
}

export default NavBar

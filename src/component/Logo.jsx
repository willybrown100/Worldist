
import styles from './Logo.module.css'
function Logo() {
 return (
   <div className={styles.logoContainer}>
     <img src="/worldist logo.jpg" alt="WorldWise logo" className={styles.logo} />
     <h2>worldist</h2>
   </div>
 );
}

export default Logo

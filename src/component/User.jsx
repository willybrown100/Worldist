import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthProvider"
import styles from './User.module.css'
function User() {
 const {logOut}=useAuth()
 const navigate= useNavigate()
 const handleClick=function(){
logOut()
navigate("/")
 }
 const {user}=useAuth()
 return (
   <div className={styles.user}>
     <img src={user.avatar} alt={user.name} />
     <h5 className={styles.Username}>
       <span>welcome,</span>
       {user.name}
     </h5>
     <button onClick={handleClick}>Logout</button>
   </div>
 );
}

export default User

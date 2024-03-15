import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthProvider";
import styles from "./Login.module.css"
import { useNavigate } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");
const {login,isAuthenticated}=useAuth()
const navigate = useNavigate()

useEffect(()=>{
  if(isAuthenticated) navigate("/app");
},[isAuthenticated,navigate])


  const handleSubmit = function(e){
e.preventDefault()
login(email,password)

  }
  
 return (
   <section className={styles.section}>
     <form className={`${styles.form}`} onSubmit={handleSubmit}>
       <div className={styles.inputContainer}>
         <label htmlFor="email" >Email</label>
         <input
           type="email"
           id="email"
           className={styles.input}
           onChange={(e) => setEmail(e.target.value)}
           value={email}
         />
       </div>
       <div className={styles.inputContainer}>
         <label htmlFor="password">Password</label>
         <input
           type="password"
           id="password"
           className={styles.input}
           onChange={(e) => setPassword(e.target.value)}
           value={password}
         />
       </div>
       <button  className={styles.login}>
         login
       </button>
     </form>
   </section>
 );
}

export default Login

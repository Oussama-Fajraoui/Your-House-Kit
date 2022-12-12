import React, { useState } from 'react'
import Card from '../../components/card/Card';
import resetImg from '../../assests/forgot.png';
import styles from "./auth.module.scss";
import { Link } from 'react-router-dom';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../../firebase/config';
import { toast } from 'react-toastify';
import Loader from '../../components/loader/Loader';


const Reset = () => {

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const resetPassword = (e) => {
    e.preventDefault();
    setIsLoading(true)
    sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    setIsLoading(false)
    toast.success("Check your email to reset your password .");
    
  })
  .catch((error) => {
    setIsLoading(false);

    toast.error(error.message);
 
  });
    
  }

  return (
    <>
    {isLoading && <Loader />}
    <section className={`conatiner ${styles.auth}`}>

    <div className={styles.img}>
        <img 
            src={resetImg} 
            alt='Login' 
            width="400" 
        />
    </div>

    <Card>
    <div className={styles.form}>
        <h2>Reset Password</h2>
        
        <form onSubmit={resetPassword}>
            <input 
                  type="text" 
                  placeholder='Email' 
                  required 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
            />

            <button 
                    className='--btn --btn-primary --btn-block'
                    type='submit'
            >
                      Reset Password
            </button>

            <div className={styles.links}>
              <p>
                <Link to="/login">- Login</Link>
              </p>
              <p>
                <Link to="/register">- Register</Link>
              </p>
            </div>
        </form>
    </div>
    </Card>
</section>
</>
  )
}

export default Reset
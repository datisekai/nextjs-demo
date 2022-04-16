import React from 'react'
import styles from '../styles/Home.module.css'

const Login = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.box}>
            <h1>Login</h1>
        <div>
          <label htmlFor="" >Username</label>
          <input type="text" className={styles.input} />
      </div>
      
      <div>
          <label htmlFor="">Username</label>
          <input type="text" className={styles.input} />
      </div>

      <div>
          <button className={styles.button}>Login</button>
      </div>
        
        </div>
     
    </div>
  )
}

export default Login
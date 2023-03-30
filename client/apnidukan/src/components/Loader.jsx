import React from 'react'
import styles from "./loader.module.css"
const Loader = () => {
  return (
    <div className={styles.loader} >
        <img src="https://cdn.dribbble.com/users/1787505/screenshots/7300251/media/a351d9e0236c03a539181b95faced9e0.gif" alt="Loading" />
    </div>
  )
}

export default Loader
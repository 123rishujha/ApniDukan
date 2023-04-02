import React from 'react'
import Styles from './SubNavbar.module.css'
import { Link,useNavigate } from 'react-router-dom'
const SubNavbar = () => {
  const navigate = useNavigate();
  return (
    
    <div className={Styles.headernav}>
    <ul>
      <li><Link to="/products">Furniture</Link></li>
      <li><Link to="/products">Clothes</Link></li>
      <li><Link to="/products">Fitness</Link></li>
      <li><Link to="/products">Beauty</Link></li>
      <li><Link to="/products">Kids</Link></li>
    </ul>
  </div>
    
  )
}

export default SubNavbar
import React from 'react'
import './SubNavbar.css'
import { Link } from 'react-router-dom'
const SubNavbar = () => {
  return (
    
    <div className="headernav">
    <ul>
    
      <li><Link to="#furniture">Furniture</Link></li>
      <li><Link to="#clothes">Clothes</Link></li>
      <li><Link to="#fitness">Fitness</Link></li>
      <li><Link to="#beauty">Beauty</Link></li>
      <li><Link to="#kids">Kids</Link></li>
    </ul>
  </div>
    
  )
}

export default SubNavbar
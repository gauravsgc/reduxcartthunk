import React from 'react'
import {Link} from 'react-router-dom'
import  './Style/Navbarstyle.css'
import { useSelector } from 'react-redux'
export default function Navbar() {
  const count = useSelector((state) => state.cart);
  // console.log(count);
  return (
    <div>
     
     <ul>
        <li><Link to ='/'>Home</Link>
     </li>
     <li><Link to ='/cart'>Cart {count.length}</Link></li>
     </ul>
    </div>
  )
}

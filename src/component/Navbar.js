import './NavbarStyles.css';
import React,{useState} from 'react'
import { NavLink} from 'react-router-dom';
export default function Navbar() {
  const[bar,setBar]=useState(true);
  
 
  return (
    <nav className='NavbarItems'>
        <h1 className='navbar-logo'>Tour India</h1>
        <div className='menu-icons'>
          <i className={`${bar ? "fa-solid fa-bars":"fa-solid fa-times" } OCicon` }onClick={()=>setBar(!bar)}/>
         

          </div>
        <ul className= { bar ? "nav-menu" : "nav-menu active" }onClick={()=>setBar(!bar)}>
           
          <li>
              <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
         
          <li>
            <NavLink to="/service"  className="nav-link">Service</NavLink>
          </li>

          <li>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
          </li>

           <li>
            <NavLink to="/about"  className="nav-link">About</NavLink>
          </li>
          
          <li>
            <NavLink to="" className="nav-link-mobile">Sign Up</NavLink>
          </li>
            <button>Sign Up</button>
        </ul>

     
    </nav>
    
  )
}


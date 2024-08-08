import React, { useContext } from 'react'
import '../Styles/Navbar.css'
import { assets } from '../assets/Assets'
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartShopping, faCircleUser} from '@fortawesome/free-solid-svg-icons';
import { CartContext } from "../context/CartContext"; // Import CartContext

const Navbar = () => {
  
  const { getCartCount } = useContext(CartContext); // Access the cart count

  

  return (
    <>
    <nav className="navbar navbar-expand-lg fixed-top">
  <div className="container-fluid ">
    <div className='brand-logo py-1'>
    <NavLink className="nav-NavLink " to={"/"}><img src= {assets.logo} alt="img" width={290} height={75} /></NavLink>
    </div>
    <button className="navbar-toggler border-0 " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse align-self-center" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto ms-lg-auto my-md-3 mb-2 mb-lg-0   ">

        <li className="nav-item ">
        <NavLink className="nav-NavLink " to={"/"}>Home</NavLink>
        </li>

        <li className="nav-item">
        <NavLink className="nav-NavLink " to={"/Products"}>Products</NavLink>
        </li>
        
        <li className="nav-item">
        <NavLink className="nav-NavLink " to={"/AboutUs"}>About Us</NavLink>
        </li>

        <li className="nav-item">
        <NavLink className="nav-NavLink " to={"/ContactUs"}>Contact Us</NavLink>
        </li>

       


      </ul>
      <div className='d-flex gap-3 me-4 d-md-none d-sm-none d-lg-block'>
        <NavLink className="nav-NavLink ms-lg-0 ms-md-2  ms-sm-2 position-relative btn btn-outline-secondary me-3 " to={"/ProductCart"}>
        <FontAwesomeIcon icon={faCartShopping} size="lg" style={{color: "#ffffff", marginRight:"3"}} />
        Cart
        <span className='cart-badge position-absolute top-0 start-25 text-warning '>{getCartCount()}</span>
        </NavLink>

        <NavLink className="nav-NavLink ms-lg-0 ms-md-2  ms-sm-2 btn btn-outline-secondary " to={"/Login"}>
        <FontAwesomeIcon icon={faCircleUser} size="lg" style={{color: "#ffffff",marginRight:"5px"}} />
        
          Login
        </NavLink>
        </div>
      
    </div>
  </div>
</nav>
    </>
    
  )
}

export default Navbar

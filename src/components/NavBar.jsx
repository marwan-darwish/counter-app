import React,{useEffect,useState} from 'react'
import {FaShoppingCart} from "react-icons/fa"
import { Link } from 'react-router-dom';
import { useSelector} from 'react-redux'

const NavBar = () => {

const count=useSelector((state)=>state.cart.cartCount)
console.log(count);
  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <span className="navbar-brand">Navbar</span>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse"  id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className='nav-link' to="/">
            Home
            </Link>
          </li>
          <li className="nav-item">
          <Link className='nav-link' to="/products">
            Products
            </Link>
          </li>
          <li className="nav-item">
<Link to="/cart" className='nav-link'>
<FaShoppingCart/> {count}

</Link>
            
          </li>
        
        </ul>

      </div>
    </div>
  </nav>
    )
}

export default NavBar
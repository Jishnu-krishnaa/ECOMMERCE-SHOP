import React from 'react'
import './CustNavbar.css'
import Logo from '../images/logo.jpg'
import { Link } from 'react-router-dom'
function CustNavbar() {
  const linkStyle={
    color: 'black',
    textDecoration: 'none',
    display: "flex",
  }
  return (
    <div className='header-nav'>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <img src={Logo} alt='Logo'className='logo-Cust-nav'/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="Cust-nav-Home">
          <Link to="/CustHome" style={linkStyle}>Home</Link> 
        </li>
        <li class="Cust-nav-catagory">
          <Link to="/CustCollections"style={linkStyle}>Collections</Link>
        </li>
        <li class="Cust-nav-cart">
          <Link to="/Cart"style={linkStyle}>My Cart</Link>
        </li>
        <li class="Cust-nav-profiles">
          <Link to="/MyProfile"style={linkStyle}>My Profile</Link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div class="nav-logout">
      <Link to="/Login" className='Cust-nav-logoutt'>
      <button type="button" class="btn btn-light">Logout</button></Link>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default CustNavbar

import React from 'react'
import './Navbar.css'
import Logo from '../images/logo.jpg'
import { Link } from 'react-router-dom'
function Navbar() {
  const linkStyle={
    color: 'black',
    textDecoration: 'none',
    display: "flex",
  }
  return (
    <div className='header-nav'>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <img src={Logo} alt='Logo'className='logo-nav'/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-Home">
          <Link to="/Home" style={linkStyle}>HOME</Link> 
        </li>
        <li class="nav-catagory">
          <Link to="/Catagories"style={linkStyle}>COLLECTIONS</Link>
        </li>  
        <li class="nav-About">
          <Link to="/About"style={linkStyle}>ABOUT US</Link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div>
          <Link to="/Login"style={linkStyle} className='nav-log-sig' >Login</Link>
        </div>
      {/* <div class="nav-logout">
      <Link to="/LogOut" className='nav-logoutt'>
      <button type="button" class="btn btn-light">Logout</button></Link>
      </div> */}
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar

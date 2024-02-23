import React from 'react'
import './AdminNavbar.css'
import Logo from '../images/logo.jpg'
import { Link } from 'react-router-dom'
function AdminNavbar() {
  const linkStyle={
    color: 'black',
    textDecoration: 'none',
    display: "flex",
  }
  return (
    <div className='header-nav'>  
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <img src={Logo} alt='Logo'className='logo-Adm-nav'/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="Adm-nav-product">
          <Link to="/AddProducts" style={linkStyle}>ADD PRODUCTS</Link> 
        </li>
        <li class="Adm-nav-myItems">
          <Link to="/productList"style={linkStyle}>PRODUCTS LIST</Link>
        </li>
        <li class="Adm-nav-users">
          <Link to="/AdminProfile"style={linkStyle}>MY PROFILE</Link>
        </li>
        <li class="Adm-nav-profile">
          <Link to="/AllUsers"style={linkStyle}>ALL USERS</Link>
        </li>
      </ul>
      <div class="Adm-nav-logout">
      <Link to="/AdminLog" className='Adm-nav-logoutt'>
      <button type="button" class="btn btn-outline-secondary">Logout</button></Link>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default AdminNavbar

import React from 'react'
import AdminNavbar from './AdminNavbar'
import "./AdminProfile.css"
import pic from '../images/dp.jpg'
const AdminProfile = () => {
  return (
    <div className='body-pro'>
    <AdminNavbar/><br/>
      <div className="profile-container"><br/><br/><br/>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0"><li>
        <img src={pic} alt='Profile' className='pro-pic' /></li><br/>
        <li>
        <h2 className='name-pro'> Mark Zuckerberg</h2>
        </li><br/>
        <li>
        <h6 className='email-pro'> MarkZuckerberg@gmail.com</h6>
        </li>
        </ul>
        
        
      </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
    
  )
}

export default AdminProfile

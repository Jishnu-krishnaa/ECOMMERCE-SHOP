import './MyProfile.css'
import CustNavbar from '../Nav/CustNavbar'
import { useEffect, useState } from 'react';
import axios from 'axios';
function MyProfile() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    age: "",
  });
  const userId=localStorage.getItem('userId')
  useEffect(() => {
    axios.get(`http://localhost:3001/ecommerce/ViewMyProfile/${userId}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log("Error fetching users:", error);
      });
  });
  return (
    <div>
      <CustNavbar/>
      <div className="profile-container">
        <h1 className='profile-header'>PROFILE</h1><br/><br/>
       <h2 className='pro-name'><b>WELCOME, {user.name}</b></h2><br/><br/><br/><br/>
       <div class="card-body"> 
        <h5 className='pro-Contact'>CUSTOMER DETAILS</h5>
        <div className='pro-detail'>
          <label>Email : </label>{user.email}<br/> 
          <label>Phone : </label>{user.phone}<br/>
          <label>Gender : </label>{user.gender}<br/>
          <label> Age : </label>{user.age}<br/>
        </div>
        </div>
    </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  )
  }

export default MyProfile

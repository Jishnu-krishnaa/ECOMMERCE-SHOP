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
  }, []);
  return (
    <div>
      <CustNavbar/>
      <div className="profile-container">
        <h1 className='profile-header'>PROFILE</h1><br/><br/>
       <h2>Hey {user.name}</h2><br/><br/>
       <div class="card-body">
        <h5>Contact Info</h5>
          Email : {user.email}<br/>
          Phone : {user.phone}<br/>
          Gender : {user.gender}<br/>
          Age : {user.age}<br/>
        </div>
    </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  )
  }

export default MyProfile

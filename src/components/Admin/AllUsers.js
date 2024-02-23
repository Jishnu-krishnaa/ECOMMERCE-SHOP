import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminNavbar from './AdminNavbar';
import UserCard from './UseCard';
import './AllUsers.css'

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/ecommerce/ViewAllUsers")
      .then((response) => {
        // Assuming the response.data is an array of users
        setUsers(response.data);
      })
      .catch((error) => {
        console.log("Error fetching users:", error);
      });
  }, []);

  return (
    <div className='body-users'>
      <AdminNavbar /><br/>
      <header className='header-users'><h1 className='head-user'>E-kart Customers</h1></header><br/><br/><br/><br/>
      <div className="user-card-container row">
        {users.map((user) => (
          <div class='col-3'>
          <UserCard key={user._id} user={user} />
          </div>
        ))}
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}

export default AllUsers;

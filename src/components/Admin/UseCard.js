import React from "react";
import './AllUsers.css'
const UserCard = ({ user }) => {
  return (
    
    <div className="user-card">
      
      <div class="card text-bg-light mb-3" style={{ maxWidth: "22rem" }}>
        <div class="card-header"><h4>{user.name}</h4></div>
        <div class="card-body">
          Email : {user.email}<br/>
          Phone : {user.phone}<br/>
          Gender : {user.gender}<br/>
          Age : {user.age}<br/>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

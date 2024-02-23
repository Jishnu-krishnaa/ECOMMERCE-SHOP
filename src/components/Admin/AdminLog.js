import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './AdminLog.css'
function AdminLog() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({ email: '', password: '' });

  const onClickChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const Login = (e) => {
    e.preventDefault();
    if (login.email === "MarkZuckerberg@gmail.com" && login.password === "Facebook123") {
      localStorage.setItem("adminlog",1);
      alert("Login successfully");
      // window.location.reload(false);
      navigate('/AdminProfile');
    } else {
      alert("Login Failed");
    }
  };

  return (
    <div>
      <br />
      <Link to='/Home' className='home-butt-Adm-log'>&#171; Home</Link>
      <br /><br />
      <div className='body-Admin'>
        <form className='form-Admin' onSubmit={Login}>
          <h1 className='head-Admin'>E Kart<h6>Online purchasing & selling</h6></h1><br />
          <h3 className='head-Admin2'>Admin<h6>Only for Admin & partners</h6></h3>
          <label className='label-Admin1'>Email id :  </label>
          <input className='Admin-input1' type='email' placeholder=' Email id' name='email' value={login.email} onChange={onClickChange} /><br />
          <label className='label-Admin2'>Password : </label>
          <input className='Admin-input2' type='password' placeholder=' password' name='password' value={login.password} onChange={onClickChange} /><br />
          <button className='Admin-button'>Login</button><br /><br /><br />
          <h6 className='admin-desc'>Disclaimer : </h6>
          <p>You shall not make any negative, denigrating about us, the brand name
            or domain name used by us, including E-kart, E-kart affiliates
            and associated entities, or otherwise engage in any conduct or
            action that might tarnish the image or reputation of
            E-kart or Sellers. Happy karting...</p>
        </form><br /><br /><br /><br /><br />
      </div><br /><br /><br /><br /><br /><br /><br />
    </div>
  );
}

export default AdminLog

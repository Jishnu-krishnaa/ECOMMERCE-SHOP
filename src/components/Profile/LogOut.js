import React from 'react'
import { Link } from 'react-router-dom'
import './LogOut.css'
import Logo from '../images/logo.jpg'
const LogOut = () => {
    const style={
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '500px',
        margin: '0 auto', 
        paddingTop: '3rem'
    }
  return (
    <div>
      <div className='head-out'>
    <img src={Logo} alt='Logo'className='logo-out'/>
    <Link to='/Home' className='home-butt-out'>&#171;Home</Link></div>
    <br/><br/>
    <form style={style}>
      <h1>You're logged out from E-Kart.in...</h1><br/><br/>
    <h3>Log on to Admin/Seller?</h3>
      <Link to='/AdminLog'>Click here..</Link><br/>
      <h4>Or return to Login? </h4>
      <Link to='/Login'>Click here..</Link><br/>
      <h6>&copy;Terms & Conditions?</h6>
      <a href='https://www.termsfeed.com/public/uploads/2021/12/sample-terms-conditions-agreement.pdf'>Click here..</a>
    </form><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/>
    </div>
  )
}

export default LogOut

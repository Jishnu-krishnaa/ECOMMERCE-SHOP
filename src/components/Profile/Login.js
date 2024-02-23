import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
function Login() {
    const navigate = useNavigate();
    const [data, setData] = useState({email: '', password: '' })
    const onClickChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const Login = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/ecommerce/loginUser',data)
        .then((result) => {
            // console.log(result.data.msg, result)
            if(result.data.status===200){
                alert("Login Successfull")
                localStorage.setItem('userId',result.data.cust._id)
                console.log("Login Success")
                navigate('/CustHome')

            }
            else{
                alert(result.data.msg)
                console.log("Login Failed")
            }
        }).catch((err) => {
            console.error("Error during login", err)
        alert("Something went wrong during login. Please try again.")
        })
    }
    
    return (
    <div><br/>
        <Link to='/Home' className='home-butt-log'>&#171;Home</Link>
        <br/><br/>
        <div className='body-log'>
            <form className='form-log' onSubmit={Login}>
            <h1 className='head-log'>E Kart<h6>Online purchasing & selling</h6></h1><br/><br/>
                <label className='label-log1'>Email id :  </label>
                <input className='log-input1' type='email' placeholder=' Email id' name='email' value={data.email} onChange={onClickChange} /><br/>
                <label className='label-log2'>Password : </label>
                <input className='log-input2' type='password' placeholder=' password' name='password' value={data.password} onChange={onClickChange} /><br/>
                <button className='log-button'>Login</button>
                <Link to="/Signup" className='link1-sign'>New customer? Signup here</Link>
                {/* <h6 className='admin-desc' >Disclaimer : </h6>
            <p>You shall not make any negative, denigrating about us, the brand name
               or domain name used by us, including E-kart, E-kart affiliates 
               and associated entities, or otherwise engage in any conduct or 
               action that might tarnish the image or reputation of 
               E-kart or Sellers. Happy karting...</p> */}
            </form><br/><br/><br/><br/><br/>
        </div><br/><br/><br/><br/><br/><br/><br/>
    </div>
    )
}

export default Login

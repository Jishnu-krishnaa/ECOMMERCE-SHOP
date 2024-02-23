import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import './Signup.css'
import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate(); 
    const [data, setData] = useState({ name: '', age: '', email: '', phone: '', gender: '', password: '' })
    const onClickChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        console.log(data)
    })
    
    const Submit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/ecommerce/registerUser',data)
        .then((result) => {
            console.log("Data inserted", result)
            if(result.status===200){
                alert("Registered Successfull")
                navigate('/Login')
            }
            else{
                alert('Registering Failed')
            }
        }).catch((err) => {
            console.log("error",err)
        });
    }
    return (
    <div><br/>
    <Link to='/Home' className='home-butt-sign'>&#171;Home</Link>
    <br/><br/>
        <div className='sign-body'>
            <form className='sign-form' onSubmit={Submit}>
                <h1 className='head-sign'>E Kart<h6 className='sign-h6'>Online purchasing & selling</h6></h1>
                <label className='label1'>Name : </label>
                <input type='text' placeholder='Full name' name='name' value={data.name} onChange={onClickChange} />
                <label className='label2'>Email id : </label>
                <input type='email' placeholder='email id' name='email' value={data.email} onChange={onClickChange} />
                <label className='label3'>Phone : </label>
                <input type='number' placeholder='phone number' name='phone' value={data.phone} onChange={onClickChange} />
                <label className='label4'>Age : </label>
                <input type='number' placeholder='Age' name='age' value={data.age} onChange={onClickChange} />
                <label className='label5'>Gender : 
                <div class="form-check">
                    <label class="form-check-label"  htmlFor="flexRadioDefault1">Male
                    <input class="form-check-input" type="radio" name='gender' id="flexRadioDefault1" value="Male" onChange={onClickChange} />
                </label></div>
                <div class="form-check">
                    <label class="form-check-label"  htmlFor="flexRadioDefault2">Female
                    <input class="form-check-input" type="radio" name='gender' id="flexRadioDefault2" value="Female" onChange={onClickChange}  />
                </label></div>
                <div class="form-check">
                    <label class="form-check-label"  htmlFor="flexRadioDefault3">Other
                    <input class="form-check-input" type="radio" name='gender' id="flexRadioDefault3" value="Other" onChange={onClickChange} />
                </label></div></label>
                <label className='label6'>Password : </label>
                <input type='password' placeholder='password' name='password' value={data.password} onChange={onClickChange} /><br />
                <button className='sign-button'>SIGN UP</button>
                <Link to="/Login" className='link1-log'>Already customer? back to login</Link>
            </form><br/><br/><br/>
        </div><br/><br/><br/><br/><br/><br/>
    </div>
    )
}

export default Signup

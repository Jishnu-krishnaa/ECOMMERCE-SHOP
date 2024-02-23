import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './BuyNow.css'


const BuyNowItem = () => {
  const navigate=useNavigate()

  const [orderUser, setOrderUser]=useState([])
  const [orderProduct, setOrderProduct]=useState([])
  const [DeliveryAddress,setDeliveryAddress]=useState({address:''})

  const onClickChange = (e) => {
    setDeliveryAddress({ ...DeliveryAddress, [e.target.name]: e.target.value })
}

  const userId=localStorage.getItem('userId')
  const id=useParams()

  useEffect(()=>{
    axios.get(`http://localhost:3001/ecommerce/BuyNowUser/${userId}`)
    .then(response=>{
      setOrderUser(response.data);
      console.log(response)
    })
    .catch((error)=>{
      console.log('error occured:', error)
    })

  },[userId]);

  useEffect(()=>{
    console.log(id)
    axios.get(`http://localhost:3001/ecommerce/ViewProductbyId/${id.stockid}`)
    .then(response=>{
      setOrderProduct(response.data)
      console.log(response)
    })
    .catch((error)=>{
      console.log('error occured:', error)
    })
  },[]);

  const SaveAddress = () => {
    axios.post('http://localhost:3001/ecommerce/SetDeliveryAddress',DeliveryAddress)
    .then((result) => {
      setOrderUser(result.data);
      console.log("Address inserted",result)
      alert("Save this Address?")
    }).catch((err) => {
        console.log("Address register failed",err)
    });
}

const PlaceOrder = () => {
//   axios.post(`http://localhost:3001/ecommerce/ViewAddressbyId/${address}`)
//   .then((result) => {
//       console.log("Address inserted", result)
//       if(result.status===200){
//           alert("Press Okay to Confirm this order")
//           navigate(`/PlacedOrder/${address}`)
//       }
//       else{
//           alert('Registering Failed')
//       }
//   }).catch((err) => {
//       console.log("error",err)
//   });
}

  return (
    <div className='body-list' ><br/>
    {/* <Link to='/CustHome' className='home-butt-log'>&#171;Home</Link> */}
    <br/><br/>

      <div className='buy-user-info'>
      <header className='header-buy'><h1 className='head-buy'>USER DETAILS</h1></header><br/><br/><br/><br/>
        <h4 className='user-name'><b>{orderUser.name} </b></h4><br/>
        <h4><label>Ph : </label><b>{orderUser.phone}</b></h4>
      </div><br/>


      <div className='buy-address'>
      <header className='header-buy'><h1 className='head-buy'>DELIVERY ADDRESS</h1></header><br/><br/><br/><br/>
      <div class="input-group">
      <span class="input-group-text">ADDRESS</span>

      <textarea className='buy-address1' class="form-control" 
        aria-label="With textarea" placeholder='Enter Delivery Address' name='address' value={DeliveryAddress.address}
         onChange={onClickChange}>
      </textarea><br/><br/>
      <button className='buy-ADR-SAVE' onClick={()=>{SaveAddress(DeliveryAddress.address)}}>SAVE</button><br/>
      </div></div><br/><br/>

      <div className='buy-order-summary'>
      <header className='header-buy'><h1 className='head-buy'>ORDER SUMMARY</h1></header><br/><br/><br/><br/>
        <div>
        <img src={`http://localhost:3001/${orderProduct.pic}`} class="img-thumbnail" alt={orderProduct.name} />
        <label className='pro-buy1'>Product :  <b>{orderProduct.name}</b></label>
        <label className='pro-buy2'>Price :  <b>₹{orderProduct.price}</b></label>
      </div>
  
      </div><br/><br/><br/>

      <div className='buy-payment'>
      <header className='header-buy'><h1 className='head-buy'>PAYMENT METHOD</h1></header><br/><br/><br/><br/>

      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
        <label class="form-check-label" for="inlineRadio1">CREDIT CARD</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
        <label class="form-check-label" for="inlineRadio2">DEBIT CARD</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled/>
        <label class="form-check-label" for="inlineRadio3">COD (Not Available)</label>
      </div><br/><br/>

      <div class="row mb-4">
              <div class="col">
                <div class="form-outline">
                <label class="form-label" for="formNameOnCard">Name on card</label>
                  <input type="text" id="formNameOnCard" class="form-control" />
                  
                </div>
              </div>
              <div class="col">
                <div class="form-outline">
                <label class="form-label" for="formCardNumber">Credit card number</label>
                  <input type="text" id="formCardNumber" class="form-control" />                
                </div>
              </div>
            </div>

            <div class="row mb-4">
              <div class="col-3">
                <div class="form-outline">
                <label class="form-label" for="formExpiration">Expiration</label>
                  <input type="text" id="formExpiration" class="form-control" />                  
                </div>
              </div>
              <div class="col-3">
                <div class="form-outline">
                <label class="form-label" for="formCVV">CVV</label>
                  <input type="text" id="formCVV" class="form-control" />
                </div>
              </div>
            </div>
            <button className='buy-place' onClick={()=>{PlaceOrder(DeliveryAddress.address)}}>PLACE ORDER</button><br/>
      </div><br/><br/><br/>

    </div>
  )
}

export default BuyNowItem

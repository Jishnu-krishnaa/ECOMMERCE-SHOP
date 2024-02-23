import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const PlacedOrder = () => {
    // const [PurchasedItem,setPurchasedItem]=useState([])

    // useEffect((address)=>{
    //     axios.get(`http://localhost:3001/ecommerce/ViewAddressbyId${address}`)
    //     .then(response=>{
    //         setPurchasedItem(response.data);
    //         console.log(response)
    //       })
    //       .catch((error)=>{
    //         console.log('error occured:', error)
    //       })
    // })

  return (
    <div>
      <h1>Your Order was Placed</h1>
      <Link to='/CustHome' className='home-butt-log'>&#171;Continue Shopping</Link> 
    </div>
  )
}

export default PlacedOrder

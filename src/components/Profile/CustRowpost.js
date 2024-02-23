import React, { useEffect, useState } from 'react'
import CustCardRow from './CustCardRow';
import axios from 'axios';
function CustRowPost() {
  const [products1, setProducts1] = useState([]);
  const [products2, setProducts2] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/ecommerce/ViewAllProductsbyTrend/Fashion Best sellers")
      .then((response) => {
        // Assuming the response.data is an array of users
        console.log(response)
        setProducts1(response.data);
      })
      .catch((error) => {
        console.log("Error fetching users:", error);
      });

      axios.get("http://localhost:3001/ecommerce/ViewAllProductsbyTrend/Best of weekly Deals")
      .then((response) => {
        // Assuming the response.data is an array of users
        console.log(response)
        setProducts2(response.data);
      })
      .catch((error) => {
        console.log("Error fetching users:", error);
      });
  }, []);
return (
    <div>
      <div className='cata-part1'>
      <header><h2 className='head-prod1' >Fashion Best sellers</h2></header><br/><br/><br/><br/>
      <div className="product-card-container row" >
        {products1.map((product) => (
          <div class='col-3'>
          <CustCardRow key={product._id} product={product} />
      </div>
        ))}
      </div></div><br/>
      <div className='cata-part1'>
      <header><h2 className='head-prod1'>Best of weekly Deals</h2></header><br/><br/><br/><br/>
      <div className="product-card-container row" >
        {products2.map((product) => (
          <div class='col-3'>
          <CustCardRow key={product._id} product={product} />
      </div>
        ))}
      </div>
      </div><br/>
    </div>
  )
}

export default CustRowPost 

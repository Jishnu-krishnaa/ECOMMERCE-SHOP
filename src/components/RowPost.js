import React, { useEffect, useState } from 'react'
import './RowPost.css'
import RowPostCard from './RowPostCard';
import axios from 'axios';
function RowPost() {
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
      <h2>Fashion Best sellers</h2>
      <div className="product-card-container row-1" >
        {products1.map((product) => (
          <div class='col-3'>
          <RowPostCard key={product._id} product={product} />
      </div>
        ))}
      </div><br/>
      <h3>Best of weekly Deals</h3>
      <div className="product-card-container row-1" >
        {products2.map((product) => (
          <div class='col-3'>
          <RowPostCard key={product._id} product={product} />
      </div>
        ))}
      </div><br/>
    </div>
  )
}

export default RowPost

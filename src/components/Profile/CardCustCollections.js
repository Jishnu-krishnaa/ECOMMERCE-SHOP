import React from 'react'
import './CustCollections.css'
import axios from 'axios'

const CardCustCollections = ({product, user, ProductAdded }) => {
  const addToCart = (Id) => {
    console.log("PId",Id)
  
    let userId=localStorage.getItem('userId')
  
    console.log("userId",userId, "productId",Id)
    axios.post('http://localhost:3001/ecommerce/addtocart',{productId:Id,userId:userId})
  
      .then((response) => {
        if (response.status === 200) {
          alert('Product Added to Cart Successfully');
          console.log(response.data);
          if (ProductAdded) {
            ProductAdded(product._id);
          }
        } else {
          console.error('Unexpected response status:', response.status);
        }
      })
      .catch((error) => {
        alert('Add to cart Failed, Please try again..');
        console.error('Error adding product to cart:', error);
      });
    }
  return (
      <div className="product-card">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <div class="card">
        <img src={`http://localhost:3001/${product.pic.filename}`} class="card-img-top" alt={product.name} />
        <div class="card-body"><ul>
        <li><label className="label-prod1"><b>Name :  </b>{product.name}</label><br/></li>
        <li><label className="label-prod2"><b>Price : </b>₹{product.price}</label><br/></li>
        <li><label className="label-prod3"><b>Catagory : </b>{product.catagory}</label><br/></li>
        <li><label className="label-prod4"><b>New Arrivals : </b>{product.arrival}</label><br/></li>
        <li><label className="label-prod5"><b>Description : </b>{product.desc}</label><br/><br/></li></ul>
        <button className="cust-collect-card1" >BUY NOW</button>
        <button className="cust-collect-card2" onClick={()=>addToCart(product._id)}>ADD CART</button><br/>
        </div>
        </div>
      </ul><br/><br/>
    </div>
  )
}

export default CardCustCollections

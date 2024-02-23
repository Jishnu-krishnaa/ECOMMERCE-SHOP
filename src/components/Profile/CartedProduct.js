import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CartedProduct = () => {
    const id=useParams()
    const [cartProduct, setCartProduct] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3001/ecommerce/MyCartProduct/${id}`)
            .then(response => {
                setCartProduct(response.data.data);
                console.log(response);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [id]);
    const removeCartItem = (productId) => {
        axios.get(`http://localhost:3001/ecommerce/deletecart/${productId}`)
        .then((response) => {
            if (response.status === 200) {
              alert('Product Removed from Cart')
              window.location.reload();
              console.log(response.data);
            } else {
              console.error('Error Removing product:', response.data);
            }
          })
          .catch((error) => {
            console.error('Error deleting product:', error);
          });
    };
  return (
    <div>
      <h1>Product page</h1>
      <div class="card"> 
      <img src={`http://localhost:3001/${cartProduct.pic.filename}`} class="card-img-top" alt={cartProduct.name} />
      <div class="card-body"><ul>
      <li><label className="label-prod1"><b>Name :  </b>{cartProduct.name}</label><br/></li>
      <li><label className="label-prod2"><b>Price : </b>₹{cartProduct.price}</label><br/></li>
      <li><label className="label-prod3"><b>Catagory : </b>{cartProduct.catagory}</label><br/></li>
      <li><label className="label-prod4"><b>Trends : </b>{cartProduct.trend}</label><br/></li>
      <li><label className="label-prod5"><b>Description : </b>{cartProduct.desc}</label><br/><br/></li></ul>
      <button className="cust-homr-Buy" >BUY NOW</button>
    <button className="Rem-cart-butt" onClick={()=>removeCartItem(cartProduct._id)}>REMOVE</button><br/>
      </div>
      </div>
    </div>
  )
}

export default CartedProduct

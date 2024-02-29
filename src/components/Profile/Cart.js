import React, { useEffect, useState } from 'react';
import CustNavbar from '../Nav/CustNavbar';
import axios from 'axios';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

function CartProducts() {
    const navigate = useNavigate();
    const [cartProducts, setCartProducts] = useState([]);

    const userId = localStorage.getItem('userId');
    useEffect(() => {
        axios.get(`http://localhost:3001/ecommerce/ViewAllCart/${userId}`)
            .then(response => {
                setCartProducts(response.data.data);
                console.log(response);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [userId]);

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
        }
    const handleBuyNow =(stockid)=>{
        axios.post(`http://localhost:3001/ecommerce/BuyNowOrder/${stockid}`)
        .then((response) => {
            if (response.status === 200) {
              console.log(response.data);
              navigate(`/BuyNow/${stockid}`)
            } else {
              console.error('Order Failed:', response.data);
              alert("Something went wrong")
            }
          })
          .catch((error) => {
            console.error('Failed:', error);
            alert("Something went wrong")
          });
    }
    return (
        <div>
            <CustNavbar /><br />
            <div className='cata-part1'>
                <header><h2 className='head-prod1'>CART ITEMS</h2></header><br /><br /><br /><br />
              
                    <ul>
                        {cartProducts.map((cartProduct) => (
                            <div key={cartProduct._id}>
                                <div class="card mb-5">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src={`http://localhost:3001/${cartProduct.productId.pic.filename}`} class="img-fluid rounded-start" alt={cartProduct.name}/>
                                    </div>
                                <div class="col-md-8">
                                <div class="card-body">
                                    <p class="card-text">
                                    
                                        <label className="label-prod1"><b>Name :  </b>{cartProduct.productId.name}</label><br /><br />
                                        <label className="label-prod2"><b>Price : </b>₹{cartProduct.productId.price}</label><br /><br />
                                        <label className="label-prod3"><b>Category : </b>{cartProduct.productId.category}</label><br /><br />
                                        <label className="label-prod4"><b>Trends : </b>{cartProduct.productId.trend}</label><br /><br />
                                        <label className="label-prod5"><b>Description : </b>{cartProduct.productId.desc}</label><br /><br /><br />
                                        <button className='buy-product-butt' onClick={()=>{handleBuyNow(cartProduct.productId._id)}}>BUY NOW</button><br/>
                                        <button className='view-product-butt' onClick={()=>{removeCartItem(cartProduct._id)}}>REMOVE</button><br/><br/>
                                      
                                    </p>
                                </div>
                                </div>
                            </div>
                          </div>

                        </div>
                        ))}
                    </ul>
                
            </div>
           
        </div>
    )
}

export default CartProducts;

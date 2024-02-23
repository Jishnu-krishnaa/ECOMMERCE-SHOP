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
        <div className='body-list'>
            <CustNavbar /><br />
            <div className='cata-part1'>
                <header><h2 className='head-prod1'>My CART</h2></header><br /><br /><br /><br />
                <div className="product-card-container row" >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {cartProducts.map((cartProduct) => (
                            <div className='col-3' key={cartProduct._id}>
                                <li>
                                    <div className="card">
                                        <img src={`http://localhost:3001/${cartProduct.productId.pic.filename}`} className="card-img-top" alt={cartProduct.name} />
                                        <div className="card-body">
                                            <ul>
                                                <li><label className="label-prod1"><b>Name :  </b>{cartProduct.productId.name}</label><br /></li>
                                                <li><label className="label-prod2"><b>Price : </b>₹{cartProduct.productId.price}</label><br /></li>
                                                <li><label className="label-prod3"><b>Category : </b>{cartProduct.productId.category}</label><br /></li>
                                                <li><label className="label-prod4"><b>Trends : </b>{cartProduct.productId.trend}</label><br /></li>
                                                <li><label className="label-prod5"><b>Description : </b>{cartProduct.productId.desc}</label><br /><br /></li>
                                                <button className='buy-product-butt' onClick={()=>{handleBuyNow(cartProduct.productId._id)}}>BUY NOW</button><br/>
                                                <button className='view-product-butt' onClick={()=>{removeCartItem(cartProduct._id)}}>REMOVE</button><br/><br/>

                                            </ul>  
                                    </div>
                                    </div><br/><br/>
                                </li>
                            </div>
                        ))}
                        </ul>
                </div>
            </div>
           
        </div>
    )
}

export default CartProducts;

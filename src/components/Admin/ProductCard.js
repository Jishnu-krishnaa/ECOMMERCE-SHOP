import React from "react";
import axios from "axios";
import './ProductCard.css'
const ProductCard = ({ product, ProductDeleted }) => {
  const handleDelete = () => {
    axios.get(`http://localhost:3001/ecommerce/DeleteProduct/${product._id}`)
      .then((response) => {
        if (response.status === 200) {
          alert('Product deleted Successfully') 
          window.location.reload();
          console.log(response.data);
          if (ProductDeleted) {
            ProductDeleted(product._id); 
          }
        } else {
          console.error('Error deleting product:', response.data);
        }
      })
      .catch((error) => {
        console.error('Error deleting product:', error);
      });
  };
  return (
    <div>
      <div className="product-card">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <div class="card">
        <img src={`http://localhost:3001/${product.pic.filename}`} class="card-img-top" alt={product.name} />
        <div class="card-body-pro"><ul>
        <li><label className="label-prod1"><b>Name :  </b>{product.name}</label><br/></li>
        <li><label className="label-prod2"><b>Price : </b>₹{product.price}</label><br/></li>
        <li><label className="label-prod3"><b>Catagory : </b>{product.catagory}</label><br/></li>
        <li><label className="label-prod4"><b>Trends : </b>{product.trend}</label><br/></li>
        <label className="label-prod5"><li><b>Description : </b></li>{product.desc}</label></ul><br/>
        <button className="delete-button" onClick={handleDelete}>Remove</button><br/><br/><br/>
        </div>
        </div>
      </ul><br/><br/> <br/><br/>
      <br/>
    </div><br/><br/>
    </div>
  );
};

export default ProductCard;

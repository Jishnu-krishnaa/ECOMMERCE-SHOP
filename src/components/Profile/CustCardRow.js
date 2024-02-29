import axios from 'axios';
import './CustCardRow.css'
import { useNavigate } from 'react-router-dom';


const CustCardRow = ({ product, user, ProductAdded }) => {
  const navigate = useNavigate();      


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
    <div className="RowPost-card">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <div class="card"> 
      <img src={`http://localhost:3001/${product.pic.filename}`} class="card-img-top" alt={product.name} /><br/>
      <div class="card-body-rwcr"><ul>
      <li><label className="label-prod1"><b>Name :  </b>{product.name}</label><br/></li>
      <li><label className="label-prod2"><b>Price : </b>₹{product.price}</label><br/></li>
      <li><label className="label-prod3"><b>Catagory : </b>{product.catagory}</label><br/></li>
      <li><label className="label-prod4"><b>Trends : </b>{product.trend}</label><br/></li>
      <li><label className="label-prod5"><b>Description : </b>{product.desc}</label><br/><br/></li></ul>
      <button className='cust-homr-Buy' onClick={()=>{handleBuyNow(product._id)}}>BUY NOW</button><br/>
    <button className="cust-homr-cart" onClick={()=>addToCart(product._id)}>ADD CART</button><br/><br/><br/>
      </div>
      </div>
    </ul><br/><br/>
  </div>
  )
};

export default CustCardRow

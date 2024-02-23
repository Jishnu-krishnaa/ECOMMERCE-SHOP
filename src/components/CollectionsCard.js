import React from 'react'
import { Link } from 'react-router-dom'

const CollectionsCard = ({product}) => {
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
        <li><label className="label-prod5"><b>Description : </b></label></li></ul>{product.desc}<br/>
        <p><Link to='/Login' >Login</Link> for buy this <b>{product.name}</b></p>
        </div>
        </div>
      </ul><br/><br/><br/><br/><br/><br/>
    </div>
  )
}

export default CollectionsCard

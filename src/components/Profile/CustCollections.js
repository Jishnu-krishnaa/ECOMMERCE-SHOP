import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardCustCollections from './CardCustCollections';
import CustNavbar from '../Nav/CustNavbar';


const CustCollections = () => {


  const [products1, setProducts1] = useState([]);
  const [products2, setProducts2] = useState([]);
  const [products3, setProducts3] = useState([]);
  const [products4, setProducts4] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/ecommerce/ViewAllproductsbycatagory/Men")
      .then((response) => {
        // Assuming the response.data is an array of users
        console.log(response)
        setProducts1(response.data);
      })
      .catch((error) => {
        console.log("Error fetching users:", error);
      });

      axios.get("http://localhost:3001/ecommerce/ViewAllproductsbycatagory/Women")
      .then((response) => {
        // Assuming the response.data is an array of users
        console.log(response)
        setProducts2(response.data);
      })
      .catch((error) => {
        console.log("Error fetching users:", error);
      });

  axios.get("http://localhost:3001/ecommerce/ViewAllproductsbycatagory/Kids")
      .then((response) => {
        // Assuming the response.data is an array of users
        console.log(response)
        setProducts3(response.data);
      })
      .catch((error) => {
        console.log("Error fetching users:", error);
      });
 
      axios.get("http://localhost:3001/ecommerce/ViewAllproductsbycatagory/Accessories")
      .then((response) => {
     
        console.log(response)
        setProducts4(response.data);
      })
      .catch((error) => {
        console.log("Error fetching users:", error);
      });
  }, []);
  
  

  return (
    <div className='body-list'>
      <CustNavbar/><br/>

      <div className='cata-part1'>
      <header><h2 className='head-prod1' >Men Collections</h2></header><br/><br/><br/><br/>
      <div className="product-card-container row" >
        {products1.map((product) => (
          <div class='col-3'>  
          <CardCustCollections key={product._id} product={product} />
      </div>
        ))}
      </div></div><br/>
      

      <div className='cata-part2'>
      <header><h2 className='head-prod1'>Women Collections</h2></header><br/><br/><br/><br/> 
      <div className="product-card-container row" >
        {products2.map((product) => (
          <div class='col-3'>
          <CardCustCollections key={product._id} product={product} />
      </div>
        ))}
      </div></div><br/>


      <div className='cata-part3'>
      <header><h2 className='head-prod1'>kids Collections</h2></header><br/><br/><br/><br/>
      <div className="product-card-container row" >
        {products3.map((product) => (
          <div class='col-3'>
          <CardCustCollections key={product._id} product={product} />
      </div>
        ))}
      </div></div><br/>


      <div className='cata-part4'>
      <header><h2 className='head-prod1'>Accessories Collections</h2></header><br/><br/><br/><br/>
      <div className="product-card-container row" >
        {products4.map((product) => (
          <div class='col-3'>
          <CardCustCollections key={product._id} product={product} />
      </div>
        ))}
      </div><br/><br/></div><br/>


    </div>
  );
}

export default CustCollections;

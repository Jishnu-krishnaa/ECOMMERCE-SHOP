import React, { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import "./AddProduct.css";
import axios from "axios";
const AddProducts = () => {
  const [Products, setProducts] = useState({
    name: "",
    price: "",
    desc: "",
    catagory:"",
    trend:"",
    pic: null,
  });
  const onClickChange = (e) => {
    if (e.target.name === "pic") {
      setProducts({ ...Products, [e.target.name]: e.target.files[0] });
    } else {
      setProducts({ ...Products, [e.target.name]: e.target.value });
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(Products)
    axios
      .post("http://localhost:3001/ecommerce/addProduct", Products, { headers:{
        "Content-Type":"multipart/form-data",
      }, 
    })
      .then((result) => {
        if (result.status === 200) {
          alert("Product Added");
          window.location.reload();
          console.log(result);
        } else {
          alert("Product inserting Failed");
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  return (
    <div>
      <AdminNavbar />
      <br />
      <br />
      <br />
      <div className="add-body">
        <form className="add-form" onSubmit={onSubmit}>
          <h1 className="head-add">
            E Kart<h6 className="sign-h6">Online purchasing & selling</h6>
          </h1>
          <br />
          <h4 className="h4-add">&#171;Add New Product</h4>
          <br />
          <label className="add-label1">Product Name : </label>
          <input
            type="text"
            placeholder="Product name"
            name="name"
            // value={Products.name}
            onChange={onClickChange}
          />
          <label className="add-label2">Price : </label>
          <input
            type="number"
            placeholder="Price"
            name="price"
            // value={Products.price}
            onChange={onClickChange}
          />
          <label className="add-label3">Product Picture : </label>
          <div class="input-group mb-3">
            <input
              type="file"
              class="form-control"
              id="inputGroupFile02"
              name="pic"
              // value={Products.pic}
              onChange={onClickChange}
            />
          </div>
          <div>
            <label className='add-label15'>Catagory : </label>
            <select className="add-select" name="catagory" value={Products.catagory} onChange={onClickChange}>
              <option>Select</option>
              <option>Men</option>
              <option>Women</option>
              <option>Kids</option>
              <option>Accessories</option>
            </select>
          </div><br/>
          <div>
            <label className='add-label15'>Trends : </label>
            <select className="add-select" name="trend" value={Products.trend} onChange={onClickChange}>
              <option>Select</option>
              <option>Fashion Best sellers</option>
              <option>Best of weekly Deals</option>
            </select>
          </div><br/>
          <label className="add-label4">Description : </label>
          <textarea
            className="text-area"
            placeholder="Product description...."
            name="desc"
            // value={Products.desc}
            onChange={onClickChange}
          ></textarea>
          <br />
          <br />
          <button className="add-button">Add Product</button>
        </form>
        <br />
        <br />
        <br />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
export default AddProducts;

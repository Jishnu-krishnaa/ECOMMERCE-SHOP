import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Footer from './components/Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import CustHome from './components/Profile/CustHome'
import Signup from './components/Profile/Signup'
import About from './components/About'
import Login from './components/Profile/Login';
import LogOut from './components/Profile/LogOut';
import AdminLog from './components/Admin/AdminLog';
import MyProfile from './components/Profile/MyProfile';
import Home from './components/Home';
import AddProducts from './components/Admin/AddProducts';
import AdminProfile from './components/Admin/AdminProfile';
import AllUsers from './components/Admin/AllUsers';
import ProductList from './components/Admin/ProductList';
import ProductCard from './components/Admin/ProductCard';
import Catagories from './components/Collections';
import Arrivals from './components/Arrivals';
import Cart from './components/Profile/Cart';
import CustCatagories from './components/Profile/CustCollections';
import CustCollections from './components/Profile/CustCollections';
import BuyNow from './components/Profile/BuyNow';
import PlacedOrder from './components/Profile/PlacedOrder';


function App() {
  return (
    <BrowserRouter>
    <div>
    <Routes>
      <Route exact path='/' element={<Home />}  /> 
      <Route exact path='/Home' element={<Home />}  /> 
      <Route path='/CustHome' element={<CustHome />}  /> 
      <Route path='/Signup' element={<Signup/>} />  
      <Route path='/About' element={<About/>} /> 
      <Route path='/Login' element={<Login/>} />
      <Route path='/LogOut' element={<LogOut/>} />
      <Route path='/MyProfile' element={<MyProfile/>} />
      <Route path='/AdminLog' element={<AdminLog/>} />
      <Route path='/AddProducts' element={<AddProducts/>} />
      <Route path='/AdminProfile' element={<AdminProfile/>} />
      <Route path='/AllUsers' element={<AllUsers/>} />
      <Route path='/ProductList' element={<ProductList/>} />
      <Route path='/ProductCard' element={<ProductCard/>} />
      <Route path='/Catagories' element={<Catagories/>} />
      <Route path='/Arrivals' element={<Arrivals/>} />
      <Route path='/Cart' element={<Cart/>} />
      <Route path='/CustCatagories' element={<CustCatagories/>} />
      <Route path='/CustCollections' element={<CustCollections/>} />
      <Route path='/BuyNow/:stockid' element={<BuyNow/>} />
      <Route path='/PlacedOrder' element={<PlacedOrder/>} />


    </Routes> 
    <Footer/> 
      </div>
    </BrowserRouter>

   )
}

export default App

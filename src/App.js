import  { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import './App.scss';
import { Header } from "./components/header"
import { Footer } from './components/footer';
import {Shop} from './pages/shop';
import Products from './components/products'; 
import { Frontpage } from './pages/frontpage'; 
import  {Login}  from './pages/login';
import {Cart} from './pages/cart'
// import React, { useState } from 'react';
function App() {
  // const [token, setToken] = useState();

  // if(!token) {
  //   return <Login setToken={setToken} />  
  // } 

  return (

    <div className="App">  
        <Router>
      <Header />

        <Routes>
          <Route exact path="/" element={<Frontpage />} />
          
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} /> 
          <Route exact path='product/:id'  element={<Products />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      
      <Footer />
        </Router> 
    </div> 
  
  );
}

export default App;

<<<<<<< HEAD
import './App.scss'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap/dist/js/bootstrap.js";


import {Header} from "./components/header"
function App() {
  return (
    <div className="App"> 
      <Header />
<h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
=======

import  { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import './App.scss';
import { Header } from "./components/header"
import { Footer } from './components/footer';
import {Shop} from './components/shop'
import Products from './components/products'
import { Frontpage } from './components/frontpage';
function App() {


  return (

    <div className="App">  
        <Router>
      <Header />

        <Routes>
          <Route exact path="/" element={<Frontpage />} />
          
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Frontpage />} /> 
          <Route path="/checkout" element={<Products />} />
          <Route path="/profile" element={<Frontpage />} />
        </Routes>
      
      <Footer />
        </Router> 
    </div> 
  
>>>>>>> a7f4cd2ed3145f6ffe32b4aafffc9d2ec6a6a5ab
  );
}

export default App;

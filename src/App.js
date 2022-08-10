
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
  
  );
}

export default App;

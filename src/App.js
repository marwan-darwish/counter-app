import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CounterWrapper from './components/CounterWrapper';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Products from './components/Products';
import SingleProduct from './components/SingleProduct';
import { useState } from 'react';
import Cart from './components/Cart';

function App() {
const[cartCount,setCartCount]=useState(0)
const[cartContent,setCartContent]=useState([])

  const modifyCart=(product)=>{
    setCartContent(prev=>[product,...prev])

        setCartCount((prevcount)=>prevcount+1)


  }
  return (
    <Router>
<NavBar count={cartCount}/>
<Routes>
  <Route path='/' element={<CounterWrapper/>}/>
  <Route path='/products' element={<Products/>}/>
  <Route path='/products/:id' element={<SingleProduct addtocart={modifyCart}/>} />
<Route path='/cart' element={<Cart cartContent={cartContent}/>}/>
</Routes>
</Router>
    );
}

export default App;

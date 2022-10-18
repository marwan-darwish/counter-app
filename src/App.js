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
  return (
    <Router>
<NavBar/>
<Routes>
  <Route path='/' element={<CounterWrapper/>}/>
  <Route path='/products' element={<Products/>}/>
  <Route path='/products/:id' element={<SingleProduct/>} />
<Route path='/cart' element={<Cart/>}/>
</Routes>
</Router>
    );
}

export default App;

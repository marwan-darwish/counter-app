import React from 'react'
import { useState,useEffect } from 'react'
import {Link} from "react-router-dom"
const Products = () => {
    const [products,setProducts]=useState([])


    const getProducts=()=>fetch('https://fakestoreapi.com/products?limit=6')
    .then(res=>res.json())
    .then(json=>setProducts(json))
    useEffect(() => {
  
      getProducts()
       
      }, [])
  return (
    <div className='container'>
<div className="row">
{products.map((product)=>(
<div className="col-md-4 text-center"  key={product.id}>
<div>
  <div>
  <Link to={`/products/${product.id}`}>

    <img  src={product.image} className="img-fluid w-50"/>
    </Link>
  </div>
  <h4>{product.title}</h4>
  <p>{product.price}</p>


</div>

</div>

))}

</div>

    </div>
  )
}

export default Products
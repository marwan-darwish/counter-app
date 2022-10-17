import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
const SingleProduct = ({addtocart}) => {
  const[product,setProduct]=useState({})
const {id}=useParams()
  useEffect(() => {
    getProduct()
  
   
  }, [])
  
  const getProduct=()=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>setProduct(json))
  }
  return (
    <div className='container'>
<div className="row">
  <div className="col-md-6">
    <div className='w-50 ms-auto me-auto'>
      <img src={product.image} className="img-fluid" alt="product" />
    </div>
  </div>
  <div className="col-md-6">
    <h4>{product.title}</h4>
    <p>{product.price}</p>
    <button className='btn btn-primary' type='button' onClick={()=>addtocart(product)}>Add to cart</button>
  </div>
</div>

    </div>
  )
}

export default SingleProduct
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import{BsFillCartXFill} from "react-icons/bs"
import { removeFromCart } from '../redux/cartslice/cartSlice'
const Cart = (props) => {
  const cart=useSelector((state)=>state.cart.cartContent)
  const totalItems=useSelector((state)=>state.cart.cartCount)
  const dispatch=useDispatch()
  const deleteProduct=(product)=>{
dispatch(removeFromCart(product))
  }
  console.log(cart);
  return (
    <>
<section className="vh-100">
<div className="container h-100">
<p className='text-center'><span className="h4">{totalItems} item in your cart</span></p>

  <div className="row d-flex justify-content-center align-items-center h-100">
    <div className="col">
{cart.map((item)=>(
      <div className="card mb-4">
      <div className="card-body p-4">

        <div className="row align-items-center">
          <div className="col-md-2">
            <img src={item.image}
              className="img-fluid" alt="Generic placeholder image"/>
          </div>
          <div className="col-md-2 d-flex justify-content-center">
            <div>
              <p className="small text-muted mb-4 pb-2">Name</p>
              <p className="lead fw-normal mb-0">{item.title}</p>
            </div>
          </div>
          <div className="col-md-2 d-flex justify-content-center">
            <div>
              <p className="small text-muted mb-4 pb-2">Color</p>
              <p className="lead fw-normal mb-0">
                pink rose</p>
            </div>
          </div>
          <div className="col-md-2 d-flex justify-content-center">
            <div>
              <p className="small text-muted mb-4 pb-2">Quantity</p>
              <p className="lead fw-normal mb-0">{item.quantity}</p>
            </div>
          </div>
          <div className="col-md-2 d-flex justify-content-center">
            <div>
              <p className="small text-muted mb-4 pb-2">Price</p>
              <p className="lead fw-normal mb-0">{item.price}</p>
            </div>
          </div>
          <div className="col-md-2 d-flex justify-content-center">
            <div>
              <p className="small text-muted mb-4 pb-2">Total</p>
              <p className="lead fw-normal mb-0">{item.price*item.quantity}</p>
            </div>
            <span className='text-danger remove mt-auto mb-auto ps-5' onClick={()=>deleteProduct(item)}>Remove <BsFillCartXFill/></span>

          </div>
        </div>

      </div>
    </div>

))}
  
      {/* <div className="card mb-5">
        <div className="card-body p-4">

          <div className="float-end">
            <p className="mb-0 me-5 d-flex align-items-center">
              <span className="small text-muted me-2">Order total:</span> <span
                className="lead fw-normal">$799</span>
            </p>
          </div>

        </div>
      </div> */}

      <div className="d-flex justify-content-end">
        <Link to="/products">        <button type="button" className="btn btn-light btn-lg me-2">Continue shopping</button>
</Link>
        {totalItems>0&&<button type="button" className="btn btn-primary btn-lg">Proceed to checkout</button>}
      </div>

    </div>
  </div>
</div>
</section>
</>
  )
}

export default Cart
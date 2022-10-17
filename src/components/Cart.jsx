import React from 'react'

const Cart = (props) => {
    console.log(props.cartContent);
  return (
    <div>
{props.cartContent.length==0?"no items" :props.cartContent.map((product)=>(
<h2>{product.title}</h2>

))}

    </div>
  )
}

export default Cart
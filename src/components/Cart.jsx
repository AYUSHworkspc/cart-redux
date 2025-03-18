import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { clearCart,selectCartItems } from "../Redux/cartslice"

function Cart() {
    const dispatch=useDispatch();
const cartItem=useSelector(selectCartItems)
console.log("cart items=======>",cartItem);
  return (
    
    <div className='container my-5'  style={{width:"700px"}}>
{cartItem.map((item)=>(<div key={item.id} className='container '>
    <div className="card mb-3" style={{width:"700px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={item.imgSrc} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.title}</p>
        <button className='btn btn-warning'>buy now</button>
        <button className='btn btn-primary mx-3 '>{item.price}</button>
    
      </div>
    </div>
  </div>
</div>                  </div>))}

<button onClick={()=>dispatch(clearCart())} className='btn btn-warning'> clear Cart</button>

    </div>
  )
}

export default Cart
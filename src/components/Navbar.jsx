import React from 'react'
import { useSelector } from 'react-redux'
import { selectCartItems,selectCartTotalPrice } from "../Redux/cartslice"
import { Link } from 'react-router-dom';

function Navbar() {
//const dispatch=useDispatch();
const cartItem=useSelector(selectCartItems);
const totalPrice=useSelector(selectCartTotalPrice)

  return (


    <div className='nav_bar sticky-top'>
        <Link to={"/"} className="left">  <h3>redux tool kit</h3></Link>
        <div className="middle">

 <button className="btn btn-warning">cart items total price={totalPrice}</button>
        </div>
        <Link to={"/cart"} className="right"><button type="button" className="btn btn-primary position-relative">
        <span class="material-symbols-outlined">
shopping_cart
</span>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cartItem.length  }
    <span className="visually-hidden">unread messages</span>
  </span>
</button></Link>
    
    </div>
  )
}

export default Navbar
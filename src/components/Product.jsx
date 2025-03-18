import React from 'react'
import { Products } from '../data' // hand coded data present in data.js file
import { useSelector,useDispatch } from 'react-redux'
import { addToCart,selectCartItems } from "../Redux/cartslice"


import { ToastContainer, toast,Bounce } from 'react-toastify';


function Product() {

const dispatch=useDispatch();
const cartItem=useSelector(selectCartItems)
console.log("cart items=======",cartItem);


const handleAddToCart=(item)=>{
    dispatch(addToCart(item));
    toast.success('🦄 ITEM ADDED TO CART ', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
}

  return (
    <div>
<ToastContainer
/>

<div className='container'>
    <div className='row'>{
        
        
Products.map((item)=>( <div key={item.id} className='container col-md-4'>
   <div className="card" style={{width:"18rem "}}>
  <img src={item.imgSrc} className="card-img-top" alt="..."/>
  <div className="card-body text-dark text-center">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">{item.description}</p>
<button className="btn btn-primary mx-3">{item.price}{"₹"}</button>
<button className="btn btn-warning "   onClick={()=>handleAddToCart(item)}>ADD TO CART</button>  
{/* handleaddtocart  main jo item hain wo map wala item hain */}
    
  </div>
</div>
</div>  )     )
        
        }</div>
</div>




    </div>
  )
}

export default Product
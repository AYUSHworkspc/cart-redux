import {configureStore} from "@reduxjs/toolkit"
import counterSlice  from "../counterSlice"
import  cartSlice  from "../cartslice"



export const store=configureStore({    //yaha store likha hain to main .jsx main store hi import hoga
reducer:{
    counter:counterSlice,
    cart:cartSlice,


}

})
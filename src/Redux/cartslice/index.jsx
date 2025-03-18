import { createSlice } from "@reduxjs/toolkit";

export const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
        totalPrice:0
    },
    reducers:{
addToCart:(state,action)=>{
    const newItem = action.payload;
    state.items.push(newItem);
state.totalPrice = state.totalPrice+ newItem.price


},
clearCart:(state,action)=>{
    state.items=[],
    state.totalPrice=0
},
    }
})



export const selectCartItems=(state)=>state.cart.items;  // items array ko use karne ke lea import kara hain
export const selectCartTotalPrice=(state)=>state.cart.totalPrice;    //total price ka access deta haon jo ki initially 0 tha 


export const {addToCart,clearCart}=cartSlice.actions;

export default cartSlice.reducer;

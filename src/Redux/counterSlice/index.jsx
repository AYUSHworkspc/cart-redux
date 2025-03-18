import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
export const counterSlice=createSlice({
    name:"counter",    // state ka naam hota hain
    initialState:10,
    reducers:{
        increaseby1:(state)=>state+1,
        increaseby5:(state)=>state+5,
        increseby10:(state)=>state+10,
        decreseby1:(state)=>state-1,
        decreseby5:(state)=>state-5,
        decreseby10:(state)=>state-10,
    }
})

export const {increaseby1,increaseby5,increseby10,decreseby1,decreseby10,decreseby5}= counterSlice.actions
export default counterSlice.reducer
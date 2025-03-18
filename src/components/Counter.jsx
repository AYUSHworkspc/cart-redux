import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increaseby1,increaseby5,increseby10,decreseby1,decreseby5,decreseby10 } from '../Redux/counterSlice'
function Counter() {

    const count=useSelector((state)=>state.counterSlice);
    const dispatch=useDispatch();


  return (
    <div>

<h1 className='text-2xl font-bold '>{count}</h1>

<div className='flex m-auto gap-25 text-black mt-5'>
<button onClick={()=>dispatch(increaseby1())} className='bg-yellow-200 border-2 p-1'>increaseby1</button>
<button onClick={()=>dispatch(increaseby5())} className='bg-yellow-200 border-2 p-1'>increaseby5</button>
<button onClick={()=>dispatch(increseby10())} className='bg-yellow-200 border-2 p-1'>increaseby10</button>
<button onClick={()=>dispatch(decreseby1())} className='bg-yellow-200 border-2 p-1'>decreseby1</button>
<button onClick={()=>dispatch(decreseby10())} className='bg-yellow-200 border-2 p-1'>decreseby10</button>
<button onClick={()=>dispatch(decreseby5())} className='bg-yellow-200 border-2 p-1'>decreseby5</button>
</div>



    </div>
  )
}

export default Counter
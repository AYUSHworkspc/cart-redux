import react from 'react'
import Counter from './components/Counter'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Product from './components/Product'
import {BrowserRouter,Routes,Route} from "react-router-dom"


function App() {
  

  return (
    <>
      <BrowserRouter>
      {/* <Counter/> */}
      <Navbar/>
      <Routes>

<Route path="/" element={ <Product/>}  />
<Route path='/cart' element={ <Cart/>}  />
     
     
      
      
      
      </Routes>
      </BrowserRouter>
    </>
    
   
  )
}

export default App

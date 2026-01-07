import {useState} from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Products from "./components/Products"
import Cart from "./components/Cart"
import Checkout from "./components/Checkout"
import "./App.css"

function App(){
 const [cart,setCart]=useState([])
 return(
  <div>
   <Navbar count={cart.length}/>
   <Home/>
   <Products cart={cart} setCart={setCart}/>
   <Cart cart={cart}/>
   <Checkout/>
  </div>
 )
}
export default App

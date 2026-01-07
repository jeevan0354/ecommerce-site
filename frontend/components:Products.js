import {products} from "../data"

function Products({cart,setCart}){
 return(
  <div className="page">
   {products.map(p=>(
    <div className="card" key={p.id}>
     {p.name} - ₹{p.price}
     <button onClick={()=>setCart([...cart,p])}>Add</button>
    </div>
   ))}
  </div>
 )
}
export default Products


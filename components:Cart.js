function Cart({cart}){
 return(
  <div className="page">
   <h3>Cart</h3>
   {cart.map((c,i)=>(<p key={i}>{c.name}</p>))}
  </div>
 )
}
export default Cart

const products=[
  {id:1,name:"Smart Watch",price:1999,img:"https://picsum.photos/300/200?1"},
  {id:2,name:"Headphones",price:1499,img:"https://picsum.photos/300/200?2"},
  {id:3,name:"Shoes",price:2499,img:"https://picsum.photos/300/200?3"},
  {id:4,name:"Backpack",price:999,img:"https://picsum.photos/300/200?4"}
];

let cart=[];

function loadProducts(){
  const box=document.getElementById("products");
  products.forEach(p=>{
    box.innerHTML+=`
    <div class="product">
      <img src="${p.img}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    </div>`;
  });
}
loadProducts();

function addToCart(id){
  const item=products.find(p=>p.id===id);
  cart.push(item);
  document.getElementById("cartCount").innerText=cart.length;
  renderCart();
}

function renderCart(){
  const box=document.getElementById("cartItems");
  box.innerHTML="";
  let total=0;
  cart.forEach((c,i)=>{
    total+=c.price;
    box.innerHTML+=`
    <div class="cart-item">
      <span>${c.name}</span>
      <span>₹${c.price}</span>
    </div>`;
  });
  document.getElementById("total").innerText=total;
}

function checkout(){
  alert("Order placed successfully!");
  cart=[];
  renderCart();
  document.getElementById("cartCount").innerText=0;
}

function toggleMenu(){
  const nav=document.getElementById("navLinks");
  nav.style.display = nav.style.display==="flex" ? "none":"flex";
}

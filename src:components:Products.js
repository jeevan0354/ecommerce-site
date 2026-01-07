import { Link } from "react-router-dom";

function Products() {
  const items = [
    { id: 1, name: "Smart Phone", price: "₹12,000" },
    { id: 2, name: "Laptop", price: "₹45,000" },
    { id: 3, name: "Wireless Headphones", price: "₹2,000" },
    { id: 4, name: "Smart Watch", price: "₹3,500" }
  ];

  return (
    <div className="page">
      <h2>Products</h2>
      <div className="grid">
        {items.map(p => (
          <div className="card" key={p.id}>
            <h3>{p.name}</h3>
            <p className="price">{p.price}</p>
            <Link to={`/product/${p.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Products;

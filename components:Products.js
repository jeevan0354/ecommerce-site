import { Link } from "react-router-dom";

function Products() {
  const items = [
    { id: 1, name: "Mobile", price: "₹12,000" },
    { id: 2, name: "Laptop", price: "₹45,000" },
    { id: 3, name: "Headphones", price: "₹2,000" }
  ];

  return (
    <div className="page">
      <h2>Products</h2>

      {items.map((p) => (
        <div key={p.id} className="card">
          <h3>{p.name}</h3>
          <p>Price: {p.price}</p>
          <Link to={`/product/${p.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default Products;

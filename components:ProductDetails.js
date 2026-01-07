import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  return (
    <div className="page">
      <h2>Product Details</h2>
      <p>Product ID: {id}</p>
      <p>Available in stock</p>
      <p>Free delivery available</p>
    </div>
  );
}

export default ProductDetails;

import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  return (
    <div className="page">
      <h2>Product Details</h2>
      <p>Product ID: {id}</p>
      <p>Item available in stock.</p>
      <p>Free delivery on selected locations.</p>
    </div>
  );
}
export default ProductDetails;

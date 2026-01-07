import { Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Contact from "./components/Contact";
import "./App.css";

function Layout() {
  return (
    <div>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;

function App() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Week 6 React Assignment</h1>
      <p>Your React project is running successfully.</p>
    </div>
  );
}

export default App;

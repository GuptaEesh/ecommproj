import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CartPage, ProductListingPage, ProductPage } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductListingPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;

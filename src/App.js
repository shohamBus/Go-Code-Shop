import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import ProductDetails from "./views/ProductDetails";
import Showcart from "./component/context/ShowCart";
import ProductToCart from "./component/context/ProductToCart";
import { useState } from "react";

const App = () => {
  const [productCart, setProductCart] = useState([]);
  const [isCart, setIsCart] = useState(false);
  return (
    <div className="App">
      <Showcart.Provider value={{ isCart, setIsCart }}>
        <ProductToCart.Provider value={{ productCart, setProductCart }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products/:id" element={<ProductDetails />} />
          </Routes>
        </ProductToCart.Provider>
      </Showcart.Provider>
    </div>
  );
};

export default App;

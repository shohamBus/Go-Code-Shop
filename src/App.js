//how can i conect the count amount in the cart and in the products

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import UniqueNumber from "./component/context/UniqueNumber";
import ProductDetails from "./views/ProductDetails";
import Showcart from "./component/context/ShowCart";
import ProductToCart from "./component/context/ProductToCart";
import { useState } from "react";

const App = () => {
  const [productCart, setProductCart] = useState([]);
  const [isCart, setIsCart] = useState(false);
  const [uniqueNumber, setUniqueNumber] = useState(1);

  return (
    <div className="App">
      <UniqueNumber.Provider value={{ uniqueNumber, setUniqueNumber }}>
        <Showcart.Provider value={{ isCart, setIsCart }}>
          <ProductToCart.Provider value={{ productCart, setProductCart }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="products/:id" element={<ProductDetails />} />
            </Routes>
          </ProductToCart.Provider>
        </Showcart.Provider>
      </UniqueNumber.Provider>
    </div>
  );
};

export default App;

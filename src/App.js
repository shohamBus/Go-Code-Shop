//how can i conect the count amount in the cart and in the products

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import ProductDetails from "./views/ProductDetails";
import Showcart from "./component/context/ShowCart";
import ProductToCart from "./component/context/ProductToCart";
import { useState } from "react";

const App = () => {
  const [productCart, setProductCart] = useState([]);
  const [isCart, setIsCart] = useState(false);

  //onclick the '+' sign add the product to the cart

  const addToCart = (product) => {
    const found = productCart.find((item) => item.id === product.id);
    if (found === undefined) {
      setProductCart([...productCart, { ...product, qty: 1 }]);
    } else {
      setProductCart(
        productCart.map((item) =>
          item.id === product.id ? { ...product, qty: item.qty + 1 } : item
        )
      );
    }
    setIsCart(false);
  };

  // //decrement the product in 1

  const decrement = (product) => {
    const found = productCart.find((item) => item.id === product.id);
    if (found.qty === 1) {
      removeFromCartAllSame(found.id);
    } else {
      setProductCart(
        productCart.map((item) =>
          item.id === product.id ? { ...product, qty: item.qty - 1 } : item
        )
      );
    }
  };

  //onclick the 'remove From Cart' button remove from the cart the products

  const removeFromCartAllSame = (id) => {
    setProductCart(productCart.filter((item) => item.id !== id));
    setIsCart(productCart.length > 0 ? true : false);
  };

  return (
    <div className="App">
      <Showcart.Provider value={{ isCart, setIsCart }}>
        <ProductToCart.Provider
          value={{
            productCart,
            setProductCart,
            addToCart,
            decrement,
            removeFromCartAllSame,
          }}
        >
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

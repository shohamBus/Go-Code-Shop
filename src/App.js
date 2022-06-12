import Header from "./component/header/Header";
import Products from "./component/products/Products";
import "./App.css";
import { useState, useEffect } from "react";
import Utils from "./component/utils/Utils";
import ProductToCart from "../src/component/context/ProductToCart";
import Cart from "./component/carts/Cart";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productArray, setProductArray] = useState([]);
  const [originalArray, setOriginalArray] = useState([]);
  const [productCart, setProductCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((productArray) => productArray.json())
      .then((productArray) => {
        setProductArray(productArray);
        setOriginalArray(productArray);
        setIsLoading(false);
      });
  }, []);

  let optionCategory = " ";

  //filter the products

  function selectedCategory(optionCategory) {
    if (optionCategory === "show all") {
      setProductArray(originalArray);
    } else {
      setProductArray(
        originalArray.filter((e) => e.category === optionCategory)
      );
    }
  }

  //display each category just once

  const categories = originalArray
    .map((p) => p.category)
    .filter((value, index, array) => array.indexOf(value) === index);
  categories.unshift("show all");

  return (
    <>
      {isLoading ? (
        <Utils />
      ) : (
        <>
          <Header
            filterCategory={categories}
            optionCategory={optionCategory}
            selectedCategory={selectedCategory}
            fetchAgain={fetch}
          />
          <ProductToCart.Provider value={{ productCart, setProductCart }}>
            <Products productList={productArray} />
            <Cart />
          </ProductToCart.Provider>
        </>
      )}
    </>
  );
};

export default App;

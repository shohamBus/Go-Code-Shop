import { useState, useEffect } from "react";
import Utils from "../component/utils/Utils";
import Header from "../component/header/Header";
import Products from "../component/products/Products";
import Cart from "../component/carts/Cart";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [originalArray, setOriginalArray] = useState([]);
  const [productArray, setProductArray] = useState([]);

  //pull the product from the API

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
        <div>
          <Header
            filterCategory={categories}
            optionCategory={optionCategory}
            selectedCategory={selectedCategory}
            fetchAgain={fetch}
          />

          <Cart />
          <Products productList={productArray} />
        </div>
      )}
    </>
  );
};
export default Home;

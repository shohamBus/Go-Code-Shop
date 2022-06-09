import Header from "./component/header/Header";
import Products from "./component/products/Products";
import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((productArray) => {
        setProductArray(productArray);
        setOriginalArray(productArray);
      });
  }, []);

  const [productArray, setProductArray] = useState([]);
  const [originalArray, setOriginalArray] = useState([]);

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
      <Header
        filterCategory={categories}
        optionCategory={optionCategory}
        selectedCategory={selectedCategory}
      />
      <Products productList={productArray} />
    </>
  );
};

export default App;

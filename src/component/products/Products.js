import "./Products.css";
import Product from "../product/Product";
import { useState } from "react";

const Products = ({ productList }) => {
  console.log(productList);

  return (
    <div>
      {productList.length > 0 ? (
        <section className="products">
          {productList.map(({ id, image, title, price }) => (
            <Product
              imageProductPath={image}
              titleProduct={title}
              priceProduct={price}
              key={id}
            />
          ))}
        </section>
      ) : (
        <div class="divLoad loader">Load&nbsp;ng</div>
      )}
    </div>
  );
};

export default Products;

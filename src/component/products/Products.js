import "./Products.css";
import Product from "../product/Product";
import { useState } from "react";

const Products = ({ productList }) => {
  let [isApear, setIsApear] = useState(true);

  return (
    <div>
      <button
        onClick={() => {
          setIsApear(!isApear);
        }}
      >
        {isApear ? "HIDE" : "SHOW"}
      </button>

      {isApear && (
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
      )}
    </div>
  );
};

export default Products;

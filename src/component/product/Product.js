import "./Product.css";
import ProductToCart from "../context/ProductToCart";
import Showcart from "../context/ShowCart";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
const Product = ({ productItem, id }) => {
  const [countProduct, setCountProduct] = useState(0);
  const { productCart, setProductCart } = useContext(ProductToCart);
  const { setIsCart } = useContext(Showcart);

  const addToCart = () => {
    setProductCart(
      [
        ...productCart,
        {
          id: productItem.id,
          title: productItem.title,
          category: productItem.category,
          price: productItem.price,
          image: productItem.image,
        },
      ],
      setIsCart(true)
    );
  };

  const increment = () => {
    setCountProduct((prev) => prev + 1);
  };
  console.log(countProduct);
  const decrement = () => {
    setCountProduct((prev) => prev - 1);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={productItem.image} alt="img" />
      </div>
      <div className="product-info">
        <h5>{productItem.title}</h5>
        <h6>{productItem.price}$</h6>
        <div>
          <Link to={`products/${id}`}>
            <button type="button">Details</button>
          </Link>
        </div>
        <div className="buttons">
          <button
            onClick={() => {
              addToCart();
              increment();
            }}
          >
            +
          </button>
          <span>{countProduct}</span>
          <button onClick={decrement}>-</button>
        </div>
      </div>
    </div>
  );
};

export default Product;

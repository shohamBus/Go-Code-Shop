import "./Product.css";
import ProductToCart from "../context/ProductToCart";
import Showcart from "../context/ShowCart";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
const Product = ({ productItem, id }) => {
  //state for each product amount
  const [countProduct, setCountProduct] = useState(0);
  //state of context for the list of the cart
  const { productCart, setProductCart } = useContext(ProductToCart);
  //state builian of context display the cart or not
  const { setIsCart } = useContext(Showcart);

  //onclick the '+' sign add the product to the cart
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

  //add one product to cart
  const increment = () => {
    setCountProduct((prev) => prev + 1);
  };

  //subtract one product from cart ?
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

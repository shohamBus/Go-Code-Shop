import "./Product.css";
import ProductToCart from "../context/ProductToCart";
import Showcart from "../context/ShowCart";
import UniqueNumber from "../context/UniqueNumber";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
const Product = ({ productItem, id }) => {
  const [countProduct, setCountProduct] = useState(0);
  const { productCart, setProductCart } = useContext(ProductToCart);
  const { setIsCart } = useContext(Showcart);
  const { uniqueNumber, setUniqueNumber } = useContext(UniqueNumber);

  //onclick the '+' sign add the product to the cart
  const addToCart = () => {
    setProductCart([
      ...productCart,
      {
        id: productItem.id,
        title: productItem.title,
        category: productItem.category,
        price: productItem.price,
        image: productItem.image,
        uniqueNumber,
      },
    ]);

    setIsCart(true);
    incrementUniqueNumber();
  };
  //onclick the '-' sign remove from the cart the product
  const removeFromCart = (id) => {
    let found = productCart.find((item) => item.id === id);
    setProductCart(productCart.filter((item) => item !== found));
  };

  //increment the unique number
  const incrementUniqueNumber = () => {
    setUniqueNumber((prev) => prev + 1);
  };
  //add one product to cart
  const increment = () => {
    setCountProduct((prev) => prev + 1);
  };

  //subtract one product from cart ?
  const decrement = () => {
    countProduct !== 0
      ? setCountProduct((prev) => prev - 1)
      : setCountProduct(0);
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

          <button
            onClick={() => {
              decrement();
              removeFromCart(productItem.id);
            }}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

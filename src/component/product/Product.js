import "./Product.css";
import ProductToCart from "../context/ProductToCart";
import { useContext } from "react";

const Product = ({ productItem }) => {
  const { productCart, setProductCart } = useContext(ProductToCart);
  const addToCart = () => {
    setProductCart([
      ...productCart,
      {
        id: productItem.id,
        title: productItem.title,
        category: productItem.category,
        price: productItem.price,
        image: productItem.image,
      },
    ]);
  };

  const removeFromCart = () => {
    setProductCart(
      productCart.filter((item) => item.number !== productItem.number)
    );
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={productItem.image} alt="img" />
      </div>
      <div className="product-info">
        <h5>{productItem.title}</h5>
        <h6>{productItem.price}$</h6>
        <button onClick={addToCart}>+</button>
        <button onClick={removeFromCart}>-</button>
      </div>
    </div>
  );
};

export default Product;

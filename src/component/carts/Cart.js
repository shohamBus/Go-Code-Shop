import ProductToCart from "../context/ProductToCart";
import { useContext } from "react";
import "./Carts.css";

const Cart = () => {
  const { productCart, setProductCart } = useContext(ProductToCart);

  const addToCart = () => {
    setProductCart([
      ...productCart,
      {
        id: product.id,
        title: product.title,
        category: product.category,
        price: product.price,
        image: product.image,
      },
    ]);
  };
  const removeFromCart = () => {
    setProductCart(productCart.filter((item) => item.id !== product.id));
  };

  return productCart.map((product) => (
    <>
      <div className="product-card">
        <div className="product-image">
          <img src={product.image} alt="img" />
        </div>
        <div className="product-info">
          <h5>{product.title}</h5>
          <h6>{product.price}</h6>
          <button onClick={addToCart}>+</button>
          <button onClick={removeFromCart}>-</button>
        </div>
      </div>
    </>
  ));
};
export default Cart;

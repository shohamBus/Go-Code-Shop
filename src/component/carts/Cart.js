import ProductToCart from "../context/ProductToCart";
import ShowCart from "../context/ShowCart";
import { useContext, useState } from "react";
import "./Carts.css";

const Cart = () => {
  const { productCart, setProductCart } = useContext(ProductToCart);
  const { isCart, setIsCart } = useContext(ShowCart);
  const [countProduct, setCountProduct] = useState(1);

  //onclick the 'remove From Cart' button remove from the cart the product
  const removeFromCart = (id) => {
    setProductCart(productCart.filter((item) => item.id !== id));
  };

  //dont show the cart if it empty
  setIsCart(productCart.length > 0 ? true : false);

  //function to display the cart container with the choosen products
  const display = (productCart) => {
    return (
      <div className="container-cart">
        <div className="header-cart">
          <h1>Your Cart</h1>
          <button onClick={() => setIsCart(false)}>Hide</button>
        </div>
        {productCart.map((product) => (
          <div className="ptoduct-cart">
            <div className="info-cart">
              <h3>{product.title}</h3>
              <h4>{product.price}$</h4>
              <button>+</button>
              <span>{countProduct}</span>
              <button>-</button>
              <button onClick={() => removeFromCart(product.id)}>
                remove From Cart
              </button>
            </div>
            <div className="image-cart">
              <img src={product.image} alt="img" />
            </div>
          </div>
        ))}
      </div>
    );
  };
  return isCart && display(productCart);
};
export default Cart;

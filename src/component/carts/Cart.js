import ProductToCart from "../context/ProductToCart";
import ShowCart from "../context/ShowCart";
// import UniqueNumber from "../context/UniqueNumber";
import { useContext, useState } from "react";
import "./Carts.css";

const Cart = () => {
  const { productCart, setProductCart } = useContext(ProductToCart);
  const { isCart, setIsCart } = useContext(ShowCart);
  const [countProduct, setCountProduct] = useState(1);

  //onclick the '+' sign add the product to the cart
  const addToCart = ({ product, id }) => {
    incrementCountNumber();
    let found = productCart.find((item) => item.id === product.id);
    if (!found.id) {
      //if includes adding just amount
      setProductCart([
        ...productCart,
        {
          id: product.id,
          title: product.title,
          category: product.category,
          price: product.price,
          image: product.image,
          countProduct,
        },
      ]);
    }
    setIsCart(true);
  };

  // incrementcountNumber;
  const incrementCountNumber = () => {
    setCountProduct((prev) => prev + 1);
  };
  // incrementcountNumber;
  const decrementCountNumber = () => {
    setCountProduct((prev) => prev + 1);
  };
  // //decrement
  const decrement = ({ product }) => {
    decrementCountNumber();
    product.countProduct > 0
      ? (product.countProduct = product.countProduct - 1)
      : setIsCart(false);
    setIsCart(productCart.length > 0 ? true : false);
  };

  //onclick the 'remove From Cart' button remove from the cart the product
  const removeFromCartAllSame = (id) => {
    setProductCart(productCart.filter((item) => item.id !== id));
    setIsCart(productCart.length > 0 ? true : false);
  };

  //dont show the cart if it empty

  //function to display the cart container with the choosen products
  return (
    isCart && (
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
              <button onClick={() => addToCart({ product })}>+</button>
              <span>{product.countProduct}</span>
              <button
                onClick={() => {
                  decrement({ product });
                }}
              >
                -
              </button>
              <button onClick={() => removeFromCartAllSame(product.id)}>
                remove From Cart
              </button>
            </div>
            <div className="image-cart">
              <img src={product.image} alt="img" />
            </div>
          </div>
        ))}
      </div>
    )
  );
};
export default Cart;

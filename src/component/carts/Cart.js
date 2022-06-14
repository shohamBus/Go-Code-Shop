import ProductToCart from "../context/ProductToCart";
import ShowCart from "../context/ShowCart";
import UniqueNumber from "../context/UniqueNumber";
import { useContext, useState } from "react";
import "./Carts.css";

const Cart = () => {
  const { productCart, setProductCart } = useContext(ProductToCart);
  const { isCart, setIsCart } = useContext(ShowCart);
  const { uniqueNumber, setUniqueNumber } = useContext(UniqueNumber);
  const [countProduct, setCountProduct] = useState(1);

  //how many times the product is in the array(present one), the amounte will go to 'countProduct'

  const CartDisplay = () => {
    productCart.sort().map();
    // .filter((value, index, array) => array.indexOf(value) === index);
  };

  //onclick the '+' sign add the product to the cart
  const addToCart = (product) => {
    //if includes adding just amount
    if (productCart.includes(product.id)) {
      setProductCart([
        ...productCart,
        {
          id: product.id,
          title: product.title,
          category: product.category,
          price: product.price,
          image: product.image,
          uniqueNumber,
        },
      ]);
    }

    setCountProduct((prev) => prev + 1);
    setIsCart(true);
    incrementUniqueNumber();
  };

  //increment the unique number
  const incrementUniqueNumber = () => {
    setUniqueNumber((prev) => prev + 1);
  };
  const decrement = () => {
    countProduct !== 0
      ? setCountProduct((prev) => prev - 1)
      : setCountProduct(0);
  };

  //onclick the 'remove From Cart' button remove from the cart the product
  const removeFromCartAllSame = (id) => {
    setProductCart(productCart.filter((item) => item.id !== id));
  };

  //dont show the cart if it empty
  setIsCart(productCart.length > 0 ? true : false);

  //function to display the cart container with the choosen products
  console.log(productCart);
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
              <button onClick={() => addToCart(product)}>+</button>
              <span>{countProduct}</span>
              <button
                onClick={() => {
                  decrement();
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

import ProductToCart from "../context/ProductToCart";
import ShowCart from "../context/ShowCart";
import React, { useContext } from "react";
import "./Carts.css";
import { Box } from "@mui/system";
import { Button, Drawer, List, ListItemButton } from "@mui/material";

const Cart = () => {
  const { productCart, addToCart, decrement, removeFromCartAllSame } =
    useContext(ProductToCart);
  const { isCart, setIsCart } = useContext(ShowCart);

  //calculate the price

  const totalPrice = () => {
    let sum = 0;
    productCart.map((item) => (sum += item.qty * item.price));
    return `${sum}$`;
  };

  //Drawer

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;
    setIsCart(open);
  };

  const list = () => (
    <Box
      sx={{ width: 350 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <div className="container-cart">
          <h1>Cart</h1>
        </div>
        {productCart.map((product) => (
          <div className="ptoduct-cart">
            <div className="info-cart">
              <h3>{product.title}</h3>
              <h4>{product.price}$</h4>
              <ListItemButton onClick={toggleDrawer(true)}>
                <button
                  onClick={() => {
                    setIsCart(true);
                    addToCart(product);
                  }}
                >
                  +
                </button>
                <span>{product.qty}</span>
                <button
                  onClick={() => {
                    decrement(product);
                  }}
                >
                  -
                </button>
                <button onClick={() => removeFromCartAllSame(product.id)}>
                  remove From Cart
                </button>
              </ListItemButton>
            </div>
            <div className="image-cart">
              <img src={product.image} alt="img" />
            </div>
          </div>
        ))}
        <h5>total price:{totalPrice()}</h5>
      </List>
    </Box>
  );
  return (
    <div>
      <React.Fragment>
        <Button onClick={toggleDrawer(true)}>
          <h1>Cart</h1>
        </Button>
        <Drawer anchor="right" open={isCart} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
};
export default Cart;

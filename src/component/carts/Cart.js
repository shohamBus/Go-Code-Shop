import ProductToCart from "../context/ProductToCart";
import ShowCart from "../context/ShowCart";
import React, { useContext } from "react";
import "./Carts.css";
import { Box } from "@mui/system";
import { Drawer, IconButton, List, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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

  // const toggleDrawer = (open) => (event) => {
  //   if (
  //     event.type === "keydown" &&
  //     (event.key === "Tab" || event.key === "Shift")
  //   )
  //     return;
  //   setIsCart(open);
  // };

  console.log(isCart);
  const list = () => (
    <Box
      sx={{ width: 350 }}
      role="presentation"
      onClick={() => setIsCart(true)}
    >
      <h1>Cart</h1>
      <List>
        {/* <div className="container-cart"> */}
        {productCart.map((product) => (
          <div className="ptoduct-cart">
            <div className="info-cart">
              <h3>{product.title}</h3>
              <h4>{product.price}$</h4>
              <IconButton className="button-contain">
                <button
                  className="buttons"
                  onClick={() => {
                    addToCart(product);
                  }}
                >
                  +
                </button>
                <span>{product.qty}</span>
                <button
                  className="buttons"
                  onClick={() => {
                    decrement(product);
                  }}
                >
                  -
                </button>
              </IconButton>
              <button
                className="buttons"
                onClick={() => removeFromCartAllSame(product.id)}
              >
                remove From Cart
              </button>
            </div>
            {/* <div className="image-cart">
                <img src={product.image} alt="img" />
              </div> */}
          </div>
        ))}
        {/* </div> */}
        <h5>total price:{totalPrice()}</h5>
      </List>
    </Box>
  );
  return (
    <>
      <ShoppingCartIcon
        fontSize="large"
        edge="start"
        color="inherit"
        aria-label="add to shopping cart"
        onClick={() => setIsCart(true)}
      ></ShoppingCartIcon>
      <Drawer anchor="right" open={isCart} onClose={() => setIsCart(false)}>
        <Box p={2} width="400px" textAlign="center" role="presentation">
          <Typography>
            <IconButton
              size="extra large"
              edge="start"
              color="inherit"
              aria-label="add to shopping cart"
              onClick={() => setIsCart(false)}
            >
              {/* <AddShoppingCartIcon /> */}
            </IconButton>
            {list()}
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};
export default Cart;

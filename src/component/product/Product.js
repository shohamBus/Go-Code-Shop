import "./Product.css";
import ProductToCart from "../context/ProductToCart";
import Showcart from "../context/ShowCart";
// import UniqueNumber from "../context/UniqueNumber";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
const Product = ({ productItem, id }) => {
  // const [countProduct, setCountProduct] = useState(0);
  const { productCart, setProductCart } = useContext(ProductToCart);
  const { setIsCart } = useContext(Showcart);

  // productItem.countProduct = countProduct;

  //onclick the '+' sign add the product to the cart
  const addToCart = ({ product, id }) => {
    // incrementCountNumber();
    // product.countProduct = product.countProduct + 1;
    console.log(id);
    let found = productCart.find((item) => item.id === id);
    if (!found) {
      //if includes adding just amount
      setProductCart([
        ...productCart,
        {
          id: productItem.id,
          title: productItem.title,
          category: productItem.category,
          price: productItem.price,
          image: productItem.image,
          // countProduct: product.countProduct,
        },
      ]);
    }
    setIsCart(true);
  };
  // console.log(productCart);
  // console.log({productItem.countProduct});

  //onclick the '-' sign remove from the cart the product
  const removeFromCart = (id) => {
    let found = productCart.find((item) => item.id === id);
    setProductCart(productCart.filter((item) => item !== found));
  };

  // incrementcountNumber;
  // const incrementCountNumber = () => {
  //   setCountProduct((prev) => prev + 1);
  // };

  //subtract one product from cart ?
  // const decrement = ({ product }) => {
  //   product.countProduct > 0
  //     ? (product.countProduct = product.countProduct - 1)
  //     : setIsCart(false);
  // };
  return (
    <Card className="product-card" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="120"
        image={productItem.image}
        alt="img of product"
      />
      <CardContent>
        <Typography
          className="product-info"
          gutterBottom
          variant="h5"
          component="div"
        >
          {productItem.title}
        </Typography>
        <Typography
          className="product-info"
          gutterBottom
          variant="h6"
          component="div"
        >
          {productItem.price}$
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`products/${id}`}>
          <Button size="large">Details</Button>
        </Link>
        <Button
          size="medium"
          onClick={() => {
            console.log({ productItem });
            addToCart({ productItem, id });
            console.log(productItem);
          }}
        >
          +
        </Button>
        <Button
          size="small"
          onClick={() => {
            // decrement({ productItem });
            removeFromCart(productItem.id);
          }}
        >
          -
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;

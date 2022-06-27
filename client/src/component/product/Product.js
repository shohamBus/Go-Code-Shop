import "./Product.css";
import ProductToCart from "../context/ProductToCart";
import { useContext } from "react";
import { Link } from "react-router-dom";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import AddBoxIcon from "@mui/icons-material/AddBox";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
const Product = ({ productItem, id }) => {
  const { productCart, addToCart, decrement } = useContext(ProductToCart);

  //show quantity number
  const showQantity = (productItem) => {
    const found = productCart.find((item) => item._id === productItem._id);
    if (found === undefined) return 0;
    else return found.qty;
  };

  return (
    <Card
      className="product-card"
      sx={{ maxWidth: 345, justifyContent: "space-between" }}
    >
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
          <Button className="buttons" size="large">
            Details
          </Button>
        </Link>
        <Button
          className="buttons"
          size="medium"
          onClick={() => {
            addToCart(productItem);
          }}
        >
          <AddBoxIcon />
        </Button>
        <span>{showQantity(productItem)}</span>
        <Button
          className="buttons"
          size="small"
          onClick={() => {
            decrement(productItem);
          }}
        >
          <IndeterminateCheckBoxIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;

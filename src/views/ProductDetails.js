import Utils from "../component/utils/Utils";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProductDetails.css";
const ProductDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [choosenProduct, setChoosenProduct] = useState({});

  //pull the specific product details from the API
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((product) => {
        setChoosenProduct(product);
        setIsLoading(false);
      });
  });

  return (
    <>
      {isLoading ? (
        <Utils />
      ) : (
        <div className="container">
          <div className="image">
            <img src={choosenProduct.image} alt="img" />
          </div>
          <h2>{choosenProduct.title}</h2>
          <h6 className="text">{choosenProduct.description}</h6>
          <h4>{choosenProduct.price}$</h4>
          <Link to={"/"}>
            <button>Back to shop</button>
          </Link>
        </div>
      )}
    </>
  );
};
export default ProductDetails;

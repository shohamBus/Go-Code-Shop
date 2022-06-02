import "./Product.css";

const Product = ({ imageProductPath, titleProduct, priceProduct }) => (
  <div className="product-card">
    <div className="product-image">
      <img src={imageProductPath} alt="img" />
    </div>
    <div className="product-info">
      <h5>{titleProduct}</h5>
      <h6>{priceProduct}$</h6>
    </div>
  </div>
);

export default Product;

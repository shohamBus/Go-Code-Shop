import "./Products.css";
import Product from "../product/Product";
import Utils from "../utils/Utils";

const Products = ({ productList }) => {
  return (
    <div>
      {productList.length > 0 ? (
        <section className="products">
          {productList.map(({ id, image, title, price }) => (
            <Product
              imageProductPath={image}
              titleProduct={title}
              priceProduct={price}
              key={id}
            />
          ))}
        </section>
      ) : (
        <Utils />
      )}
    </div>
  );
};

export default Products;

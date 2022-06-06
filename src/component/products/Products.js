import "./Products.css";
import Product from "../product/Product";

const Products = ({ productList }) => {
  return (
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
  );
};

export default Products;

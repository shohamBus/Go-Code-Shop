import "./Products.css";
import Product from "../product/Product";

const Products = ({ ProductList }) => {
  return (
    <section className="products">
      {ProductList.map(({ id, image, title, price }) => (
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

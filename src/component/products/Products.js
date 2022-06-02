import "./Products.css";
import Product from "../product/Product";

const Products = ({ data }) => {
  return (
    <section className="products">
      {data.map((item) => (
        <Product
          imageProductPath={item.image}
          titleProduct={item.title}
          priceProduct={item.price}
          key={item.id}
        />
      ))}
    </section>
  );
};

export default Products;

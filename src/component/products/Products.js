import "./Products.css";
import Product from "../product/Product";

const Products = ({ productList }) => {
  return (
    <div>
      <section className="products">
        {productList.map((item) => (
          <Product productItem={item} id={item.id} key={item.id} />
        ))}
      </section>
    </div>
  );
};

export default Products;

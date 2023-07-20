import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const dummyProducts = [
  {
    id: 1,
    name: "Product 1",
    price: 9.99,
    description:
      "This is the description for Product 1. It is a dummy product for testing purposes.",
  },
  {
    id: 2,
    name: "Product 2",
    price: 14.99,
    description:
      "This is the description for Product 2. It is another dummy product.",
  },
  {
    id: 3,
    name: "Product 3",
    price: 24.99,
    description:
      "This is the description for Product 3. Yet another dummy product for testing.",
  },
  {
    id: 4,
    name: "Product 4",
    price: 19.99,
    description:
      "This is the description for Product 4. One more dummy product to go!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummyProducts.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;

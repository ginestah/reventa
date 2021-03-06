import { useState, useEffect } from "react";
import "./Products.css";
import Product from "../../components/Product/Product";
import Search from "../../components/Search/Search";
import Layout from "../../components/shared/Layout/Layout";
import { getProducts } from "../../services/products";
import Checkbox from "../../components/Checkbox/Checkbox";

const Products = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const [queriedProducts, setQueriedProducts] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setAllProducts(products);
      setQueriedProducts(products);
    };
    fetchProducts();
  }, []);
  const handleChange = (e) => {
    const value = e.target.type === "checkbox" && e.target.checked;
    if (value) {
      setOptions([...options, e.target.value]);
      const newQueriesProducts = allProducts.filter((product) =>
        product.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setQueriedProducts(newQueriesProducts);
    } else {
      let findNum = options.findIndex((option) => option === e.target.value);
      const removeOne = options[findNum];

      options.splice(findNum, 1, removeOne);

      setQueriedProducts(allProducts);
    }
  };

  const handleSearch = (e) => {
    const newQueriesProducts = allProducts.filter((product) =>
      product.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setQueriedProducts(newQueriesProducts);
  };

  const handleSubmit = (e) => e.preventDefault();

  const productsJSX = queriedProducts.map((product, index) => (
    <Product
      _id={product._id}
      key={index}
      name={product.name}
      photos={product.photos ? product.photos : null}
      price={product.price}
    />
  ));

  return (
    <Layout user={props.user}>
      <Search onSubmit={handleSubmit} onChange={handleSearch} />
      <Checkbox
        onChange={handleChange}
        onSubmit={handleSubmit}
        setQueriedProducts={setQueriedProducts}
        allProducts={allProducts}
      />
      <div className="products">{productsJSX}</div>
    </Layout>
  );
};
export default Products;

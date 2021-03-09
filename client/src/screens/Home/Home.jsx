import "./Home.css";
import { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { getProducts } from "../../services/products";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const products = await getProducts();
      setProducts(products);
    };
    fetch();
  }, []);

  return (
    <Layout>
      <div className="home">
        <div className="recently-added"></div>
        <div className="design-resources"></div>
      </div>
    </Layout>
  );
}
export default Home;

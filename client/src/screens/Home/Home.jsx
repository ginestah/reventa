import "./Home.css";
import { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { getProducts } from "../../services/products";
import Slider from "./Slider";
import About from "../../components/About/About";
import Resources from "../../components/Resources/Resources";

function Home(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const products = await getProducts();
      setProducts(products);
    };
    fetch();
  }, []);

  return (
    <Layout user={props.user}>
      <div className="home">
        {/* <h3>Recent Listings:</h3> */}
        {props.user ? (
          <h3 className="link-welcome">Welcome Home {props.user.username}!</h3>
        ) : null}
        <div className="slider-div">
          <Slider products={products} />
        </div>

        <Resources />
        <About />
      </div>
    </Layout>
  );
}
export default Home;

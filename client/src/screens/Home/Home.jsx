import "./Home.css";
import { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { getProducts } from "../../services/products";
import Slider from "./Slider";

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
        {props.user ? (
          <div className="link-welcome">Welcome Home {props.user.username}</div>
        ) : null}
        <div>Recent Listings:</div>
        <div className="slider-div">
          <Slider products={products} />
        </div>
        <div className="design-resources">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.apartmenttherapy.com/white-walls-and-plants-trend-36885767"
          >
            What is it about white walls and plants that we can't quit?
          </a>
          <br />
          <a
            rel="noreferrer"
            href="https://www.cocokelley.com/2021/02/try-the-trend-checkerboard/"
          >
            Try the checkerboard trend
          </a>
        </div>
      </div>
    </Layout>
  );
}
export default Home;

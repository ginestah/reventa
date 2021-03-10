import "./Home.css";
import { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { getProducts } from "../../services/products";
import { Link } from "react-router-dom";
function Home(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const products = await getProducts();
      setProducts(products);
    };
    fetch();
  }, []);
  const PRODUCTS = products.map((product, index) =>
    index < 3 ? (
      <div key={index} className="recently-added-items">
        <Link to={`products/${product._id}`}>
          {" "}
          <div>{product.name}</div>
        </Link>
        <img src={product.photos[0].imgURL} alt={product.name} />
      </div>
    ) : null
  );
  return (
    <Layout user={props.user}>
      <div className="home">
        {props.user ? (
          <div className="link-welcome">Welcome Home {props.user.username}</div>
        ) : null}

        <div className="recently-added">{PRODUCTS}</div>
        <div className="design-resources">
          <a
            target="_blank"
            href="https://www.apartmenttherapy.com/white-walls-and-plants-trend-36885767"
          >
            What is it about white walls and plants that we can't quit?
          </a>
          <a href="https://www.cocokelley.com/2021/02/try-the-trend-checkerboard/">
            Try the checkerboard trend
          </a>
        </div>
      </div>
    </Layout>
  );
}
export default Home;

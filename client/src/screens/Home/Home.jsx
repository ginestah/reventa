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
          <div className="resource-tile">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://satoridesignforliving.com/decorating-with-thrift-store-finds-shopping-styling-tips/"
            >
              Decorating with Thrift Store Finds
              <br></br>
              <img
                src="https://i2.wp.com/satoridesignforliving.com/wp-content/uploads/2012/03/Olde-English-Countryside-close-up.jpg"
                alt="Ironstone Olde English Countryside Plate"
              />
            </a>
          </div>
          <div className="resource-tile">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.realsimple.com/home-organizing/used-furniture-for-sale"
            >
              Buying and Selling Furniture Online: the Ultimate Guide
              <br></br>
              <img
                src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F23%2F2016%2F07%2F28%2Fbuy-sell-furniture-online-0719-fur.jpg"
                alt="buy-sell-furniture-online-0719-fur"
              />
            </a>
          </div>
          <div className="resource-tile">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.hgtv.ca/decorating/photos/thrifted-home-decor-second-hand-decorating-1936516/#"
            >
              12 Thrifted Home Decor Ideas to Inspire Your Second-Hand
              Decorating Dreams
              <br></br>
              <img
                src="https://assets.blog.hgtv.ca/wp-content/uploads/2020/02/20085728/thrifted-decor-barrel-table-pexels.jpg"
                alt="Half a repurposed barrel reconstructed to be used as an outdoor coffee table"
              />
            </a>
          </div>
          <div className="resource-tile">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://makespace.com/blog/posts/sell-used-furniture-online-fast/"
            >
              8 Tips To Sell Used Furniture Online Fast
              <br></br>
              <img
                src="https://cdn.makespace.com/blog/wp-content/uploads/2017/06/23170820/brown-leather-sofa-bookcase-e1498252115687.png"
                alt="brown leather sofa surrounded on all sides by a bookcase"
              />
            </a>
          </div>
          <div className="resource-tile">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.mymove.com/home-inspiration/decoration-design-ideas/tips-for-buying-second-hand-furniture/"
            >
              20 Tips For Buying Second Hand Furniture
              <br></br>
              <img
                src="https://www.mymove.com/wp-content/uploads/2010/09/vintage-chair-makeover-chalk-paint-and-reupholstery-with-paisley-duck-cloth-diy-makeover-vintage_t20_P3RQ07-2048x1367.jpg"
                alt="Vintage chair makeover - chalk paint and new fabric"
              />
            </a>
          </div>
          <div className="resource-tile">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.treehugger.com/why-we-love-second-hand-furniture-4857307"
            >
              Why We Love Second-Hand Furniture
              <br></br>
              <img
                src="https://www.treehugger.com/thmb/yXKqFpjsdniU8AD-kYXXudtVvYE=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__treehugger__images__2017__10__hanging_chairs-0b60e053b0d2427fb8cc92db3839e15b.jpg"
                alt="assorted wooden chairs hanging up on display"
              />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default Home;

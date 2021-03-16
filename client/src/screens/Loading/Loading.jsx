import Layout from "../../components/shared/Layout/Layout";
import "./Loading.css"

function Loading(props) {
  return (
    <Layout>
      <img
        className="loading-image"
        src="https://res.cloudinary.com/dpbzq29kr/image/upload/v1615817765/couch_ur6lc0.png"
        alt="loading"
      />
      <h3>Loading...</h3>
    </Layout>
  );
}
export default Loading;

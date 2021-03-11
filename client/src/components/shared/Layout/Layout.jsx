import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
<<<<<<< HEAD
import "./Layout.css"
=======
import "./Layout.css";
>>>>>>> 0759982eb804ca263a65fdee22371a674926d9fe

function Layout(props) {
  return (
    <div className="layout">
      <Nav user={props.user} />
      <div className="layout-children">{props.children}</div>
      <Footer />
    </div>
  );
}
export default Layout;

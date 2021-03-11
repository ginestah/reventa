import { NavLink } from "react-router-dom";
import "./Nav.css"

function Nav({ user }) {
  return (
    <nav>
      <div className="nav">
      <NavLink to="/" className="logo">
        {" "}
        R E V E N T A
      </NavLink>
      <div className="links">
        <NavLink className="all-link" to="/products">All Listings</NavLink>
        {user ? (
          <>
            <NavLink className="add-product-link" to="/add-product">
              Add Product
            </NavLink>
            <NavLink className="sign-out-link" to="/sign-out">
              Sign Out
            </NavLink>
          </>
        ) : (
          <>
            <NavLink className="sign-up-link" to="/sign-up">
              Sign Up
            </NavLink>
            <NavLink className="sign-in-link" to="/sign-in">
              Sign In
            </NavLink>
          </>
        )}
        </div>
        </div>
    </nav>
  );
}
export default Nav;

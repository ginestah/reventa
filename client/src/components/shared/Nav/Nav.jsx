import { NavLink } from "react-router-dom";
import "./Nav.css";
import { useMediaPredicate } from "react-media-hook";
import Burger from "./Burger";

function Nav({ user }) {
  const smallerThan500 = useMediaPredicate("(max-width:500px)");
  const smallerThan500height = useMediaPredicate("(max-height:500px)");
  return (
    <nav>
      <div className="nav">
        <NavLink to="/" className="logo">
          {" "}
          R E V E N T A
        </NavLink>
        {smallerThan500 || smallerThan500height ? (
          <Burger user={user} />
        ) : (
          <div className="links">
            <NavLink className="all-link" to="/products">
              Listings
            </NavLink>
            {user ? (
              <>
                <NavLink className="add-product-link" to="/add-product">
                  Add Product
                </NavLink>
                <NavLink className="sign-out-link" to="/sign-out">
                  Sign Out
                </NavLink>
                <NavLink className="wishlist-link" to={`/wishlist/${user._id}`}>
                  Wish Lists
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
        )}
      </div>
    </nav>
  );
}
export default Nav;

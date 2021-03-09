import { NavLink } from "react-router-dom";

function Nav({ user }) {
  return (
    <nav className="nav">
      <NavLink to="/" className="logo">
        {" "}
        Reventa
      </NavLink>
      <div className="links">
        <NavLink to="/products">All Listings</NavLink>
        {user ? (
          <>
            <NavLink className="link" to="/add-product">
              Add Product
            </NavLink>
            <NavLink className="link" to="/sign-out">
              Sign Out
            </NavLink>
          </>
        ) : (
          <>
            <NavLink className="link" to="/sign-up">
              Sign Up
            </NavLink>
            <NavLink className="link" to="/sign-in">
              Sign In
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}
export default Nav;

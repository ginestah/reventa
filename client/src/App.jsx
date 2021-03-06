import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./screens/Home/Home";
import Products from "./screens/Products/Products";
import ProductCreate from "./screens/ProductCreate/ProductCreate";
import ProductEdit from "./screens/ProductEdit/ProductEdit";
import ProductDetails from "./screens/ProductDetails/ProductDetails";
import { Route, Switch, Redirect } from "react-router-dom";
import { verifyUser } from "./services/users";
import SignUp from "./screens/SignUp/SignUp";
import SignIn from "./screens/SignIn/SignIn";
import SignOut from "./screens/SignOut/SignOut";
import WishLists from "./screens/WishLists/WishLists";
import Loading from "./screens/Loading/Loading";

function App() {
  const [user, setUser] = useState(null);
  const [notloaded, setNotLoaded] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setNotLoaded(false);
    }, 1000);
  }, []);

  const clearUser = () => setUser(null);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home user={user} />
        </Route>
        <Route path="/sign-up">
          <SignUp setUser={setUser} />
        </Route>
        <Route path="/sign-in">
          <SignIn setUser={setUser} />
        </Route>
        <Route path="/sign-out">
          <SignOut setUser={setUser} clearUser={clearUser} />
        </Route>
        <Route exact path="/products">
          <Products user={user} />
        </Route>
        {notloaded ? (
          <Loading user={user} />
        ) : (
          <Route path="/add-product">
            {user ? <ProductCreate user={user} /> : <Redirect to="/sign-up" />}
          </Route>
        )}
        {notloaded ? (
          <Loading user={user} />
        ) : (
          <Route exact path="/products/:id/edit">
            {user ? <ProductEdit user={user} /> : <Redirect to="/" />}
          </Route>
        )}
        <Route exact path="/products/:id">
          <ProductDetails user={user} />
        </Route>
        <Route exact path="/wishlist/:id">
          <WishLists user={user} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

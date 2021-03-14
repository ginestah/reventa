import React from "react";
import "./SignIn.css";
import { signIn } from "../../services/users";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Layout from "../../components/shared/Layout/Layout";

const SignIn = (props) => {
  const history = useHistory();

  const [form, setForm] = useState({
    username: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onSignIn = (event) => {
    event.preventDefault();

    const { setUser } = props;

    signIn(form)
      .then((user) => {
        setUser(user);
      })
      .then(() => history.push("/"))
      .catch((error) => {
        console.error(error);
        setForm({
          isError: true,
          errorMsg: "Invalid User Credentials",
          username: "",
          password: "",
        });
      });
  };

  const renderError = () => {
    if (form.isError) {
      return <p className="error-message">{form.errorMsg}</p>;
    }
  };

  const { username, password } = form;

  return (
    <Layout>
      <div className="form-container">
        <h3>Sign In</h3>
        <form onSubmit={onSignIn}>
          <div className="signin-username">
            <label>Username</label>
            <input
              autoFocus
              required
              type="text"
              name="username"
              value={username}
              placeholder="Enter Username"
              onChange={handleChange}
            />
          </div>
          <div className="signin-password">
            <label>Password</label>
            <input
              required
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          {renderError()}
          <button type="submit">Sign In</button>
        </form>
      </div>
    </Layout>
  );
};

export default SignIn;
